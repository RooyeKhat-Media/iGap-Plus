import {uniqueId} from 'lodash';
import {black200, gray500, gray800, primary} from '../../themes/default/index';
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
          marginTop: -35,
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
          marginTop: 10,
          marginBottom: 10,
        },
        activeIcon: {
          color: '#000',
        },
        inActiveIcon: {
          color: gray800,
        },
        activeText: {
          color: black200,
          fontSize: 14,
        },
        inActiveText: {
          color: gray800,
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
          marginBottom: 20,
        },
      },
    },
  ],
];