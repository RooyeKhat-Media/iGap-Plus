import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        mainWrap: {
          flex: 1,
          flexDirection: 'column',
        },
        title: {
          fontSize: 16,
          flexDirection: 'column',
        },
        messageListWrap: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          transform: [{rotateX: '180deg'}],
          minWidth: 100,
          minHeight: 100,
        },
        messageWrap: {
          flex: 1,
          transform: [{rotateX: '180deg'}],
        },
        bottomWrap: {},
      },
    },
  ],
];