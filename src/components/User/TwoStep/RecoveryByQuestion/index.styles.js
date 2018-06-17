import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../../constants/fonts/index';
import {appTheme} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          backgroundColor: appTheme.wrapperBackground,
        },
        layout: {
          backgroundColor: appTheme.pageBackground,
        },
        panel: {
          padding: 15,
        },
        formGroup: {
          marginBottom: 15,
        },
        label: {
          ...IRANSans_Medium,
          fontSize: 15,
          color: appTheme.titleText,
        },
      },
    }],
];