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
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          color: appTheme.primaryText,
        },
        recoveryBtn: {
          marginBottom: 10,
        },
        resendWrper: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        },
        resendBtn: {
          container: {
            marginTop: 20,
            marginLeft: 8,
            paddingHorizontal: 8,
            borderWidth: 0,
          },
        },
      },
    },
  ],
];