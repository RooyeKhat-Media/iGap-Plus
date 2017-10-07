import {createSelector} from 'reselect';

export const getRoomMessage = (state, props) => state.entities.roomMessages[props.messageId];

export const getFullMessage = createSelector(
  getRoomMessage,
  (state) => state.entities.registeredUsers,
  (roomMessage, registeredUsers) => {
    if (!roomMessage) {
      return null;
    }
    return {
      ...roomMessage,
      authorUserObject: roomMessage.authorUser ? registeredUsers[roomMessage.authorUser] : null,
    };
  }
);
