import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        },
        modal: {
          zIndex: 500,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        backModal: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(80,80,80,0.3)',
        },
      },
    },
  ],
];