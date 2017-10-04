import {createSelector} from 'reselect';

const getRoomMessage = (state, props) =>
  state.entities.roomMessages[props.messageId];

const makeGetRoomMessage = () => {
  createSelector(
    getRoomMessage,
    (roomMessage) => {
      return roomMessage;
    }
  );
};

export default makeGetRoomMessage;