import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';
import {IRANSans} from '../../../constants/fonts/index';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        textInput: {
          height: 45,
          borderWidth: 1,
          borderColor: appTheme.border,
          borderRadius: 4,
          fontSize: 13,
          color: appTheme.primaryText,
          paddingLeft: 15,
          paddingRight: 15,
          ...IRANSans,
        },
        focused: {
          borderColor: appTheme.primary,
        },
      },
    },
  ],
];