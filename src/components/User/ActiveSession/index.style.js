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
          margin: 20,

        },
        terminateAll: {
          color: red,
          fontSize: 18,
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
          marginBottom: 20,
          alignSelf: 'center',
          fontSize: 18,
        },
        textLogsOut: {
          color: gray2,
          fontSize: 16,
          alignSelf: 'center',
        },
        scroll: {
          backgroundColor: 'white',
        },
      },
    },
  ],
];