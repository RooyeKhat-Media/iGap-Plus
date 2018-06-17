import {appTheme, golden, red} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

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
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: 'bold',
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