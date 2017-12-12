import {gray100, gray500} from '../../../themes/default/index';

export default {
  container: {
    flex: 1,
  },
  toolBar: {
    centerElementContainer: {
      marginLeft: 0,
    },
  },
  toolBarListItem: {
    container: {
      borderBottomColor: gray500,
      backgroundColor: gray100,
    },
    leftElementContainer: {
      marginLeft: 0,
    },
    secondaryText: {
      fontSize: 11,
    },
    primaryText: {
      lineHeight: 20,
      fontSize: 14,
    },
  },
  mainWrap: {
    flex: 1,
    flexDirection: 'column',
  },
  messageListWrap: {
    flex: 1,
    marginBottom: 65,
  },

  messageBox: {
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundRecorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
};