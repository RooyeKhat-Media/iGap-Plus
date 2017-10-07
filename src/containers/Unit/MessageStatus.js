import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../components/BaseUI/index';
import {Proto} from '../../modules/Proto/index';

class MessageStatus extends Component {
  render() {
    const {status, size} = this.props;

    switch (status) {
      case Proto.RoomMessageStatus.FAILED:
        return (<Icon {...this.props} size={size} name="remove-circle" color="#F3211E"/>);
      case Proto.RoomMessageStatus.SENDING:
        return (<Icon {...this.props} size={size} name="schedule" color="#7d7d7d"/>);
      case Proto.RoomMessageStatus.SENT:
        return (<Icon {...this.props} size={size} name="done" color="#7d7d7d"/>);
      case Proto.RoomMessageStatus.DELIVERED:
        return (<Icon {...this.props} size={size} name="done-all" color="#7d7d7d"/>);
      case Proto.RoomMessageStatus.SEEN:
        return (<Icon {...this.props} size={size} name="done-all" color="#3298ee"/>);
      case Proto.RoomMessageStatus.LISTENED:
        return (<Icon {...this.props} size={size} name="done-all" color="#3298ee"/>);
      default:
        return null;
    }
  }
}

MessageStatus.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  size: PropTypes.number,
};

export default MessageStatus;
