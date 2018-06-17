import {uniqueId} from 'lodash';
import {appTheme} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
      },
    },
  ],
];