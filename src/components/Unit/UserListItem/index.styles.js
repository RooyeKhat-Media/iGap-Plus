import {IRANSans_Medium} from '../../../constants/fonts/index';

export default {
  divider: {
    fontSize: 16,
    ...IRANSans_Medium,
    textAlign: 'right',
    paddingRight: 15,
    color: '#202020',
    borderBottomColor: '#bababa',
    borderBottomWidth: 1,
  },
  listItem: {
    primaryText: {
      ...IRANSans_Medium,
    },
  },
  selectedItem: {
    container: {
      backgroundColor: '#eee',
    },
    primaryText: {
      ...IRANSans_Medium,
    },
  },
};