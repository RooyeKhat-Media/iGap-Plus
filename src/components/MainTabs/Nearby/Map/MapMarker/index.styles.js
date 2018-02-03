import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id, [
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
          marginLeft: 22,
          top: -1,
        },
        whiteBorder: {
          width: 58,
          height: 58,
          borderRadius: 100,
          borderWidth: 3,
          borderColor: 'white',
        },
        transparentBlueBorder: {
          width: 90,
          height: 90,
          borderRadius: 100,
          borderWidth: 15,
          borderColor: '#3298ee3f',
        },
        transparentGreyBorder: {
          width: 90,
          height: 90,
          borderRadius: 100,
          borderWidth: 15,
          borderColor: '#0000003f',
        },
        blueBorder: {
          width: 94,
          height: 94,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: '#50a7f1',
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