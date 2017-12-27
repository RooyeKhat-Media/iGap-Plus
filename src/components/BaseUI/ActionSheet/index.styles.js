import {IRANSans_Medium} from '../../../constants/fonts/index';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 0,
  },
  wrap: {
    backgroundColor: '#fff',
    borderRadius: 15,
    minWidth: 360,
  },
  headerWrap: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 18,
    ...IRANSans_Medium,
  },
  listItem: {
    primaryText: {
      ...IRANSans_Medium,
    },
  },
};