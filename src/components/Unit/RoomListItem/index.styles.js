import {IRANSans_Medium} from '../../../constants/fonts/index';
import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          flex: 1,
          height: 72,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 10,
        },
        wrapperBold: {
          flex: 1,
          height: 72,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 10,
          backgroundColor: appTheme.wrapperBackground,
        },
        avatar: {
          height: 52,
          width: 52,
        },
        primary: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 3,
        },
        secondary: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        body: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        },
        rowTitle: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
        verifyStyle: {
          alignSelf: 'center',
        },
        title: {
          fontSize: 16,
          color: appTheme.primaryText,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 5,
          ...IRANSans_Medium,
        },
        description: {
          flex: 1,
          fontSize: 12,
          color: appTheme.primaryText,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 5,
        },
        addOn: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        rightElementWrap: {
          width: 60, height: 45, flexDirection: 'column', alignItems: 'center',
        },
        row: {
          width: 60, flexDirection: 'row', justifyContent: 'flex-end',
        },
        timeTitle: {
          color: appTheme.primaryText, fontSize: 11, marginLeft: 3,
        },
        pinStyle: {
          marginTop: 3,
        },
        badgeStyle: {
          backgroundColor: appTheme.primary,
          textAlign: 'center',
          height: 20,
          minWidth: 20,
          borderRadius: 10,
          marginTop: 3,
          paddingLeft: 4,
          paddingRight: 3,
          fontSize: 12,
          overflow: 'hidden',
          color: 'white',
        },
        muteBadgeStyle: {
          backgroundColor: '#aaa',
          textAlign: 'center',
          height: 20,
          minWidth: 20,
          borderRadius: 10,
          marginTop: 3,
          paddingLeft: 4,
          paddingRight: 3,
          fontSize: 12,
          overflow: 'hidden',
          color: 'white',
        },
        hideStyle: {
          display: 'none',
          opacity: 0,
        },
      },
    },
  ],
  true,
];