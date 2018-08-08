import {appTheme} from '../../../../themes/default/index';
import {IRANSans_Medium} from '../../../../constants/fonts/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          paddingRight: 10,
          paddingLeft: 10,
          paddingBottom: 5,
          paddingTop: 5,
        },
        layoutHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          borderTopRightRadius: 7,
          borderTopLeftRadius: 7,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 2,
          backgroundColor: appTheme.pageBackground,
        },
        messageWrapper: {
          padding: 4,
          flexDirection: 'column',
          backgroundColor: appTheme.pageBackground,
        },
        avatarWrap: {
          width: 45,
        },
        textTitle: {
          ...IRANSans_Medium,
          marginLeft: 10,
          flex: 1,
          color: appTheme.titleText,
          fontSize: 16,
          textAlign: 'left',
        },
        layoutChannelInfo: {
          backgroundColor: appTheme.pageBackground,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
          alignItems: 'center',
        },
        channelReactionWrap: {
          flexDirection: 'row',
        },
        chanelInfoWrap: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        textUPDown: {
          marginRight: 3,
          marginLeft: 9,
        },
        textSeen: {
          marginRight: 3,
        },
        textSignature: {
          fontSize: 14,
          marginRight: 10,
          marginLeft: 10,
        },
        textMessage: {
          color: appTheme.titleText,
        },
        flex: {
          flex: 1,
        },
        bookmark: {
          marginLeft: 18,
        },
        reactionBtn: {
          container: {
            borderWidth: 0,
            padding: 0,
            paddingHorizontal: 7,
          },
        },
      },
    },
  ],
];