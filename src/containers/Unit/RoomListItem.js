import React from 'react';
import PropTypes from 'prop-types';
import RoomListItemComponent from '../../components/Unit/RoomListItem';
import {connect} from 'react-redux';
import {Proto} from '../../modules/Proto/index';
import {getAuthorHash, getMessageTitle} from '../../utils/app';
import {getRoom, getRoomLastMessage, getRoomPeer} from '../../selector/entities/room';

class RoomListItem extends React.PureComponent {

  onRoomPress = () => {
    const {room, onPress} = this.props;
    onPress(room);
  };

  onLongPress = () => {
    const {room, onLongPress} = this.props;
    if (onLongPress) {
      onLongPress(room);
    }
  };

  render() {
    const {room, lastMessage, selected, disablePin, chatPeerVerified} = this.props;
    if (!room) {
      return null;
    }

    const authorHash = getAuthorHash();
    const ownerLastMessage = lastMessage && authorHash === lastMessage.authorHash;
    const lastMessageStatus = ownerLastMessage && room.type !== Proto.Room.Type.CHANNEL ? lastMessage.status : false;
    const verified = chatPeerVerified || room.channelVerified;
    const lastMessageTitle = getMessageTitle(lastMessage);

    return (<RoomListItemComponent roomId={room.id}
      roomTitle={room.title}
      roomType={room.type}
      roomPined={!disablePin && room.pinId !== '0'}
      selected={selected}
      roomMute={room.roomMute === Proto.RoomMute.MUTE}
      unreadCount={room.unreadCount}
      lastMessageTitle={lastMessageTitle}
      lastMessageTime={lastMessage ? lastMessage.createTime : null}
      ownerLastMessage={ownerLastMessage}
      lastMessageStatue={lastMessageStatus}
      onPress={this.onRoomPress}
      onLongPress={this.onLongPress}
      verified={verified}
    />);
  }
}

RoomListItem.propTypes = {
  roomId: PropTypes.string.isRequired,
  disablePin: PropTypes.bool,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const chatPeer = getRoomPeer(state, props);
  return {
    room: getRoom(state, props),
    lastMessage: getRoomLastMessage(state, props),
    chatPeerVerified: chatPeer ? chatPeer.verified : null,
  };
};

export default connect(
  mapStateToProps,
)(RoomListItem);
