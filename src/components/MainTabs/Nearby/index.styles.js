import {uniqueId} from 'lodash';
import {black200} from '../../../themes/default/index';
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
        nearbyTurnOn: {
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        nearbyMessage: {
          flex: 0.5,
        },
        titleText: {
          marginLeft: 20,
        },
      },
    },
  ],
];