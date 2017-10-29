import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar as CircleIcon, Icon} from '../BaseUI/index';
import i18n from '../../i18n/index';
import Avatar from '../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.styles';

class CallComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Mute :true,
      speaker:false,
      imageSize :null,
    };
  }

    getStyles = () => {
      return MemoizeResponsiveStyleSheet(styleSheet);
    };

    muteClick = () => {
      this.setState({Mute: !this.state.Mute});
    };

    speakerClick = () => {
      this.setState({speaker: !this.state.speaker});
    };

    onAvatarLayout = (event) => {
      const { height } = event.nativeEvent.layout;
      this.setState({imageSize:height});
    };

    render() {
      const styles = this.getStyles();
      const {intl,  roomId} = this.props;

      return (
        <View style={styles.container}>

          <View style={styles.avatar}     onLayout={this.onAvatarLayout}>
            {this.state.imageSize && (<Avatar  userId={roomId} size={this.state.imageSize}/>)}
            <View style={styles.blueForeground}/>
          </View>

          <View>
            <View style={styles.layoutCall}>
              <TouchableOpacity  onPress={() => alert('chat')}>
                <CircleIcon icon="chat" iconSize={35} size={70} iconColor="#666"  style={styles.chatIcon} />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => alert('call')}>
                <CircleIcon icon="call-end" iconSize={35} size={70} iconColor="#fff"  style={styles.callIcon} />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => alert('end')}>
                <CircleIcon icon="call-end" iconSize={35} size={70} iconColor="#666"  style={styles.endIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowField}>
              <TouchableOpacity style={styles.layoutItem} onPress={ this.muteClick}>
                <Icon name={this.state.Mute ? 'mic' : 'mic-off'} style={ this.state.Mute ? styles.activeIcon : styles.inActiveIcon} size={24}/>
                <Text style={ this.state.Mute ? styles.activeText : styles.inActiveText} >{intl.formatMessage(i18n.callMute)}</Text>
              </TouchableOpacity>
              <View style={styles.layoutItem}>
                <Icon name="more-vert" style={styles.activeIcon} size={24}/>
              </View>
              <TouchableOpacity style={styles.layoutItem} onPress={ this.speakerClick}>
                <Icon name={this.state.speaker ? 'volume-up' : 'volume-off'} style={ this.state.speaker ? styles.activeIcon : styles.inActiveIcon} size={24}/>
                <Text  style={ this.state.speaker ? styles.activeText : styles.inActiveText}>{intl.formatMessage(i18n.callSpeaker)}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowField}>
              <TouchableOpacity style={styles.layoutItem} onPress={ null}>
                <Icon name="chat" style={styles.activeIcon}  size={24}/>
                <Text  style={styles.activeText} >{intl.formatMessage(i18n.callSendMessage)}</Text>
              </TouchableOpacity>
              <View style={styles.layoutItem}>
                <Text  style={styles.activeText} >connecting</Text>
              </View>
              <TouchableOpacity style={styles.layoutItem} onPress={ null}>
                <Icon name="dialpad" style={styles.activeIcon}  size={24} />
                <Text  style={styles.activeText}  > {intl.formatMessage(i18n.callKeyPad)}</Text>
              </TouchableOpacity>
            </View>

            <Text  style={styles.textName} >Jemes lean</Text>
            <Text  style={styles.textigapCall} >{intl.formatMessage(i18n.calliGapCall)}/Outcall</Text>
          </View>
        </View>
      );
    }
}

CallComponent.propTypes = {
  intl: intlShape.isRequired,
  roomId:PropTypes.string.isRequired,
};

export default injectIntl(CallComponent);