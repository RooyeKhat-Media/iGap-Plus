import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        scroll: {
          padding: 20,
          backgroundColor: appTheme.wrapperBackground,
        },
        text: {
          color: appTheme.primaryText,
        },
        piker: {
          color: appTheme.primaryText,
        },
      },
    },
  ],
];