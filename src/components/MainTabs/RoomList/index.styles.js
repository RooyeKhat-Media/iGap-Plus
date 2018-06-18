import {appTheme} from '../../../themes/default/index';
import {Neuropolitical} from '../../../constants/fonts/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();

export default [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
        },
        container: {
          flex: 1,
        },
        textTitle: {
          color: appTheme.toolbarText,
          fontSize: 18,
          alignSelf: 'flex-start',
          ...Neuropolitical,
        },
        roomListWrap: {
          flex: 1,
          minWidth: 100,
          minHeight: 100,
        },
      },
    },
  ],
];