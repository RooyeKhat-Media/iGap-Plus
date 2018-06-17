import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        triangle: {
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 8,
          borderRightWidth: 8,
          borderTopWidth: 16,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: 'white',
          marginLeft: -1,
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
        },
        whiteBorder: {
          padding: 3,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        },
        transparentBorder: {
          alignItems: 'center',
          justifyContent: 'center',
          padding: 19,
          width: 75,
          height: 75,
          borderRadius: 45,
          borderWidth: 2,
        },
        transparentBlueBorder: {
          borderColor: '#50a7f1',
          backgroundColor: '#3298ee3f',
        },
        transparentGreyBorder: {
          borderColor: '#888888',
          backgroundColor: '#0000003f',
        },
        viewContainer: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
  ],
];