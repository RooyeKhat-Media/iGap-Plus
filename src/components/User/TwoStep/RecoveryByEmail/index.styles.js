import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../../constants/fonts/index';

const id = uniqueId();
export default (UserTwoStepForget) => ([
  id,
  [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: UserTwoStepForget.layoutBackgroundColor,
        },
        panel: {
          padding: 15,
        },
        divider: {
          marginBottom: 15,
          marginTop: 15,
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
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
        label: {
          ...IRANSans_Medium,
          fontSize: 15,
        },
      },
    }],
]);