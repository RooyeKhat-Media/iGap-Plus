import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../../constants/fonts/index';

const id = uniqueId();
export default (UserTwoStepRecoveryByQuestion) => ([
  id,
  [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: UserTwoStepRecoveryByQuestion.layoutBackgroundColor,
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
        label: {
          ...IRANSans_Medium,
          fontSize: 15,
        },
      },
    }],
]);