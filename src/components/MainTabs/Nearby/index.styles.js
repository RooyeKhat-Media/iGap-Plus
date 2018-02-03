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
        titleText: {
          color: black200,
          fontSize: 18,
          alignSelf: 'flex-start',
          ...IRANSans_Medium,
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
      },
    },
  ],
];