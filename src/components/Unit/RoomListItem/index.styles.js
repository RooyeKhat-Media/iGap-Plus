import {StyleSheet} from 'react-native';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {primary} from '../../../themes/default/index';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 72,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  wrapperBold: {
    flex: 1,
    height: 72,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#eee',
  },
  avatar: {
    height: 52,
    width: 52,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  secondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#555444',
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 5,
    ...IRANSans_Medium,
  },
  description: {
    flex: 1,
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 5,
  },
  addOn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  badgeStyle: {
    backgroundColor: primary,
    textAlign:'center',
    height: 20,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 3,
    paddingLeft:4,
    paddingRight:3,
    fontSize :12,
    overflow:'hidden',
    color:'white',
  },
  muteBadgeStyle: {
    backgroundColor: '#aaa',
    textAlign:'center',
    height: 20,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 3,
    paddingLeft:4,
    paddingRight:3,
    fontSize :12,
    overflow:'hidden',
    color:'white',
  },
  hideStyle: {
    display: 'none',
    opacity: 0,
  },
});