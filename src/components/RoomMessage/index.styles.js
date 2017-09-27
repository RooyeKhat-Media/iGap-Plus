import {primary} from '../../themes/default/index';

export default {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    paddingBottom: 0,
    paddingTop: 0,
  },
  avatarWrap: {
    width: 40,
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  userTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: primary,
  },
  message: {
    flex: 1,
  },
  footerWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  timeText: {
    fontSize: 10,
    color: '#aaa',
  },
  viewsWrap: {
    flexDirection: 'row',
    marginRight: 10,
  },
  viewText: {
    fontSize: 10,
    color: '#aaa',
    marginLeft: 2,
  },
  channelThumbsWrap: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  channelThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(70, 10, 10, 0.2)',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelThumbUp: {
    marginBottom: 5,
  },
  channelThumbUpActive: {
    backgroundColor: 'rgba(0, 151, 13, 0.3)',
  },
  channelThumbDownActive: {
    backgroundColor: 'rgba(233, 36, 141, 0.5)',
  },
};

export const defaultStyle = {
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
  },
  dateWrap: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dateText: {
    fontSize: 10,
  },
};
export const logStyle = {
  container: {
    justifyContent: 'center',
  },
};
export const ownerStyle = {
  container: {
    justifyContent: 'flex-end',
  },
  messageBox: {
    backgroundColor: '#ccc',
  },
};
export const groupStyle = {};
export const chatStyle = {};
export const channelStyle = {};