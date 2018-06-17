import {uniqueId} from 'lodash';
import {appTheme} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
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
          borderColor: appTheme.border,
          padding: 7,
          marginLeft: 5,
          maxWidth: 260,
          backgroundColor: appTheme.receiveBox,
        },
        footerWrap: {
          alignSelf: 'flex-end',
          flexDirection: 'row',
        },
      },
    },
  ],
];