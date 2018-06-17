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
          flexDirection: 'column',
        },
        paddingBody: {
          padding: 10,
          paddingLeft: 15,
          paddingRight: 15,
        },
        centerBody: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        textHelp: {
          padding: 10,
          paddingLeft: 15,
          paddingRight: 15,
          color: appTheme.primaryText,
        },
        recoveryBtn: {
          marginBottom: 10,
        },
        inputRow: {
          marginBottom: 10,
        },
        inputTitle: {
          textAlign: 'center',
          fontSize: 16,
          marginBottom: 10,
          color: appTheme.primaryText,
        },
        forgetWrper: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        },
        forgetBtn: {
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