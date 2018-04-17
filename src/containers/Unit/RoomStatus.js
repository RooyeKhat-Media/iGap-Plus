import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getRoom, getRoomPeer} from '../../selector/entities/room';
import {FormattedMessage, FormattedRelative} from 'react-intl';
import i18n from '../../i18n';
import {Proto} from '../../modules/Proto/index';
import {metricSuffix} from '../../utils/core';

class RoomStatus extends React.PureComponent {
  render() {
    const {room, peer} = this.props;
    if (room.type === Proto.Room.Type.CHAT) {
      if (peer.status === Proto.RegisteredUser.Status.EXACTLY) {
        return (<FormattedRelative updateInterval={0} value={peer.lastSeen * 1000}/>);
      } else {
        return (<FormattedMessage {...i18n.roomStatusLabelStatus} values={{status: peer.status}}/>);
      }
    } else if (room.type === Proto.Room.Type.GROUP) {
      return (<FormattedMessage {...i18n.roomStatusLabelMember} values={{
        member: room.groupParticipantsCount,
        memberLabel: metricSuffix(room.groupParticipantsCount),
      }}/>);
    } else if (room.type === Proto.Room.Type.CHANNEL) {
      return (<FormattedMessage {...i18n.roomStatusLabelMember} values={{
        member: room.channelParticipantsCount,
        memberLabel: metricSuffix(room.channelParticipantsCount),
      }}/>);
    }
    return null;
  }
}

RoomStatus.propTypes = {
  roomId: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired,
  peer: PropTypes.object,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      peer: getRoomPeer(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps
)(RoomStatus);

