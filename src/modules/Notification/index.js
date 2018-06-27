import {Platform} from 'react-native';
import {sortBy, join, map, uniqBy} from 'lodash';
import PushNotification from 'react-native-push-notification';
import * as CRC32 from 'crc-32';
import firebase from 'react-native-firebase';

const _notifications = new Map();

/**
 * stack messages for notification
 *
 * @param {string} id
 * @param {string} title
 * @param {string} avatar
 * @param {string} message
 * @param {string} sort
 */
export function notifyMessage(id, title, avatar, message, sort) {
  if (Platform.OS === 'android') {
    let messages = [];
    if (_notifications.has(id)) {
      messages = _notifications.get(id)['messages'];
    }
    messages.push({message, sort});
    messages = sortBy(uniqBy(messages, 'sort'), 'sort');
    if (messages.length === 7) {
      messages.shift();
    }
    _notifications.set(id, {
      title,
      avatar,
      messages,
    });
    _notify(id);
  } else {
    displayNotification(null, title, message);
  }
}

/**
 * open notification for new message
 *
 * @param id
 * @private
 */
function _notify(id) {
  const {title, messages} = _notifications.get(id);
  displayNotification(
    CRC32.str(id).toString(),
    title,
    join(map(messages, 'message'), '\n')
  );
}

/**
 * display firebase Notification
 * @param id
 * @param title
 * @param message
 */
export function displayNotification(id, title, message) {
  const notification = new firebase.notifications.Notification()
    .setNotificationId(id)
    .setTitle(title)
    .setBody(message);
  firebase.notifications().displayNotification(notification);
}

/**
 * clear notification
 * @param {string} id
 */
export function clearNotification(id) {
  _notifications.delete(id);
  PushNotification.cancelLocalNotifications({id});
}