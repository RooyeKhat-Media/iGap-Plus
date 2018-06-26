import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';

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
        rowTitle: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
        verifyStyle: {
          alignSelf: 'center',
        },
        titleText: {
          fontSize: 18,
          color: appTheme.toolbarText,
          textAlign: 'left',
          paddingLeft: 10,
          alignSelf: 'center',
          paddingRight: 5,
          ...IRANSans_Medium,
        },
      },
    },
  ],
];