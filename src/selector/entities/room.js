import {createSelector} from 'reselect';

const getRoom = (state, props) => state.entities.rooms[props.roomId];

export const makeGetRoom = () => {
  return createSelector(
    getRoom,
    (room) => room
  );
};

export const makeGetRoomWithMessages = () => {
  return createSelector(
    makeGetRoom(),
    (state) => state.entities.roomMessages,
    (room, roomMessages) => {
      return {
        ...room,
        lastMessage: room ? roomMessages[room.lastMessage] : null,
        firstUnreadMessage: room ? roomMessages[room.firstUnreadMessage] : null,
      };
    });
};