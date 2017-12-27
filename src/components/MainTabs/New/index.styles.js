import {uniqueId} from 'lodash';
import {black200, gray500} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        sectionTop: {
          marginTop: 15,
          marginLeft: 15,
        },
        rowField: {
          flexDirection: 'row',
          marginTop: 6,
        },

        textitem: {
          color: black200,
          fontSize: 18,
          marginLeft: 10,
          alignSelf: 'flex-start',
        },
        titleText: {
          color: black200,
          fontSize: 18,
          alignSelf: 'flex-start',
          ...IRANSans_Medium,
        },
        divider: {
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: gray500,
          alignSelf: 'center',
          marginLeft: 10,
        },

        listItem: {
          container: {
            height: 35,
          },
          centerElementContainer: {
            marginLeft: 0,
          },
          leftElement: {
            marginRight: 0,
          },
          leftElementContainer: {
            width: 30,
          },
        },

      },
    },
  ],
];