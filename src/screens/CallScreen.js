import React, {Component} from 'react';
import CallComponent from '../components/Call/index';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import {
  callInfo,
  isInCall,
  reset,
  toggleMic,
  toggleSpeaker,
} from '../actions/methods/signaling/callAction';
import Call, {timeOutCloseCAllScreen} from '../modules/Call/index';
import {
  SIGNALING_ACTION,
  SIGNALING_STATUS,
} from '../constants/signaling';
import Api from '../modules/Api/index';
import {SIGNALING_LEAVE} from '../constants/methods/index';
import {SignalingLeave} from '../modules/Proto/index';
import putState from '../modules/Entities/RegisteredUsers/index';
import {getUser} from '../selector/entities/registeredUser';
import {goRoomHistory} from '../navigators/SecondaryNavigator';
import {getPeerRoomId} from '../utils/messenger';
import Permission, {
  PERMISSION_CAMERA,
  PERMISSION_MICROPHONE,
} from '../modules/Permission/index';
import {Proto} from '../modules/Proto/index';
import i18n from '../i18n/index';

class CallScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    const {userId, inComing, signalingType} = this.props.navigation.state.params;
    const {callAction, setIsInCall, setCallInfo, intl} = this.props;
    if (!callAction.isInCall) {
      putState(userId);
      try {
        if (signalingType === Proto.SignalingOffer.Type.VOICE_CALLING || signalingType === Proto.SignalingOffer.Type.VIDEO_CALLING) {
          await  Permission.grant(PERMISSION_MICROPHONE, intl.formatMessage(i18n.callTitlePermission, {
            callDirect: inComing,
            callType: signalingType,
          }), intl.formatMessage(i18n.callContentVoicePermission));
        }
        if (signalingType === Proto.SignalingOffer.Type.VIDEO_CALLING) {
          await  Permission.grant(PERMISSION_CAMERA, intl.formatMessage(i18n.callTitlePermission, {
            callDirect: inComing,
            callType: signalingType,
          }), intl.formatMessage(i18n.callContentVideoPermission));
        }
        setCallInfo(userId, inComing, signalingType);

        if (inComing) {
          Call.instance.receiveOfferFromCall();
        } else {
          Call.instance.sendOffer(userId, signalingType);
        }
        setIsInCall(true);

      } catch (error) {
        if (inComing) {
          this.endCallAndClose();
        } else {
          this.props.navigation.goBack();
        }
      }

    }
  }

  callBack = (action) => {
    switch (action) {
      case SIGNALING_ACTION.TOGGLE_MIC:
        this.props.toggleMic();
        break;
      case SIGNALING_ACTION.TOGGLE_SPEAKER:
        this.props.toggleSpeaker();
        break;
      case SIGNALING_ACTION.ANSWER:
        Call.instance.createAnswer();
        break;
      case SIGNALING_ACTION.CHAT:
        this.props.navigation.goBack();
        this.goToChat();
        break;
      case SIGNALING_ACTION.CHAT_AND_CLOSE:
        this.endCallAndClose();
        this.goToChat();
        break;
      case SIGNALING_ACTION.REJECT:
        this.endCallAndClose();
        break;
    }
  };

  endCallAndClose = () => {
    Call.instance.setSendLeave(true);
    this.props.navigation.goBack();
    this.props.resetCall();
    Api.invoke(SIGNALING_LEAVE, new SignalingLeave());
  };

  goToChat = async () => {
    const chatId = await getPeerRoomId(this.props.navigation.state.params.userId.toString());
    goRoomHistory(chatId);
  };


  render() {
    const {callAction, user} = this.props;
    switch (callAction.status) {
      case SIGNALING_STATUS.NOT_ANSWERED:
      case SIGNALING_STATUS.REJECTED:
      case SIGNALING_STATUS.UNAVAILABLE:
      case SIGNALING_STATUS.DISCONNECTED:
      case SIGNALING_STATUS.BUSY:
        setTimeout(this.props.navigation.goBack, timeOutCloseCAllScreen);
    }

    if (!user) {
      return null;
    }

    return (
      <CallComponent
        callAction={callAction}
        callBack={this.callBack}
        user={user}
      />
    );
  }
}

CallScreen.propTypes = {
  intl: intlShape.isRequired,
};


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      user: getUser(state, props),
      callAction: state.methods.callAction,
    };
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setCallInfo: (peerUserId, incoming, signalingType) => {
      return dispatch(callInfo(peerUserId, incoming, signalingType));
    },
    setIsInCall: (value) => {
      return dispatch(isInCall(value));
    },
    toggleMic: () => {
      return dispatch(toggleMic());
    },
    toggleSpeaker: () => {
      return dispatch(toggleSpeaker());
    },
    resetCall: () => {
      return dispatch(reset());
    },
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(injectIntl(CallScreen));