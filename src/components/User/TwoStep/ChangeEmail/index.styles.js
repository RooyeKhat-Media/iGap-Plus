import {appTheme} from '../../../../themes/default/index';
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
        body: {
          flex: 1,
          padding: 10,
          paddingLeft: 15,
          paddingRight: 15,
          flexDirection: 'column',
        },

        inputRow: {
          marginBottom: 10,
        },
        inputTitle: {
          textAlign: 'center',
          fontSize: 16,
          color: appTheme.primaryText,
          marginBottom: 10,
        },
        recoveryBtn: {
          marginBottom: 10,
        },
      },
    },
  ],
];