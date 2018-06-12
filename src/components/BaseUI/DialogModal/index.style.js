import {IRANSans_Medium} from '../../../constants/fonts/index';
import {black1} from '../../../themes/default/index';

export default {
  dialogWrap: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 7,
    minWidth: 280,
    maxWidth: 320,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 5,
  },
  dialogHeader: {
    ...IRANSans_Medium,
    fontSize: 18,
    color: black1,
    marginBottom: 10,
  },
  dialogContent: {
    color: black1,
    fontSize: 16,
    marginBottom: 5,
  },
  dialogSwitch: {
    flexDirection: 'row',
  },
  dialogActions: {
    marginHorizontal: 8,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dialogBtn: {
    container: {
      marginLeft: 8,
      paddingHorizontal: 8,
      borderWidth: 0,
    },
    text:{
      ...IRANSans_Medium,
    },
  },
};