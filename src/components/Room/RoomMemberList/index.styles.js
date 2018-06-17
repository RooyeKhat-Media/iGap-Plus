import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {appTheme} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        container: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
        },
        rightElementWrap: {
          flexDirection: 'row',
        },
        listItem: {
          primaryText: {
            ...IRANSans_Medium,
          },
        },
      },
    },
  ],
];