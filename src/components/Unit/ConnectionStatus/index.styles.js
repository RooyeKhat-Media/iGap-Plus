import {StyleSheet} from 'react-native';
import {golden, primary, red} from '../../../themes/default/index';

export default StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  connecting: {
    backgroundColor: red,
  },
  securing: {
    backgroundColor: golden,
  },
  authenticating: {
    backgroundColor: primary,
  },
});