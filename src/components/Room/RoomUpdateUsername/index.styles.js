import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        scroll: {
          paddingBottom: 100,
        },
        form: {
          padding: 15,
        },
        avatarWrap: {
          margin: 10,
          alignSelf: 'center',
          height: 150,
        },
        radioWrap: {
          flexDirection: 'row',
          flex: 1,
          height: 50,
        },
        radioLabel: {
          fontWeight: 'bold',
          fontSize: 15,
        },
        usernameWrap: {},
      },
    },
  ],
];