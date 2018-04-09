import {uniqueId} from 'lodash';
import {MAX_WIDTH_NORMAL_HEIGHT, MIN_WIDTH_NORMAL_HEIGHT} from '../../constants/screenBreakPoints';
import {getPrimaryWidth} from '../../modules/DimensionCalculator';
import {gray500} from '../../themes/default/index';


const id = uniqueId();
export default () => ([
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
          width: getPrimaryWidth(),
          borderRightWidth:1,
          borderRightColor:gray500,
        },
        secondary: {
          flex: 1,
        },
      },
    },
  ],
]);