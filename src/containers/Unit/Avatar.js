import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar as BaseAvatar} from '../../components/BaseUI/index';
import {connect} from 'react-redux';
import {getRoomAvatar} from '../../selector/entities/room';

class Avatar extends Component {

  render() {
    const {avatarObject} = this.props;
    const style = {...this.props.style};
    const {color, initials} = avatarObject;

    if (color) {
      if (!style.container) {
        style.container = {};
      }
      style.container.backgroundColor = color;
    }

    return (
      <BaseAvatar
        {...this.props}
        text={initials}
        style={style}
      />
    );
  }
}


Avatar.propTypes = {
  roomId: PropTypes.string,
  userId: PropTypes.string,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    if (props.roomId) {
      return {
        avatarObject: getRoomAvatar(state, props),
      };
    }
    return {};
  };
};

export default connect(
  makeMapStateToProps,
)(Avatar);

