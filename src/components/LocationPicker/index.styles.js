import {uniqueId} from 'lodash';
import {appTheme} from '../../themes/default/index';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: appTheme.pageBackground,
        },
        mapView: {
          flex: 1,
        },
        actionButton: {
          container: {bottom: 100},
        },
        helpFlag: {
          backgroundColor: '#f0fcfe', padding: 5, paddingLeft: 15,
        },
      },
    },
  ],
];