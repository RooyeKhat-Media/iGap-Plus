import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 *
 * @param message {ProtoRoomMessage}
 * @returns {XML}
 */
export default ({message}) => {
  let messageText = '';
  switch (message.getLog().getType()) {
    case message.getLog().Type.USER_JOINED :
      messageText = 'user joined ';
      break;
    case message.getLog().Type.USER_DELETED :
      messageText = 'user deleted ';
      break;
    case message.getLog().Type.ROOM_CREATED :
      messageText = 'room created';
      break;
    case message.getLog().Type.MEMBER_ADDED:
      messageText = 'member added';
      break;
    case message.getLog().Type.MEMBER_KICKED :
      messageText = 'member kicked ';
      break;
    case message.getLog().Type.MEMBER_LEFT :
      messageText = 'member left ';
      break;
    case message.getLog().Type.ROOM_CONVERTED_TO_PUBLIC :
      messageText = 'room converted to public ';
      break;
    case message.getLog().Type.ROOM_CONVERTED_TO_PRIVATE :
      messageText = 'room converted to private ';
      break;
    case message.getLog().Type.MEMBER_JOINED_BY_INVITE_LINK :
      messageText = 'member joined by invite link ';
      break;
    case message.getLog().Type.ROOM_DELETED :
      messageText = 'room deleted ';
      break;
    case message.getLog().Type.MISSED_VOICE_CALL :
      messageText = 'missed voice call ';
      break;
    case message.getLog().Type.MISSED_VIDEO_CALL :
      messageText = 'missed video call ';
      break;
    case message.getLog().Type.MISSED_SCREEN_SHARE :
      messageText = 'missed screen share';
      break;
    case message.getLog().Type.MISSED_SECRET_CHAT :
      messageText = 'missed secret chat';
      break;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{messageText}</Text>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 11,

  },
});