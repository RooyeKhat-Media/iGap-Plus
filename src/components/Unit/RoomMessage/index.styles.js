import {black200, white, white500} from '../../../themes/default/index';
import {StyleSheet} from 'react-native';

export const chatStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
  },
  messageBox: {
    backgroundColor: white,
    borderRadius: 15,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    marginRight: -14,
    borderLeftWidth: 0,
    borderRightWidth: 16,
    borderTopWidth: 6,
    borderBottomWidth: 5,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: white,
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    transform: [{rotate: '-45deg'}],
  },
});
export const logStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  message: {
    color: '#202020',
  },
});
export const ownerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  messageBox: {
    backgroundColor: white500,
    borderRadius: 15,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    marginLeft: -13,
    borderLeftWidth: 15,
    borderRightWidth: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: white500,
    borderRightColor: 'rgba(0,0,0,0)',
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    transform: [{rotate: '45deg'}],
  },
});
export const groupStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  avatarWrap: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: -3,
  },
  messageBox: {
    backgroundColor: white,
    borderRadius: 15,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    marginRight: -14,
    borderLeftWidth: 0,
    borderRightWidth: 16,
    borderTopWidth: 6,
    borderBottomWidth: 5,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: white,
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    transform: [{rotate: '-45deg'}],
  },
  author: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
export const channelStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  avatarWrap: {
    width: 50,
    padding: 7,
  },
  layoutheader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    marginLeft: 10,
    flex: 1,
    color: black200,
    fontSize: 18,
  },
  layoutChannelInfo: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  sub1: {
    flexDirection: 'row',
  },
  sub2: {
    flexDirection: 'row',
    marginTop: -4,
    marginBottom: 12,
  },
  textCount: {
    margin: 4,
    color: black200,
  },
  rowField: {
    flexDirection: 'row',
  },
  textCountView: {
    color: black200,
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
    marginTop: -4,
  },
  textSigniture: {
    color: black200,
    fontSize: 14,
    marginTop: -4,
  },
  moreIcon: {
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end',
  },
  textMessage: {
    color: black200,
    fontSize: 16,
    marginTop: 4,
    marginBottom: 4,
  },
  sendIcon: {
    marginLeft: 30,
    flex: 1,
  },
});