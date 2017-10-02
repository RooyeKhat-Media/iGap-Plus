import {createSelector} from 'reselect';

const getRoom = (state, props) =>
  state.entities.rooms[props.roomId];

const makeGetRoom = () => {
  return createSelector(
    getRoom,
    (room) => {
      return room;
    }
  );
};

export default makeGetRoom;