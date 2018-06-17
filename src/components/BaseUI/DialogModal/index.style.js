import {IRANSans_Medium} from '../../../constants/fonts/index';
import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        dialogWrap: {
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        },
        dialog: {
          backgroundColor: appTheme.wrapperBackground,
          borderRadius: 7,
          minWidth: 280,
          maxWidth: 320,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 5,
          borderWidth: 1,
          borderColor: appTheme.border,
        },
        dialogHeader: {
          ...IRANSans_Medium,
          fontSize: 18,
          color: appTheme.titleText,
          marginBottom: 10,
        },
        dialogContent: {
          color: appTheme.titleText,
          fontSize: 16,
          marginBottom: 5,
        },
        dialogSwitch: {
          flexDirection: 'row',
        },
        dialogActions: {
          marginHorizontal: 8,
          height: 52,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
        dialogBtn: {
          container: {
            marginLeft: 8,
            paddingHorizontal: 8,
            borderWidth: 0,
          },
          text: {
            ...IRANSans_Medium,
          },
        },
      },
    },
  ],
];