import {Platform} from 'react-native';
import {sortBy, join, map, uniqBy} from 'lodash';
import firebase from 'react-native-firebase';
import {NOTIFICATION_CHANNEL_ID} from '../../constants/app';

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
    displayNotification(id, title, message);
  }
}

/**
 * open notification for new message
 *
 * @param id
 * @private
 */
function _notify(id) {
  const {title, messages, avatar} = _notifications.get(id);
  displayNotification(
    id,
    title,
    join(map(messages, 'message'), '\n'),
    avatar
  );
}

/**
 * display firebase Notification
 * @param id
 * @param title
 * @param message
 * @param avatar
 */
export async function displayNotification(id, title, message, avatar) {
  const channel = new firebase
    .notifications.Android
    .Channel(
      NOTIFICATION_CHANNEL_ID,
      'iGap Plus Channel',
      firebase.notifications.Android.Importance.Max
    );
  await firebase.notifications().android.createChannel(channel);
  const notification = new firebase.notifications.Notification()
    .setNotificationId(id)
    .setTitle(title)
    .setBody(message);
  if (Platform.OS === 'android') {
    notification.android.setBigText(message);
    notification.android.setChannelId(NOTIFICATION_CHANNEL_ID);
    notification.android.setClickAction(id);
    notification.android.setDefaults([
      firebase.notifications.Android.Defaults.Sound,
      firebase.notifications.Android.Defaults.Vibrate,
    ]);
    if (avatar) {
      notification.android.setLargeIcon(avatar);
    }
  }
  firebase.notifications().displayNotification(notification);
}

/**
 * clear notification
 * @param {string} id
 */
export function clearNotification(id) {
  _notifications.delete(id);
  firebase.notifications().cancelNotification(id);
}