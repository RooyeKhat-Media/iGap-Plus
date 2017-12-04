import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
      },
    },
  ],
];