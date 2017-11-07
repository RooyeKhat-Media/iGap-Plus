import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthorHash} from '../../utils/app';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getFullMessage} from '../../selector/entities/roomMessage';

class RoomMessage extends Component {

  render() {
    const authorHash = getAuthorHash();
    const {message, roomType} = this.props;

    if (!message || message.deleted) {
      return null;
    }

    return (
      <RoomMessageComponent
        authorHash={authorHash}
        roomType={roomType}
        message={message}/>
    );
  }
}


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getFullMessage(state, props),
    };
  };
};


export default connect(
  makeMapStateToProps
)(RoomMessage);

