import {black600} from '../../../../themes/default/index';
import {IRANSans_Medium} from '../../../../constants/fonts/index';

export default {
  container: {
    paddingRight: 15,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 25,
  },
  layoutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  messageWrapper: {
    flexDirection: 'column',
  },
  avatarWrap: {
    width: 45,
  },
  textTitle: {
    ...IRANSans_Medium,
    marginLeft: 10,
    flex: 1,
    color: black600,
    fontSize: 16,
    textAlign: 'left',
  },
  layoutChannelInfo: {
    marginTop: 8,
    flexDirection: 'row',
  },
  textUPDown: {
    marginRight: 3,
    marginLeft: 9,
  },
  textSeen: {
    marginRight: 3,
  },
  textSignature: {
    fontSize: 14,
    marginRight: 10,
    flex: 1,
    textAlign: 'right',
  },
  textMessage: {
    color: black600,
  },
  flex: {
    flex: 1,
  },
  bookmark: {
    marginLeft: 18,
  },
};