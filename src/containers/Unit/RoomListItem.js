import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, ListItem as BaseListItem} from '../../components/BaseUI/index';
import makeGetRoom from '../../selector/entities/getRoom';
import {connect} from 'react-redux';

class RoomListItem extends Component {
  render() {
    const {room} = this.props;
    if (!room) {
      return null;
    }
    return (
      <BaseListItem
        centerElement={{
          primaryText: room.title,
          secondaryText: room.lastMessage ? 'with Last Message' : 'No Message',
        }}
        leftElement={<Avatar size={40}
          style={{container: {backgroundColor: room.color}}}
          text={room.initials}
        />}
      />
    );
  }
}

RoomListItem.propTypes = {
  roomId: PropTypes.string.isRequired,
};

const makeMapStateToProps = () => {
  const getRoomObject = makeGetRoom();
  return (state, props) => {
    return {
      room: getRoomObject(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomListItem);
