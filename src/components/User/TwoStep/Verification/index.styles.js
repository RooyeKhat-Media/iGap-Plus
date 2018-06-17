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
          flex: 1,
          padding: 15,
        },
        TWStepTitleWrap: {
          marginTop: 40,
        },
        TWStepTitle: {
          fontSize: 20,
          ...IRANSans_Medium,
          lineHeight: 25,
          textAlign: 'center',
          color: appTheme.titleText,
          marginBottom: 10,
        },
        TWStepSubTitle: {
          fontSize: 14,
          textAlign: 'center',
          color: appTheme.primaryText,
          marginBottom: 20,
        },
        inputRow: {
          marginBottom: 10,
        },
        btnWrap: {},
        resendTxt: {
          fontSize: 12,
          color: appTheme.secondaryText,
          paddingTop: 10,
        },
        forgetBtnColor: {
          text: {
            fontSize: 12,
          },
          container: {
            borderWidth: 0,
          },
        },
      },
    }],
];