import {uniqueId} from 'lodash';

const id = uniqueId();

export default (Verification) => ([
  id,
  [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: Verification.layoutBackgroundColor,
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
          fontWeight: 'bold',
          lineHeight: 25,
          textAlign: 'center',
          color: Verification.TWStepTitleColor,
          marginBottom: 10,
        },
        TWStepSubTitle: {
          fontSize: 14,
          textAlign: 'center',
          marginBottom: 20,
        },
        inputRow: {
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginBottom: 10,
        },
        btnWrap: {},
        resendTxt: {
          fontSize: 12,
          color: Verification.resendTxtColor,
          paddingTop: 10,
        },
        forgetBtnColor: {
          text: {
            fontSize: 12,
            fontWeight: '100',
          },
          container: {
            borderWidth: 0,
          },
        },
      },
    }],
]);