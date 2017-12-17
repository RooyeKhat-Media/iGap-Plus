import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id,
  [
    {
      query: {},
      style: {
        container: {
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 5,
        },
      },
    },
  ],
];