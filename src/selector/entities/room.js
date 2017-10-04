import {createSelector} from 'reselect';

const getRoom = (state, props) => state.entities.rooms[props.roomId];

export const getRoomWithMessages = createSelector(
  getRoom,
  (state) => state.entities.roomMessages,
  (room, roomMessages) => {
    return {
      ...room,
      lastMessage: room ? roomMessages[room.lastMessage] : null,
      firstUnreadMessage: room ? roomMessages[room.firstUnreadMessage] : null,
    };
  }
);


export const getRoomAvatar = createSelector(
  getRoom,
  (room) => {
    return {
      color: room.color,
      initials: room.initials,
      avatar: room.avatar,
    };
  }
);