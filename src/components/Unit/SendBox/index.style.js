import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import {IRANSans} from '../../../constants/fonts/index';
import {I18nManager} from 'react-native';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {},
        animatedWrap: {
          backgroundColor: appTheme.wrapperBackground,
        },
        inputBox: {
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: appTheme.border,
          borderRadius: 25,
          minHeight: 50,
          margin: 5,
        },
        inputWrap: {
          backgroundColor: appTheme.wrapperBackground,
        },
        textInputStyle: {
          flex: 1,
          borderWidth: 0,
          paddingLeft: 2,
          paddingRight: 4,
          fontSize: 16,
          ...IRANSans,
          color: appTheme.primaryText,
          backgroundColor: appTheme.wrapperBackground,
        },
        iconEmoji: {
          color: appTheme.icon,
          paddingLeft: 4,
          backgroundColor: 'transparent',
        },

        iconMic: {
          color: appTheme.icon,
          paddingLeft: 7,
          paddingRight: 6,
          backgroundColor: 'transparent',

        },
        iconSend: {
          color: appTheme.icon,
          paddingLeft: 4,
          paddingRight: 4,
          backgroundColor: 'transparent',

        },
        iconAttachment: {
          color: appTheme.icon,
          transform: [{rotate: '45deg'}],
          paddingLeft: 4,
          paddingRight: 1,
          backgroundColor: 'transparent',

        },
        iconClose: {
          color: appTheme.icon,
          paddingLeft: 4,
          paddingRight: 4,
        },
        rowField: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 8,
        },
        sharedItem: {
          alignItems: 'center',
        },
        textSharedMedia: {
          color: appTheme.titleText,
          fontSize: 16,
          alignSelf: 'center',
        },
        iconColor: {
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        colorRed: {
          backgroundColor: '#ff2748',
        },
        colorPurple: {
          backgroundColor: '#dba4da',
        },
        colorDarkRed: {
          backgroundColor: '#ec5877',
        },
        colorOrange: {
          backgroundColor: '#ff8135',
        },
        colorDarkBlue: {
          backgroundColor: '#0193e5',
        },
        colorLightBlue: {
          backgroundColor: '#36becf',
        },
        colorGreen: {
          backgroundColor: '#1de4b3',
        },
        colorBrown: {
          backgroundColor: '#9e9992',
        },

        addonWrap: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        addonText: {
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          margin: 5,
          marginLeft: 10,
          marginRight: 10,
          flex: 1,
          borderLeftColor: appTheme.primary,
          borderLeftWidth: 3,
          color: appTheme.primaryText,
        },
        soundRecorder: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
        activeEmojiPiker: {
          height: 250,
        },
        inActiveEmojiPiker: {
          height: 0,
          display: 'none',
        },
        replyClose: {
          width: 50,
          height: 50,
        },
      },
    },
  ],
  true,
];