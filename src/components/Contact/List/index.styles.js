import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

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
        container: {
          flex: 1,
        },
      },
    },
  ],
];