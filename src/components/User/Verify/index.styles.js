import {uniqueId} from 'lodash';
import {ORIENTATION_LANDSCAPE} from '../../../constants/screenBreakPoints';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {appTheme} from '../../../themes/default/index';

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
          flex: 1,
          padding: 15,
        },
        verifyTitleWrap: {
          marginTop: 50,
        },
        verifyTitle: {
          color: appTheme.titleText,
          fontSize: 20,
          ...IRANSans_Medium,
          textAlign: 'center',
          marginBottom: 15,
        },
        verifySubTitle: {
          color: appTheme.primaryText,
          textAlign: 'center',
          fontSize: 13,
          marginBottom: 15,
        },
        codeRow: {},
        verifyBtn: {
          container: {marginTop: 15},
        },
        resendWrap: {},

        resendTxt: {
          fontSize: 12,
          color: appTheme.secondaryText,
          paddingTop: 10,
        },
        resendBtn: {
          container: {
            borderWidth: 0,
            marginBottom: 10,
          },
          text: {
            fontSize: 13,
          },
        },
      },
    },
    {
      query: ORIENTATION_LANDSCAPE,
      style: {
        verifyTitleWrap: {
          marginTop: 10,
        },
      },
    },
  ],
];