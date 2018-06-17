import {uniqueId} from 'lodash';
import {appTheme, circleButtonBackground} from '../../themes/default/index';
import {IRANSans_Medium} from '../../constants/fonts/index';

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
        avatar: {
          alignItems: 'center',
          flex: 1,
        },
        blueForeground: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          position: 'absolute',
          backgroundColor: appTheme.primary + '88',
        },
        layoutCall: {
          height: 70,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        callIcon: {
          container: {
            backgroundColor: appTheme.primary,
            marginLeft: 20,
            marginRight: 20,
          },
        },
        chatIcon: {
          container: {
            backgroundColor: circleButtonBackground,
          },
        },
        endIcon: {
          container: {
            backgroundColor: circleButtonBackground,
          },
        },
        rowField: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 53,
          marginTop: 4,
        },
        activeIcon: {
          color: '#000',
        },
        inActiveIcon: {
          color: '#606060',
        },
        activeText: {
          color: '#444444',
          fontSize: 14,
        },
        inActiveText: {
          color: '#606060',
          fontSize: 14,
        },
        layoutItem: {
          alignItems: 'center',
          width: 120,
        },
        textName: {
          color: '#444444',
          fontSize: 20,
          ...IRANSans_Medium,
          alignSelf: 'center',
        },
        textigapCall: {
          color: appTheme.titleText,
          fontSize: 11,
          alignSelf: 'center',
          marginBottom: 7,
        },
        rtcViewRemote: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          position: 'absolute',
        },
        rtcViewSelf: {
          position: 'absolute',
          top: 0,
          right: 0,
          margin: 5,
        },
        buttonLayout: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        },

        whiteBackground: {
          backgroundColor: '#ffffff99',
          marginTop: 5,
        },
      },
    },
  ],
];