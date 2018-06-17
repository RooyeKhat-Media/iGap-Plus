import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          // width: 72,
          // height: 72,
          // borderRadius: 36,
          // backgroundColor: '#48769b',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        dot: {
          backgroundColor: '#fff',
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 3,
        },
      },
    },
  ],
];