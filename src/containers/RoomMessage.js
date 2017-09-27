import React, {Component} from 'react';
import RoomMessageComponent from '../components/RoomMessage';
import {getAuthorHash} from '../utils/app';

class RoomMessage extends Component {
  render() {
    const authorHash = getAuthorHash();
    const {message} = this.props;

    return (
      <RoomMessageComponent
        message={message}
        authorHash={authorHash}/>
    );
  }
}

export default RoomMessage;