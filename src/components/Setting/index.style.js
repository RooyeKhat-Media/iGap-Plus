import {uniqueId} from 'lodash';
import {black200, gray800} from '../../themes/default/index';

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
        TitleText: {
          fontSize: 20,
          color: '#2aedea',
          textAlign: 'center',
          paddingTop: 15,
          paddingBottom: 5,
          fontWeight: 'bold',
          backgroundColor: '#fff',
          marginTop: 10,
        },
        itemText: {
          fontSize: 16,
          color: black200,
          padding: 14,
          backgroundColor: '#fff',
          marginBottom: 2,
        },
        subItemText: {
          fontSize: 14,
          color: gray800,
          padding: 8,
          textAlign: 'center',
          backgroundColor: '#fff',
        },
      },
    },
  ],
];