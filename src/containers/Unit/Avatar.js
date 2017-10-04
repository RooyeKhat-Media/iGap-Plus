import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar as BaseAvatar} from '../../components/BaseUI/index';
import {connect} from 'react-redux';
import {makeGetRoom} from '../../selector/entities/room';

class Avatar extends Component {

  render() {
    const {roomObject, userObject} = this.props;
    const style = {...this.props.style};
    let color = '';
    let initials = '';

    if (roomObject) {
      color = roomObject.color;
      initials = roomObject.initials;

    } else if (userObject) {
      color = userObject.color;
      initials = userObject.initials;
    }

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
  const getRoomObject = makeGetRoom();
  return (state, props) => {
    if (props.roomId) {
      return {
        roomObject: getRoomObject(state, props),
      };
    }
    return {};
  };
};

export default connect(
  makeMapStateToProps,
)(Avatar);

