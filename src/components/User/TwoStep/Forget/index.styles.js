import {uniqueId} from 'lodash';

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
]);