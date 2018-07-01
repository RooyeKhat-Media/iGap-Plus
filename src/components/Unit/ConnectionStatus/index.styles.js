import {appTheme, golden, red} from '../../../themes/default/index';
import {uniqueId} from 'lodash';
import {IRANSans_Bold} from '../../../constants/fonts/index';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
        },
        textContainer: {
          ...IRANSans_Bold,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          textAlignVertical: 'center',
        },
        connecting: {
          backgroundColor: red,
        },
        securing: {
          backgroundColor: golden,
        },
        authenticating: {
          backgroundColor: appTheme.primary,
        },
      },
    },
  ],
  true,
];