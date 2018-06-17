import {uniqueId} from 'lodash';
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
        recoveryBtnWrap: {
          padding: 15,
          flex: 1,
          flexDirection: 'column',
        },
        recoveryBtn: {
          marginBottom: 10,
        },
      },
    }],
];