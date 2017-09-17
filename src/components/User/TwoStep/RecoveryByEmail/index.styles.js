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
            fontWeight: '100',
          },
          container: {
            marginTop: 10,
            borderWidth: 0,
          },
        },
        label: {
          fontWeight: 'bold',
          fontSize: 15,
        },
      },
    }],
]);