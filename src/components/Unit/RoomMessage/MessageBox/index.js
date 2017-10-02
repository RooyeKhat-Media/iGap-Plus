import React from 'react';
import {View} from 'react-native';
import styles from './index.styles';
import Text from './Text';
import Image from './Image';
import Video from './Video';
import Audio from './Audio';
import Voice from './Voice';
import Gif from './Gif';
import File from './File';
import Location from './Location';
import Contact from './Contact';
import {Proto} from '../../../../modules/Proto/index';

class MessageBox extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        {this.renderContent()}
      </View>
    );
  }

  renderContent() {
    /**
     * @type {ProtoRoomMessage}
     */
    const {message} = this.props;
    console.log('message', message);
    switch (message.getMessageType()) {

      case Proto.RoomMessageType.TEXT:
        return (<Text message={message.getMessage()}/>);

      case Proto.RoomMessageType.IMAGE:
      case Proto.RoomMessageType.IMAGE_TEXT:
        return (<Image message={message.getMessage()} attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
        return (<Video message={message.getMessage()} attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.AUDIO:
      case Proto.RoomMessageType.AUDIO_TEXT:
        return (<Audio message={message.getMessage()} attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.VOICE:
        return (<Voice attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.GIF:
      case Proto.RoomMessageType.GIF_TEXT:
        return (<Gif message={message.getMessage()} attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.FILE:
      case Proto.RoomMessageType.FILE_TEXT:
        return (<File message={message.getMessage()} attachment={message.getAttachment()}/>);

      case Proto.RoomMessageType.LOCATION:
        return (<Location location={message.getLocation()}/>);

      case Proto.RoomMessageType.CONTACT:
        return (<Contact contact={message.getContact()}/>);

    }
  }
}

export default MessageBox;