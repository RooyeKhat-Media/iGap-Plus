/**
 * @flow
 */
import {createSelector} from 'reselect';
import {getRoomId} from '../entities/room';

const getMessages = (state) =>
  state.messenger.roomMessages;

export const getRoomMessageList = createSelector(
  getRoomId,
  getMessages,
  (roomId, messages) => {
    return messages[roomId];
  }
);

