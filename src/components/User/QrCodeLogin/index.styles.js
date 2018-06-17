import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: appTheme.wrapperBackground,
        },
        wrapper: {
          padding: 10,
        },
        imageWrapper: {
          height: 240,
          marginTop: 50,
        },
        image: {
          height: 240,
          width: 240,
          alignSelf: 'center',
        },
        loginText: {
          alignSelf: 'center',
          marginBottom: 60,
          marginTop: 20,
          color: appTheme.primaryText,
        },
      },
    },
  ],
];