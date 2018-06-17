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
        panel: {
          padding: 15,
        },
        formGroup: {
          marginBottom: 15,
        },
        btnWrap: {
          marginTop: 10,
        },
        resendBtn: {
          text: {
            fontSize: 12,
          },
          container: {
            marginTop: 10,
            borderWidth: 0,
          },
        },
      },
    }],
];