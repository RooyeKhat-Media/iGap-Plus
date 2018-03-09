import {StyleSheet} from 'react-native';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {primary} from '../../../themes/default/index';

export const pinedListItemStyle = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  primaryText: {
    ...IRANSans_Medium,
  },
});

export const boldListItemStyle = StyleSheet.create({
  primaryText: {
    ...IRANSans_Medium,
  },
});

export default StyleSheet.create({
  rightElementWrap: {
    width: 60, height: 45, flexDirection: 'column', alignItems: 'center',
  },
  row: {
    width: 60, flexDirection: 'row', justifyContent: 'flex-end',
  },
  timeTitle: {
    color: '#aaa', fontSize: 11, marginLeft: 3,
  },
  pinStyle: {
    marginTop: 3,
  },
});

export const badgeStyle = StyleSheet.create({
  container: {
    backgroundColor: primary,
    textAlign:'center',
    height: 20,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 3,
    paddingLeft:4,
    paddingRight:3,
    fontSize :12,
  },
});
export const muteBadgeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    textAlign:'center',
    height: 20,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 3,
    paddingLeft:4,
    paddingRight:3,
    fontSize :12,
  },
});
export const hideStyle = StyleSheet.create({
  container: {
    display: 'none',
    opacity: 0,
  },
});