import {uniqueId} from 'lodash';
import {gray350} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  [
    {
      query: {},
      style: {
        container: {
          padding: 5,
          alignSelf: 'flex-end',
          marginRight: 3,
        },
        messageBox: {
          backgroundColor: gray350,
          borderRadius: 15,
          padding: 7,
          maxWidth: 260,
        },
        footerWrapper: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        footerTimeWrap: {
          flexDirection: 'row',
        },
      },
    },
  ],
];