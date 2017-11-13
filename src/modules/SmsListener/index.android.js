import RNSmsListener from 'react-native-android-sms-listener';

export default class SmsListener {

  static addListener(listenerCallback) {
    return RNSmsListener.addListener(message => {
      listenerCallback(message.body, message.originatingAddress);
    });
  }

  static removeListener(cancellableSubscription) {
    cancellableSubscription.remove();
  }
}