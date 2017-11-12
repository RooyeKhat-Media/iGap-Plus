import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        terminateAll: {
          color: 'red',
          fontWeight: 'bold',
          fontSize: 18,
          alignSelf: 'center',
          padding: 5,
        },
        dividerLine: {
          borderTopWidth: 1,
          borderTopColor: 'black',
          margin: 5,
        },
        status: {
          color: 'green',
          fontWeight: 'bold',
          marginTop: 15,
          alignSelf: 'center',
          fontSize: 18,
        },
        textLogsOut: {
          color: 'gray',
          fontSize: 14,
          alignSelf: 'center',
          padding: 3,
        },
      },
    },
  ],
];