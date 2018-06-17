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
        container: {
          flex: 1,
          alignSelf: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        wrap: {
          backgroundColor: appTheme.pageBackground,
          borderRadius: 15,
          maxWidth: 360,
          flex: 1,
        },
        headerWrap: {
          padding: 15,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: appTheme.border,
          borderBottomWidth: 1,
        },
        header: {
          fontSize: 18,
          ...IRANSans_Medium,
          color: appTheme.titleText,
        },
        listItem: {
          primaryText: {
            ...IRANSans_Medium,
            color: appTheme.primaryText,
          },
          leftElement: {
            color: appTheme.primaryText,
          },
        },
      },
    },
  ],
];



