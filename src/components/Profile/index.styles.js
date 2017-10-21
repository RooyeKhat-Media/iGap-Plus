import {uniqueId} from 'lodash';
import {black200, gray500, gray800, primary, white} from '../../themes/default/index';


const id = uniqueId();
export default [
  id, [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: white,
        },
        scroll: {
          flex: 1,
          flexDirection: 'column',
          padding: 10,
        },
        sectionTop: {
          flexDirection: 'row',
        },
        sectionTopSub1: {
          marginLeft: 10,
          marginRight: 2,
          flex: 1,
        },
        avatar: {
          alignItems: 'center',
          marginTop: 6,
        },
        name: {
          fontSize: 18,
          fontWeight: 'bold',
          color: black200,
          textAlign: 'left',

        },
        userName: {
          fontSize: 16,
          color: gray800,
          marginBottom: 5,
        },
        sectionTopSub1_1: {
          alignItems: 'center',
          flexDirection: 'row',
          margin: 2,
        },
        text: {
          fontSize: 16,
          fontWeight: 'bold',
          color: black200,
          flex: 1,
        },
        detatil: {
          fontSize: 14,
          color: primary,
        },
        balance: {
          fontSize: 14,
          color: gray800,
        },
        button: {
          text: {
            fontSize: 16,
            color: gray800,
            fontWeight: 'normal',
          },
          container: {
            height: 30,
          },
        },
        bottomNavigation: {
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderBottomColor: '#e6e6e6',
          borderTopColor: '#e6e6e6',
          justifyContent: 'center',
          flexDirection: 'row',

        },
        activeBottomNavigationAction: {
          icon: {
            color: primary,
          },
          container: {
            paddingBottom: 0,
            paddingTop: 5,
          },
        },
        notactiveBottomNavigationAction: {
          icon: {
            color: gray500,
          },
          container: {
            paddingBottom: 0,
            paddingTop: 5,
          },
        },

      },
    },
  ],
];
