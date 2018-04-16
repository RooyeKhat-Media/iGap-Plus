import {uniqueId} from 'lodash';
import {black200, gray950, primary} from '../../themes/default/index';
import {IRANSans_Medium} from '../../constants/fonts/index';

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
          fontSize: 18,
          color: primary,
          textAlign: 'center',
          paddingTop: 15,
          paddingBottom: 5,
          ...IRANSans_Medium,
          backgroundColor: '#fff',
          marginTop: 10,
        },
        subItemText: {
          fontSize: 14,
          color: gray950,
          padding: 12,
          textAlign: 'center',
          backgroundColor: '#fff',
        },
        listItem: {
          container: {
            marginBottom: 2,
          },
          primaryText: {
            color: black200,
          },
        },
      },
    },
  ],
];