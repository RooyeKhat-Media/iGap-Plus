import {uniqueId} from 'lodash';
import {black200, gray1000, gray500, primary, white} from '../../themes/default/index';
import {IRANSans_Medium} from '../../constants/fonts/index';

const id = uniqueId();

export default [
  id, [
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
          backgroundColor: primary + '88',
        },
        layoutCall: {
          height: 70,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        callIcon: {
          container: {
            backgroundColor: primary,
            marginLeft: 20,
            marginRight: 20,
          },
        },
        chatIcon: {
          container: {
            backgroundColor: gray500,
          },
        },
        endIcon: {
          container: {
            backgroundColor: gray500,
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
          color: gray1000,
        },
        activeText: {
          color: black200,
          fontSize: 14,
        },
        inActiveText: {
          color: gray1000,
          fontSize: 14,
        },
        layoutItem: {
          alignItems: 'center',
          width: 120,
        },
        textName: {
          color: black200,
          fontSize: 20,
          ...IRANSans_Medium,
          alignSelf: 'center',
        },
        textigapCall: {
          color: black200,
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
          backgroundColor: white + '99',
          marginTop: 5,
        },
      },
    },
  ],
];