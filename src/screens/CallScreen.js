import React, {Component} from 'react';
import CallComponent from '../components/Call/index';
import {connect} from 'react-redux';
import {callInfo, isInCall, toggleMic, toggleSpeaker} from '../actions/methods/signaling/callAction';
import Call from '../modules/Call/index';
import {SIGNALING_ACTION, SIGNALING_STATUS} from '../constants/signaling';
import Api from '../modules/Api/index';
import {SIGNALING_LEAVE} from '../constants/methods/index';
import {SignalingLeave} from '../modules/Proto/index';
import putState from '../modules/Entities/RegisteredUsers/index';
import {getUser} from '../selector/entities/registeredUser';
import {goRoomHistory} from '../navigators/SecondaryNavigator';
import {getPeerRoomId} from '../utils/messenger';


class CallScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const {userId, inComing, signalingType} = this.props.navigation.state.params;
    const {callAction, setIsInCall, setCallInfo} = this.props;
    if (!callAction.isInCall) {
      putState(userId);
      setCallInfo(userId, inComing, signalingType);
      if (!inComing) {
        Call.instance.sendOffer(userId, signalingType);
      }
      setIsInCall(true);
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
        this.goToChat();
        break;
      case SIGNALING_ACTION.CHAT_AND_CLOSE:
        this.props.navigation.goBack();
        Api.invoke(SIGNALING_LEAVE, new SignalingLeave());
        this.goToChat();
        break;
      case SIGNALING_ACTION.REJECT:
        this.props.navigation.goBack();
        Api.invoke(SIGNALING_LEAVE, new SignalingLeave());
        break;
    }
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
        setTimeout(this.props.navigation.goBack, 300);
    }

    if (!user || callAction.peerUserId === 0) {
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
  // myProp: PropTypes.string.isRequired
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
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(CallScreen);