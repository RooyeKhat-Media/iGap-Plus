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
    const {message, showText} = this.props;
    switch (message.messageType) {

      case Proto.RoomMessageType.TEXT:
        return (<Text message={message.message} showText={showText}/>);

      case Proto.RoomMessageType.IMAGE:
      case Proto.RoomMessageType.IMAGE_TEXT:
        return (<Image message={message.message} attachment={message.attachment} showText={showText}/>);

      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
        return (<Video message={message.message} attachment={message.attachment} showText={showText}/>);

      case Proto.RoomMessageType.AUDIO:
      case Proto.RoomMessageType.AUDIO_TEXT:
        return (<Audio message={message.message} attachment={message.attachment} showText={showText}/>);

      case Proto.RoomMessageType.VOICE:
        return (<Voice attachment={message.attachment}/>);

      case Proto.RoomMessageType.GIF:
      case Proto.RoomMessageType.GIF_TEXT:
        return (<Gif message={message.message} attachment={message.attachment} showText={showText}/>);

      case Proto.RoomMessageType.FILE:
      case Proto.RoomMessageType.FILE_TEXT:
        return (<File message={message.message} attachment={message.attachment} showText={showText}/>);

      case Proto.RoomMessageType.LOCATION:
        return (<Location location={message.location}/>);

      case Proto.RoomMessageType.CONTACT:
        return (<Contact contact={message.contact}/>);

      default:
        return null;
    }
  }
}

export default MessageBox;