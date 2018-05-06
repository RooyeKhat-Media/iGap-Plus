import Api from '../Api/index';
import store from '../../configureStore';
import {Proto} from '../../modules/Proto/index';
import {goCall} from '../../navigators/SecondaryNavigator';
import {SIGNALING_STATUS} from '../../constants/signaling';
import {
  SignalingAccept,
  SignalingCandidate,
  SignalingGetConfiguration,
  SignalingLeave,
  SignalingOffer,
  SignalingRinging,
} from '../Proto/index';
import {
  SIGNALING_ACCEPT,
  SIGNALING_CANDIDATE,
  SIGNALING_GET_CONFIGURATION,
  SIGNALING_LEAVE,
  SIGNALING_OFFER,
  SIGNALING_RINGING,
} from '../../constants/methods/index';
import {
  getUserMedia,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
  MediaStreamTrack,
} from 'react-native-webrtc';
import {
  remoteUrl,
  reset,
  selfRemoteUrl,
  status,
} from '../../actions/methods/signaling/callAction';
import {requestGetLog} from '../../screens/MainTabs/CallListScreen';
import ServerError from '../Error/ServerError';
import {
  ERROR_SIGNALING_OFFER_BLOCKED_BY_PEER,
  ERROR_SIGNALING_OFFER_FORBIDDEN,
  ERROR_SIGNALING_OFFER_PRIVACY_PROTECTION,
} from '../Api/errors/index';
import InCallManager from './inCall';
import {setRingtoneStatuse} from './middleware';

const callSingleton = Symbol();
const callSingletonEnforcer = Symbol();

export const timeOutCloseCAll = 500;
export const timeOutCloseCAllScreen = 550;
const videoBandwidth = 256;

let _peerConnection = null;
let _offerSdp = null;
let _offerType = null;
let _isCreateAnswer = false;
let _isSendLeave = true;
let _localStream = null;
let _receiveOfferResponse = null;

export default class Call {

