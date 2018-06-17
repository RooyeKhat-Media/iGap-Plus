import {uniqueId} from 'lodash';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        preview: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        topOverlay: {
          position: 'absolute',
          padding: 16,
          right: 0,
          top: 0,
        },
        bottomOverlay: {
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        captureButton: {
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 40,
          margin: 5,
        },
        typeButton: {
          padding: 5,
        },
        flashButton: {
          padding: 5,
        },
        timer: {
          position: 'absolute',
          left: 20,
          top: 20,
          borderRadius: 5,
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
        close: {
          position: 'absolute',
          right: 20,
          bottom: 15,
          padding: 5,
        },
      },
    },
  ],
];