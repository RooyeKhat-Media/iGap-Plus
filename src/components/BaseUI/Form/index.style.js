import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {

        errorMessage: {
          color: 'red',
        },
        helpMessage: {
          color: appTheme.secondaryText,
        },
        inputStyle: {
          container: {},
          help: {
            fontSize: 11,
            color: appTheme.secondaryText,
          },
          error: {
            fontSize: 11,
          },
        },
      },
    },
  ],
];