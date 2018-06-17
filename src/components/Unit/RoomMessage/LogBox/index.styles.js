import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        parent: {
          flex: 1,
        },
        container: {
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 5,
        },
      },
    },
  ],
];