import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        root: {
          flex: 1,
        },
        container: {
          flex: 1,
        },
        scroll: {
          flex: 1,
          paddingBottom: 20,
        },
        form: {
          padding: 15,
        },
        avatarWrap: {
          margin: 10,
          alignSelf: 'center',
          height: 150,
        },
      },
    },
  ],
];