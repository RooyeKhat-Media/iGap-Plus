import {uniqueId} from 'lodash';
import {black200} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        root: {
          flex: 1,
        },
        scrollView: {
          flex: 1,
          backgroundColor: '#f6f6f6',
        },
        itemText: {
          fontSize: 15,
          color: black200,
          paddingLeft: 3,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 2,
          flex: 1,
        },
        rowField: {
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginBottom: 2,
        },
        textLoading: {
          fontSize: 15,
          paddingTop: 14,
          color: '#1ac293',
          paddingRight: 8,
          fontWeight: 'bold',
          alignSelf: 'center',
        },

      },
    },
  ],
];