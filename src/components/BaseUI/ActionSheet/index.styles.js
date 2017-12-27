import {IRANSans_Medium} from '../../../constants/fonts/index';

export default {
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrap: {
    backgroundColor: '#fff',
    borderRadius: 15,
    maxWidth: 360,
    flex: 1,
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