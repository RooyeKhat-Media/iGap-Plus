import React from 'react';
import PropTypes from 'prop-types';
import RoomListItemComponent from '../../components/Unit/RoomListItem';
import {connect} from 'react-redux';
import {Proto} from '../../modules/Proto/index';
import {getAuthorHash} from '../../utils/app';
import {getRoom, getRoomLastMessage} from '../../selector/entities/room';

class RoomListItem extends React.PureComponent {

  onRoomPress = () => {
    const {room, onPress} = this.props;
    onPress(room);
  };

  render() {
    const {room, lastMessage} = this.props;
    if (!room) {
      return null;
    }

    const authorHash = getAuthorHash();
    const ownerLastMessage = lastMessage && authorHash === lastMessage.authorHash;
    const lastMessageStatus = ownerLastMessage && room.type !== Proto.Room.Type.CHANNEL ? lastMessage.status : false;

    const lastMessageTitle = this.getSecondaryTitle();

    return (<RoomListItemComponent roomId={room.id}
      roomTitle={room.title}
      roomType={room.type}
      unreadCount={room.unreadCount}
      lastMessageTitle={lastMessageTitle}
      lastMessageTime={lastMessage ? lastMessage.createTime : null}
      ownerLastMessage={ownerLastMessage}
      lastMessageStatue={lastMessageStatus}
      onPress={this.onRoomPress}
    />);
  }

  getSecondaryTitle = () => {
    const {lastMessage} = this.props;
    if (lastMessage) {
      if (lastMessage.message) {
        return lastMessage.message;
      }
      if (lastMessage.attachment) {
        return 'Attachment';
      }
      if (lastMessage.log) {
        return 'Log Message';
      }
      if (lastMessage.location) {
        return 'location';
      }
      if (lastMessage.location) {
        return 'location';
      }
      if (lastMessage.deleted) {
        return 'Deleted Message';
      }
    }
    return 'No Message';
  }
}

RoomListItem.propTypes = {
  roomId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    room: getRoom(state, props),
    lastMessage: getRoomLastMessage(state, props),
  };
};

export default connect(
  mapStateToProps,
)(RoomListItem);
