import {primary} from '../../../themes/default/index';

export default {
  container: {
    flex: 1,
  },
  form: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
  avatarWrap: {
    width: 85,
    height: 100,
    padding: 20,
    paddingLeft: 5,
  },
  avatar: {
    container: {
      backgroundColor: primary,
    },
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'column',
  },
  phoneWrap: {
    flexDirection: 'column',
  },
  phoneNumberInput: {
    container: {
      flex: 1,
    },
    help: {
      fontSize: 11,
    },
  },

  phoneNumberRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  countryCodeInput: {
    paddingRight: 5,
    paddingLeft: 5,
    width: 65,
    textAlign: 'center',
  },

};