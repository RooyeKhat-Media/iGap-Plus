import {StyleSheet} from 'react-native';

export const pinedListItemStyle = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
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
    marginTop: 5,
  },
});

export const badgeStyle = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 3,
    position: null,
  },
});
export const muteBadgeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 3,
    position: null,
  },
});
export const hideStyle = StyleSheet.create({
  container: {
    display: 'none',
    opacity: 0,
  },
});