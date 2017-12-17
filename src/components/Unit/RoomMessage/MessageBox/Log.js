import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primary} from '../../../../themes/default/index';

/**
 *
 * @param message {ProtoRoomMessage}
 * @returns {XML}
 */
export default ({message}) => {
  let messageText = '';
  switch (message.log.getType()) {
    case message.log.Type.USER_JOINED :
      messageText = 'user joined ';
      break;
    case message.log.Type.USER_DELETED :
      messageText = 'user deleted ';
      break;
    case message.log.Type.ROOM_CREATED :
      messageText = 'room created';
      break;
    case message.log.Type.MEMBER_ADDED:
      messageText = 'member added';
      break;
    case message.log.Type.MEMBER_KICKED :
      messageText = 'member kicked ';
      break;
    case message.log.Type.MEMBER_LEFT :
      messageText = 'member left ';
      break;
    case message.log.Type.ROOM_CONVERTED_TO_PUBLIC :
      messageText = 'room converted to public ';
      break;
    case message.log.Type.ROOM_CONVERTED_TO_PRIVATE :
      messageText = 'room converted to private ';
      break;
    case message.log.Type.MEMBER_JOINED_BY_INVITE_LINK :
      messageText = 'member joined by invite link ';
      break;
    case message.log.Type.ROOM_DELETED :
      messageText = 'room deleted ';
      break;
    case message.log.Type.MISSED_VOICE_CALL :
      messageText = 'missed voice call ';
      break;
    case message.log.Type.MISSED_VIDEO_CALL :
      messageText = 'missed video call ';
      break;
    case message.log.Type.MISSED_SCREEN_SHARE :
      messageText = 'missed screen share';
      break;
    case message.log.Type.MISSED_SECRET_CHAT :
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
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: primary,
    borderRadius: 15,
  },
  text: {
    color: 'white',
  },
});