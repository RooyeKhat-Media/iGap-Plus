import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();

export default [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
        },
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
            backgroundColor: appTheme.primary,
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

      },
    },
  ],
];