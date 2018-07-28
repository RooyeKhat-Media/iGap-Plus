import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import {I18nManager} from 'react-native';

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
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
        row: {
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        },
        play: {
          padding: 10,
          borderRightWidth: I18nManager.isRTL ? 0 : 1,
          borderLeftWidth: I18nManager.isRTL ? 1 : 0,
          borderColor: appTheme.border,

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