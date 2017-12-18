import {uniqueId} from 'lodash';
import {blackTransparent, gray800} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        backgroundVideo: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
        bottomOverlay: {
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: blackTransparent,
        },
        row: {
          flexDirection: 'row',
        },
        play: {
          padding: 10,
          borderRightWidth: 1,
          borderColor: gray800,

        },
        close: {
          marginLeft: 10,
          marginRight: 10,
          alignSelf: 'center',
        },
        timer: {
          color: 'white',
          alignSelf: 'center',
          minWidth: 80,
          marginLeft: 10,
          marginRight: 15,
          fontSize: 16,
        },
        fileName: {
          color: 'white',
          alignSelf: 'center',
          marginLeft: 5,
          flex: 1,
          fontSize: 16,
        },
      },
    },
  ],
];