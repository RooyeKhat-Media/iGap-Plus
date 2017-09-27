import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles, {defaultStyle, groupStyle, logStyle, ownerStyle} from './index.styles';
import MessageBox from './MessageBox';
import Log from './MessageBox/Log';
import {Avatar, Icon} from '../BaseUI';

class RoomMessage extends React.Component {


  // render log messages
  renderLogMessage() {
    const {message} = this.props;
    return (
      <View style={[defaultStyle.container, logStyle.container]}>
        <Log message={message}/>
      </View>
    );
  }

  // render owner messages
  renderOwnerMessage() {
    const {message} = this.props;
    return (<View style={[defaultStyle.container, ownerStyle.container]}>
      <View style={[defaultStyle.messageBox, ownerStyle.messageBox]}>
        <MessageBox message={message}/>
        {this.renderTime()}
      </View>
    </View>);
  }

  renderGroupMessage() {
    const {message} = this.props;
    return (<View style={[defaultStyle.container, groupStyle.container]}>
      <View style={[defaultStyle.messageBox, groupStyle.messageBox]}>
        <MessageBox message={message}/>
        {this.renderTime()}
      </View>
    </View>);
  }

  renderChatMessage() {
    const {message} = this.props;
    return (<View style={[defaultStyle.container, groupStyle.container]}>
      <View style={[defaultStyle.messageBox, groupStyle.messageBox]}>
        <MessageBox message={message}/>
        {this.renderTime()}
      </View>
    </View>);
  }

  renderChannelMessage() {
    const {message} = this.props;
    return (<View style={[defaultStyle.container, groupStyle.container]}>
      <View style={[defaultStyle.messageBox, groupStyle.messageBox]}>
        <MessageBox message={message}/>
        {this.renderTime()}
      </View>
    </View>);
  }

  renderTime() {
    return (<View style={defaultStyle.dateWrap}>
      <Text style={defaultStyle.dateText}>14:23</Text>
    </View>);
  }

  render() {
    const {message} = this.props;
    return (<View style={styles.container}>
      <View style={styles.avatarWrap}>
        <Avatar size={40} text="MM"/>
      </View>
      <View style={styles.messageBox}>
        <View style={styles.messageHeader}>
          <Text style={styles.userTitle}>Mohammad Javad</Text>
        </View>
        <View style={styles.message}>
          <Text>
            {message.getMessage()}
          </Text>
        </View>

        <View style={styles.footerWrap}>
          <View style={styles.viewsWrap}>
            <Icon name="visibility" color="#aaa" size={15}/>
            <Text style={styles.viewText}>13K</Text>
          </View>
          <Text style={styles.timeText}>14:15</Text>
        </View>
      </View>
      <View style={styles.channelThumbsWrap}>
        {/*<Text style={{textAlign: 'center', fontSize: 9, color: '#00970d'}}>13</Text>*/}
        <View style={[styles.channelThumb, styles.channelThumbUp]}>
          <Icon name="thumb-up" size={14} color="#eee"/>
        </View>

        <View style={[styles.channelThumb, styles.channelThumbDown]}>
          <Icon name="thumb-down" size={14} color="#eee"/>
        </View>
        {/*<Text style={{textAlign: 'center', fontSize: 9, color: '#e92429'}}>13</Text>*/}
      </View>
    </View>);
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomMessage);