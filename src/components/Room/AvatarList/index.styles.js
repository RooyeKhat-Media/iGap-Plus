import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        galleryStyle: {
          flex: 1,
          backgroundColor: '#696969',
        },
        loading: {
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#55b3fd',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
        },
      },
    },
  ],
];