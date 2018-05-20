import {Crashlytics} from 'react-native-fabric';

export default function LogReport(title, data) {
  const message = title + ': ' + (typeof data === 'string' ? data : JSON.stringify(data));
  Crashlytics.logException(message);
}