import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar as CircleIcon, Icon} from '../BaseUI/index';
import i18n from '../../i18n/index';
import Avatar from '../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.styles';
import {red} from '../../themes/default/index';
import {SIGNALING_ACTION, SIGNALING_STATUS} from '../../constants/signaling';
import BlinkRecorder from '../General/Camera/BlinkRecorder';

class CallComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSize: null,
    };
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  keypadClick = () => {
    alert('keypad');
  };

  getStatusString(status) {
    let value = '';
    const {intl} = this.props;

    switch (status) {
      case SIGNALING_STATUS.DISCONNECTED:
        value = intl.formatMessage(i18n.callDisconnected);
        break;
      case SIGNALING_STATUS.CALLING:
        value = intl.formatMessage(i18n.callCalling) + ' ...';
        break;
      case SIGNALING_STATUS.RINGING:
        value = intl.formatMessage(i18n.callRinging) + ' ...';
        break;
      case SIGNALING_STATUS.CONNECTING:
        value = intl.formatMessage(i18n.callConnecting) + ' ...';
        break;
      case SIGNALING_STATUS.CONNECTED:
        value = intl.formatMessage(i18n.callConnected);
        break;
      case SIGNALING_STATUS.REJECTED:
        value = intl.formatMessage(i18n.callRejected);
        break;
      case SIGNALING_STATUS.NOT_ANSWERED:
        value = intl.formatMessage(i18n.callNotAnswered);
        break;
      case SIGNALING_STATUS.UNAVAILABLE:
        value = intl.formatMessage(i18n.callUnavailable);
        break;
      case SIGNALING_STATUS.BUSY:
        value = intl.formatMessage(i18n.callBusy);
        break;
    }
    return value;
  }


  render() {
    const styles = this.getStyles();
    const {intl, callAction, callBack, user} = this.props;

    const showButton = callAction.status === SIGNALING_STATUS.CONNECTED || !callAction.incoming;
    const showChatAndAnswer = callAction.status === SIGNALING_STATUS.CALLING;

    return (
      <View style={styles.container}>

        <View style={styles.avatar}
          onLayout={(event) => {
            this.setState({imageSize: event.nativeEvent.layout.height});
          }}>
          {this.state.imageSize && (
            <Avatar userId={callAction.peerUserId} size={this.state.imageSize} circle={false}/>)}
          <View style={styles.blueForeground}/>
        </View>

        {/*<RTCView  streamURL={callAction.remoteUrl} style={{ width: 500, height: 300, backgroundColor:'#987'}}/>*/}

        <View>
          <View style={styles.layoutCall}>
            {(callAction.incoming && showChatAndAnswer) &&
            <TouchableOpacity onPress={() => {
              callBack(SIGNALING_ACTION.CHAT_AND_CLOSE);
            }}>
              <CircleIcon icon="chat" iconSize={35} size={70} iconColor="#666" style={styles.chatIcon}/>
            </TouchableOpacity>
            }
            {(callAction.incoming && showChatAndAnswer) &&
            <TouchableOpacity onPress={() => callBack(SIGNALING_ACTION.ANSWER)}>
              <CircleIcon icon="call-end" iconSize={35} size={70} iconColor="#2AEDEA" style={styles.callIcon}/>
            </TouchableOpacity>
            }

            <TouchableOpacity onPress={() => callBack(SIGNALING_ACTION.REJECT)}>
              <CircleIcon icon="call-end" iconSize={35} size={70} iconColor={red} style={styles.endIcon}/>
            </TouchableOpacity>

          </View>

          <View style={styles.rowField}>
            {
              showButton &&
              <TouchableOpacity style={styles.layoutItem} onPress={() => callBack(SIGNALING_ACTION.TOGGLE_MIC)}>
                <Icon name={callAction.mic ? 'mic' : 'mic-off'}
                  style={callAction.mic ? styles.activeIcon : styles.inActiveIcon} size={24}/>
                <Text
                  style={callAction.mic ? styles.activeText : styles.inActiveText}>{intl.formatMessage(i18n.callMute)}</Text>
              </TouchableOpacity>
            }
            <View style={styles.layoutItem}>
              {/*<Icon name="more-vert" style={styles.activeIcon} size={24}/>*/}
            </View>

            {
              showButton &&
              <TouchableOpacity style={styles.layoutItem} onPress={() => callBack(SIGNALING_ACTION.TOGGLE_SPEAKER)}>
                <Icon name={callAction.speaker ? 'volume-up' : 'volume-off'}
                  style={callAction.speaker ? styles.activeIcon : styles.inActiveIcon} size={24}/>
                <Text
                  style={callAction.speaker ? styles.activeText : styles.inActiveText}>{intl.formatMessage(i18n.callSpeaker)}</Text>
              </TouchableOpacity>
            }
          </View>

          <View style={styles.rowField}>
            {
              showButton &&
              <TouchableOpacity style={styles.layoutItem} onPress={() => callBack(SIGNALING_ACTION.CHAT)}>
                <Icon name="chat" style={styles.activeIcon} size={24}/>
                <Text style={styles.activeText}>{intl.formatMessage(i18n.callSendMessage)}</Text>
              </TouchableOpacity>
            }
            <View style={styles.layoutItem}>
              {
                callAction.status === SIGNALING_STATUS.CONNECTED ?
                  <BlinkRecorder textColor="black" showCircle={false} startTime={callAction.startTime}/>
                  :
                  <Text style={styles.activeText}>{this.getStatusString(callAction.status)}</Text>
              }
            </View>
            {
              showButton &&
              <TouchableOpacity style={styles.layoutItem} onPress={this.keypadClick}>
                <Icon name="dialpad" style={styles.activeIcon} size={24}/>
                <Text style={styles.activeText}> {intl.formatMessage(i18n.callKeyPad)}</Text>
              </TouchableOpacity>
            }
          </View>

          <Text style={styles.textName}>{user && user.firstName}</Text>
          <Text
            style={styles.textigapCall}>{intl.formatMessage(i18n.calliGapCall) + ' / '}{callAction.incoming ? intl.formatMessage(i18n.callInCall) : intl.formatMessage(i18n.callOutCall)}</Text>
        </View>
      </View>
    );
  }
}

CallComponent.propTypes = {
  intl: intlShape.isRequired,
  callAction: PropTypes.object.isRequired,
  callBack: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default injectIntl(CallComponent);