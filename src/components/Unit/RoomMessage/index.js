import React from 'react';
import {Text, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import {Avatar} from '../../BaseUI/index';
import LogBox from './LoxBox';
import OwnerBox from './OwnerBox';
import ChatBox from './ChatBox';
import GroupBox from './GroupBox';
import ChannelBox from './ChannelBox';

class RoomMessage extends React.Component {

  render() {
    const {message, messageType} = this.props;
    switch (messageType) {
      case 'log':
        return (<LogBox message={message}/>);
      case 'owner':
        return (<OwnerBox message={message}/>);
      case 'chat':
        return (<ChatBox message={message}/>);
      case 'group':
        return (<GroupBox message={message}/>);
      case 'channel':
        return (<ChannelBox message={message}/>);
      default:
        return null;
    }
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomMessage);