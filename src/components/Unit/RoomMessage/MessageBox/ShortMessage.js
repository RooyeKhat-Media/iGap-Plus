import React from 'react';
import {Text} from 'react-native';

/**
 * @param message {FlatRoomMessage}
 * @returns {XML}
 */
export default ({message, ...props}) => {
  let messageText = ' ';
  if (message.message) {
    messageText = message.message;
  } else if (message.attachment) {
    messageText = 'Attachment';
  } else if (message.log) {
    messageText = 'Log Message';
  } else if (message.location) {
    messageText = 'location';
  } else if (message.location) {
    messageText = 'location';
  }
  return (<Text numberOfLines={1} {...props}>{messageText}</Text>
  );
};