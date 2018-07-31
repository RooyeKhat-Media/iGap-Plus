import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';


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
        scroll: {
          flex: 1,
          flexDirection: 'column',
          padding: 6,
        },
        sectionTop: {
          flexDirection: 'row',
        },
        sectionTopSub1: {
          margin: 10,
          flex: 1,
        },
        avatar: {
          alignItems: 'center',
          marginTop: 6,
        },
        name: {
          fontSize: 18,
          ...IRANSans_Medium,
          color: appTheme.titleText,
          textAlign: 'left',

        },
        userName: {
          fontSize: 16,
          color: appTheme.secondaryText,
          marginBottom: 5,
          textAlign: 'left',
        },
        sectionTopSub1_1: {
          alignItems: 'center',
          flexDirection: 'row',
          margin: 2,
        },
        text: {
          fontSize: 16,
          ...IRANSans_Medium,
          color: appTheme.titleText,
          flex: 1,
        },
        detatil: {
          fontSize: 14,
          color: appTheme.primary,
        },
        balance: {
          fontSize: 14,
          color: appTheme.secondaryText,
        },
        button: {
          text: {
            fontSize: 16,
            color: appTheme.secondaryText,
          },
          container: {
            height: 30,
          },
        },
        // bottomNavigation: {
        //   borderTopWidth: 1,
        //   borderBottomWidth: 1,
        //   borderBottomColor: '#e6e6e6',
        //   borderTopColor: '#e6e6e6',
        //   justifyContent: 'center',
        //   flexDirection: 'row',
        //
        // },
        // activeBottomNavigationAction: {
        //   icon: {
        //     color: appTheme.primary,
        //   },
        //   container: {
        //     paddingBottom: 0,
        //     paddingTop: 5,
        //   },
        // },
        // notactiveBottomNavigationAction: {
        //   icon: {
        //     color: circleButtonBackground,
        //   },
        //   container: {
        //     paddingBottom: 0,
        //     paddingTop: 5,
        //   },
        // },

      },
    },
  ],
];
