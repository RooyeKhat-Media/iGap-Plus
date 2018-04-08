import {uniqueId} from 'lodash';
import {gray1, gray2, primary, red} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {

        contentTerminate: {
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: gray1,
          alignSelf: 'center',
          padding: 5,
          marginTop: 10,

        },
        terminateAll: {
          color: red,
          fontSize: 16,
          alignSelf: 'center',
        },
        dividerLine: {
          borderTopWidth: 1,
          borderTopColor: 'black',
          margin: 5,
        },
        status: {
          color: primary,
          ...IRANSans_Medium,
          marginTop: 15,
          marginBottom: 5,
          alignSelf: 'center',
          fontSize: 18,
        },
        textLogsOut: {
          color: gray2,
          fontSize: 14,
          alignSelf: 'center',
          marginTop: -4,
        },
        scroll: {
          backgroundColor: 'white',
        },
      },
    },
  ],
];