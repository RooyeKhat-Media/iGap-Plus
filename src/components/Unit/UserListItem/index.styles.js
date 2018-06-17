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
        divider: {
          fontSize: 16,
          ...IRANSans_Medium,
          textAlign: 'right',
          paddingRight: 15,
          color: appTheme.titleText,
          borderBottomColor: appTheme.border,
          borderBottomWidth: 1,
        },
        selectedItem: {
          container: {
            backgroundColor: appTheme.wrapperBackground,
          },
        },
      },
    },
  ],
];