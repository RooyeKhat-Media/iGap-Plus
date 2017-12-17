import {uniqueId} from 'lodash';
import {gray400} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  [
    {
      query: {},
      style: {
        container: {
          flexDirection: 'row',
          alignSelf: 'flex-start',
          padding: 5,
        },
        avatarWrap: {
          width: 45,
          height: 45,
          alignSelf: 'flex-start',
        },
        messageBox: {
          borderRadius: 15,
          borderWidth: 1,
          borderColor: gray400,
          padding: 7,
          marginLeft: 5,
          maxWidth: 260,
        },
        footerWrap: {
          alignSelf: 'flex-end',
        },
      },
    },
  ],
];