  constructor(enforcer) {
    if (enforcer !== callSingletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  /**
   * Get Call instance
   * @returns {Call}
   */
  static get instance() {
    if (!this[callSingleton]) {
      this[callSingleton] = new Call(callSingletonEnforcer);
    }
    return this[callSingleton];
  }

  //**************************************************  caller

  /**
   * @type  ProtoSignalingOfferResponse
   */
  async sendOffer(userId, signalingType) {
    try {
      _offerType = signalingType;
      _isSendLeave = false;
      await  this.getPeerConnectionInstance();
      _offerSdp = await _peerConnection.createOffer();
      _offerSdp.sdp = this.setBandwidth(_offerSdp.sdp);
      const signalingOffer = new SignalingOffer();
      signalingOffer.setType(signalingType);
      signalingOffer.setCalledUserId(userId);
      signalingOffer.setCallerSdp(_offerSdp.sdp);
      await Api.invoke(SIGNALING_OFFER, signalingOffer);
    } catch (e) {
      if (e instanceof ServerError) {
        _isSendLeave = true;
        switch (e.errorResponse.getMajorCode()) {
          case ERROR_SIGNALING_OFFER_FORBIDDEN:
            if (e.errorResponse.getMinorCode() === 9) {
              store.dispatch(status(SIGNALING_STATUS.BUSY));
            } else {
              store.dispatch(status(SIGNALING_STATUS.UNAVAILABLE));
            }
            break;
          case ERROR_SIGNALING_OFFER_BLOCKED_BY_PEER:
          case ERROR_SIGNALING_OFFER_PRIVACY_PROTECTION:
            store.dispatch(status(SIGNALING_STATUS.UNAVAILABLE));
            break;
          default:
            store.dispatch(status(SIGNALING_STATUS.DISCONNECTED));
        }
      } else {
        store.dispatch(status(SIGNALING_STATUS.DISCONNECTED));
      }
      setTimeout(() => store.dispatch(reset()), timeOutCloseCAll);
      throw e;
    }
  }

  async onAccept(calledSdp) {
    const info = {sdp: calledSdp, type: 'answer'};
    await _peerConnection.setLocalDescription(_offerSdp);
    await _peerConnection.setRemoteDescription(new RTCSessionDescription(info));
  }

  onicecandidate(data) {
    if (data.candidate) {
      const signalingCandidate = new SignalingCandidate();
      signalingCandidate.setCandidate(data.candidate.candidate);
      signalingCandidate.setSdpMId(data.candidate.sdpMid);
      signalingCandidate.setSdpMLineIndex(data.candidate.sdpMLineIndex);
      Api.invoke(SIGNALING_CANDIDATE, signalingCandidate);
    }
  }

  //**************************************************  called

  /**
   /**
   * @type  ProtoSignalingOfferResponse
   */
  receiveOffer(response) {
    _receiveOfferResponse = response;
    goCall(response.getCallerUserId().toString(), true, response.getType());
  }

  async receiveOfferFromCall() {
    if (_receiveOfferResponse === null) {
      return;
    }
    Api.invoke(SIGNALING_RINGING, new SignalingRinging());
  }

  async createAnswer() {
    try {
      if (!_isCreateAnswer) {
        InCallManager.stopRingtone();
        setRingtoneStatuse(false);

        _offerType = _receiveOfferResponse.getType();
        _isSendLeave = false;
        const info = {sdp: _receiveOfferResponse.getCallerSdp(), type: 'offer'};
        await  this.getPeerConnectionInstance();
        await  _peerConnection.setRemoteDescription(new RTCSessionDescription(info));

        _isCreateAnswer = true;
        const date = await _peerConnection.createAnswer();
        date.sdp = this.setBandwidth(date.sdp);
        const signalingAccept = new SignalingAccept();
        signalingAccept.setCalledSdp(date.sdp);
        await Api.invoke(SIGNALING_ACCEPT, signalingAccept);
        await _peerConnection.setLocalDescription(date);
      }
    } catch (e) {
      store.dispatch(status(SIGNALING_STATUS.DISCONNECTED));
      setTimeout(() => store.dispatch(reset()), timeOutCloseCAll);
      throw e;
    }
  }

  onCandidate(peerSdpMId, peerSdpMLineIndex, peerCandidate) {
    const info = {candidate: peerCandidate, sdpMLineIndex: peerSdpMLineIndex, sdpMid: peerSdpMId};
    _peerConnection.addIceCandidate(new RTCIceCandidate(info));
  }

  //**************************************************

  onAddStream(remoteStream) {
    store.dispatch(remoteUrl(remoteStream.stream.toURL()));
  }

  oniceconnectionstatechange(event) {
    switch (event.target.iceConnectionState) {
      case 'closed' :
      case 'disconnected':
      case 'failed' :
        store.dispatch(status(SIGNALING_STATUS.DISCONNECTED));
        setTimeout(() => store.dispatch(reset()), timeOutCloseCAll);
        break;
      case 'checking' :
        store.dispatch(status(SIGNALING_STATUS.CONNECTING));
        break;
      case 'connected' :
      case 'completed':
        store.dispatch(status(SIGNALING_STATUS.CONNECTED));
        break;
    }
  }

  async getPeerConnectionInstance() {
    if (_peerConnection === null) {
      const config = await  this._setConfig();
      _peerConnection = new RTCPeerConnection(config);
      _peerConnection.onicecandidate = this.onicecandidate;
      _peerConnection.onaddstream = this.onAddStream;
      _peerConnection.oniceconnectionstatechange = this.oniceconnectionstatechange;
      await this.addStream();
    }
    return _peerConnection;
  }

  async addStream() {

    let audio = false;
    let video = false;

    if (_offerType === Proto.SignalingOffer.Type.VOICE_CALLING) {
      audio = true;
      video = false;
    } else if (_offerType === Proto.SignalingOffer.Type.VIDEO_CALLING) {
      let isFront = true;
      const sourceInfos = await MediaStreamTrack.getSources();
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video' && sourceInfo.facing === (isFront ? 'front' : 'back')) {
          videoSourceId = sourceInfo.id;
        }
      }
      audio = true;
      video = {
        mandatory: {
          minWidth: 320,
          minHeight: 240,
          minFrameRate: 15,
        },
        facingMode: (isFront ? 'user' : 'environment'),
        optional: (videoSourceId ? [{sourceId: videoSourceId}] : []),
      };
    }

    _localStream = await  getUserMedia({audio: audio, video: video});
    store.dispatch(selfRemoteUrl(_localStream.toURL()));
    await  _peerConnection.addStream(_localStream);
  }

  async _setConfig() {
    /**
     * @type ProtoSignalingGetConfigurationResponse
     */
    const signalingGetConfigurationResponse = await Api.invoke(SIGNALING_GET_CONFIGURATION, new SignalingGetConfiguration());

    let iceServers = [];
    signalingGetConfigurationResponse.getIceServerList().forEach(item => {
      iceServers.push({
        url: item.getUrl(),
        credential: item.getCredential(),
        username: item.getUsername(),
      });
    });

    return {
      'iceServers': iceServers,
      'bundlePolicy': 'max-bundle',
      'rtcpMuxPolicy': 'require',
      'iceTransportPolicy': 'relay',
    };
  }

  setBandwidth(sdp) {
    return sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + videoBandwidth + '\r\n');
  }

  //**************************************************

  async resetValue() {
    if (_peerConnection !== null) {
      _peerConnection.close();
      _peerConnection = null;
      setTimeout(() => requestGetLog(0, 1), 1500);
    }
    _offerSdp = null;
    _offerType = null;
    _isCreateAnswer = false;
    _receiveOfferResponse = null;

    if (!_isSendLeave) {
      Api.invoke(SIGNALING_LEAVE, new SignalingLeave());
      _isSendLeave = true;
    }
    if (_localStream) {
      _localStream.release();
      _localStream = null;
    }
  }

  setSendLeave(leave) {
    _isSendLeave = leave;
  }

  onHold(hold) {
    console.log('SessionHold ', hold);
  }

}