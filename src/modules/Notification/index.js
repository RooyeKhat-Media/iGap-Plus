import {sortBy, join, map, uniqBy} from 'lodash';
import PushNotification from 'react-native-push-notification';
import * as CRC32 from 'crc-32';

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
}

/**
 * open notification for new message
 *
 * @param id
 * @private
 */
function _notify(id) {
  const {title, avatar, messages} = _notifications.get(id);
  PushNotification.localNotification({
    id: CRC32.str(id).toString(),
    title,
    message: join(map(messages, 'message'), '\n'),
    // largeIcon: avatar,
  });
}

/**
 * clear notification
 * @param {string} id
 */
export function clearNotification(id) {
  _notifications.delete(id);
  PushNotification.cancelLocalNotifications({id});
}