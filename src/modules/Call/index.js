import Api from '../Api/index';
import store from '../../configureStore';
import {Proto} from '../../modules/Proto/index';
import {goCall} from '../../navigators/SecondaryNavigator';
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
import {getUserMedia, RTCIceCandidate, RTCPeerConnection, RTCSessionDescription} from 'react-native-webrtc';
import {SIGNALING_STATUS} from '../../constants/signaling';
import {remoteUrl, reset, status} from '../../actions/methods/signaling/callAction';

const callSingleton = Symbol();
const callSingletonEnforcer = Symbol();

let _peerConnection = null;
let _offerSdp = null;
let _offerType = null;
let _isCreateAnswer = false;
let _isSendLeave = false;

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
    _offerType = signalingType;
    _isSendLeave = false;
    await  this.getPeerConnectionInstance();
    _offerSdp = await _peerConnection.createOffer();
    const signalingOffer = new SignalingOffer();
    signalingOffer.setType(signalingType);
    signalingOffer.setCalledUserId(userId);
    signalingOffer.setCallerSdp(_offerSdp.sdp);
    Api.invoke(SIGNALING_OFFER, signalingOffer);
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
  async receiveOffer(response) {
    _offerType = response.getType();
    _isSendLeave = false;
    const info = {sdp: response.getCallerSdp(), type: 'offer'};
    await  this.getPeerConnectionInstance();
    await  _peerConnection.setRemoteDescription(new RTCSessionDescription(info));
    Api.invoke(SIGNALING_RINGING, new SignalingRinging());
    goCall(response.getCallerUserId().toString(), true, response.getType());
  }

  async createAnswer() {
    if (!_isCreateAnswer) {
      _isCreateAnswer = true;
      const date = await _peerConnection.createAnswer();
      const signalingAccept = new SignalingAccept();
      signalingAccept.setCalledSdp(date.sdp);
      await Api.invoke(SIGNALING_ACCEPT, signalingAccept);
      await _peerConnection.setLocalDescription(date);
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
        setTimeout(() => store.dispatch(reset()), 500);
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
    }

    /*        else if (_offerType === Proto.SignalingOffer.Type.VIDEO_CALLING) {
      let isFront = true;

      const sourceInfos = await MediaStreamTrack.getSources();

      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind == 'video' && sourceInfo.facing == (isFront ? 'front' : 'back')) {
          videoSourceId = sourceInfo.id;
        }
      }
      audio = true;
      video = {
        mandatory: {
          // minWidth: 500, // Provide your own width, height and frame rate here
          // minHeight: 300,
          minFrameRate: 30,
        },
        facingMode: (isFront ? 'user' : 'environment'),
        optional: (videoSourceId ? [{sourceId: videoSourceId}] : []),
      };
    }*/

    const stream = await  getUserMedia({audio: audio, video: video});
    await  _peerConnection.addStream(stream);
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

  //**************************************************

  async resetValue() {
    if (_peerConnection !== null) {
      _peerConnection.close();
      _peerConnection = null;
    }
    _offerSdp = null;
    _offerType = null;
    _isCreateAnswer = false;

    if (!_isSendLeave) {
      Api.invoke(SIGNALING_LEAVE, new SignalingLeave());
      _isSendLeave = true;
    }
  }

  setSendLeave(leave) {
    _isSendLeave = leave;
  }

  onHold(hold) {
    console.log('SessionHold ', hold);
  }

}