import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import {Proto} from '../../../modules/Proto/index';
import LogBox from './LoxBox';
import OwnerBox from './OwnerBox';
import ChatBox from './ChatBox';
import GroupBox from './GroupBox';
import ChannelBox from './ChannelBox';

class RoomMessage extends React.Component {
  render() {
    const {message, authorHash, roomType} = this.props;

    if (message.messageType === Proto.RoomMessageType.LOG) {
      return (<LogBox message={message}/>);
    } else if (message.authorHash === authorHash) {
      return (<OwnerBox message={message}/>);
    } else if (roomType === Proto.Room.Type.CHAT) {
      return (<ChatBox message={message}/>);
    } else if (roomType === Proto.Room.Type.GROUP) {
      return (<GroupBox message={message}/>);
    } else if (roomType === Proto.Room.Type.CHANNEL) {
      return (<ChannelBox message={message}/>);
    }

    return null;
  }
}

RoomMessage.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(RoomMessage);