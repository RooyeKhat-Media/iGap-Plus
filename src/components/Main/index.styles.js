import {min, uniqueId} from 'lodash';
import {MAX_WIDTH_NORMAL_HEIGHT, MIN_WIDTH_NORMAL_HEIGHT, NORMAL_WIDTH} from '../../constants/screenBreakPoints';
import Device from '../../modules/Responsive/Device';

const {width} = Device.dimensions.window;

const primaryWidth = min([width * 0.44, NORMAL_WIDTH]);

const id = uniqueId();
export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        primary: {
          flex: 1,
          zIndex: 100,
        },
        secondary: {
          flex: 1,
        },
        close: {},
        open: {},
      },
    },
    {
      query: MAX_WIDTH_NORMAL_HEIGHT,
      style: {
        secondary: {
          zIndex: 150,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        close: {
          width: 0,
        },
        open: {},
      },
    },
    {
      query: MIN_WIDTH_NORMAL_HEIGHT,
      style: {
        container: {
          flex: 1,
          flexDirection: 'row',
        },
        primary: {
          flex: null,
          width: primaryWidth,
        },
        secondary: {
          flex: 1,
        },
      },
    },
  ],
];