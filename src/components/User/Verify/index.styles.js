import {uniqueId} from 'lodash';
import {ORIENTATION_LANDSCAPE} from '../../../constants/screenBreakPoints';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default (UserVerify) => ([
  id,
  [{
    query: {},
    style: {
      layout: {
        backgroundColor: UserVerify.layoutBackgroundColor,
      },
      panel: {
        flex: 1,
        padding: 15,
      },
      verifyTitleWrap: {
        marginTop: 50,
      },
      verifyTitle: {
        color: UserVerify.verifyTitleColor,
        fontSize: 20,
        lineHeight: 22,
        ...IRANSans_Medium,
        textAlign: 'center',
        marginBottom: 15,
      },
      verifySubTitle: {
        color: UserVerify.verifySubTitleColor,
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 22,
        marginBottom: 15,
      },
      codeRow: {},
      verifyBtn: {
        container: {marginTop: 15},
      },
      resendWrap: {},

      resendTxt: {
        fontSize: 12,
        color: UserVerify.resendTxtColor,
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
  }],
]);