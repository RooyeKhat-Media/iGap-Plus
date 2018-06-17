import {uniqueId} from 'lodash';
import {appTheme, red} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        root: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
        },
        contentTerminate: {
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: appTheme.border,
          alignSelf: 'center',
          padding: 5,
          marginTop: 10,

        },
        terminateAll: {
          color: red,
          fontSize: 16,
          alignSelf: 'center',
        },
        dividerLine: {
          borderTopWidth: 1,
          borderTopColor: 'black',
          margin: 5,
        },
        status: {
          color: appTheme.primary,
          ...IRANSans_Medium,
          marginTop: 15,
          marginBottom: 5,
          alignSelf: 'center',
          fontSize: 18,
        },
        textLogsOut: {
          color: appTheme.secondaryText,
          fontSize: 14,
          alignSelf: 'center',
          marginTop: -4,
        },
      },
    },
  ],
];