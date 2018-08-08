import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
        },
        container: {
          flex: 1,
          justifyContent: 'flex-end',
        },
        backPic: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
        avatarBack: {
          width: '100%',
          height: '100%',
        },
        listBack: {
          height: 120,
          margin: 10,
        },
        smallAvatarBack: {
          marginLeft: 6,
          marginRight: 6,
        },
        smallAvatar: {
          width: 120,
          height: 120,
        },
        indicator: {
          position: 'absolute',
          right: '50%',
          top: '50%',
        },
      },
    },
  ],
];