import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        container: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        roomDescription: {
          paddingLeft: 15,
          paddingRight: 15,
        },
        scroll: {},
        avatarWrap: {
          height: 200,
          alignSelf: 'center',
          overflow: 'hidden',
        },
        sectionWrap: {},
        section: {

          borderTopWidth: 1,
          borderTopColor: appTheme.border,
          borderBottomWidth: 1,
          borderBottomColor: appTheme.border,
          marginBottom: 10,
        },
        containerJoinLeav: {
          position: 'absolute',
          top: 150,
          right: 15,
          flexDirection: 'row',
        },
        buttonwhite: {
          text: {
            fontSize: 16,
            color: '#000',
          },
          container: {
            height: 35,
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1,
            marginLeft: 5,
            marginRight: 5,
          },
        },
        buttonBlue: {
          text: {
            fontSize: 16,
            color: '#fff',
          },
          container: {
            height: 35,
            backgroundColor: appTheme.primary,
            marginLeft: 5,
            marginRight: 5,
          },
        },
        buttonjoin: {
          text: {
            fontSize: 16,
            color: '#fff',
          },
          container: {
            height: 35,
            width: 160,
            backgroundColor: appTheme.primary,
          },
        },
        buttonLeave: {
          text: {
            fontSize: 16,
            color: '#000',
          },
          container: {
            height: 35,
            width: 160,
            backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1,
          },
        },
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
        roomTitleWrap: {},
        roomTitle: {
          color: appTheme.titleText,
          ...IRANSans_Medium,
          fontSize: 15,
          marginRight: 6,
          alignSelf: 'center',
          textAlign: 'left',
        },
        roomStatus: {
          fontSize: 13,
          color: appTheme.primaryText,
          textAlign: 'left',
        },
        textTitle: {
          color: appTheme.titleText,
          ...IRANSans_Medium,
          fontSize: 22,
          alignSelf: 'flex-start',
        },
        textSub: {
          color: appTheme.secondaryText,
          fontSize: 14,
          alignSelf: 'flex-start',
        },
        iconsLayout: {
          flexDirection: 'row',
          marginRight: 10,
        },
        circleIcon: {
          container: {
            backgroundColor: appTheme.wrapperBackground,
          },
        },
        textInfo: {
          color: appTheme.titleText,
          fontSize: 16,
          alignSelf: 'flex-start',
        },
        layoutMuteNotificaion: {
          flexDirection: 'row',
          marginTop: 6,
          marginLeft: 10,
        },
        sectionShearedMedia: {
          paddingBottom: 20,
        },
        textSharedMedia: {
          color: appTheme.titleText,
          fontSize: 16,
        },
        divider: {
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: appTheme.border,
          alignSelf: 'center',
          marginLeft: 10,
        },
        rowField: {
          flexDirection: 'row',
          margin: 8,
        },
        sharedItem: {
          alignItems: 'center',
          flex: 1,
        },
        sharedIcon: {
          width: 35,
          height: 35,
          backgroundColor: appTheme.wrapperBackground,
          borderRadius: 5,
          color: appTheme.icon,
          paddingTop: 6,
          paddingLeft: 6,
        },
        listItem: {
          container: {
            height: 45,
          },
          centerElementContainer: {
            marginLeft: 0,
          },
          leftElement: {
            marginRight: 0,
          },
          leftElementContainer: {
            width: 30,
          },
        },
      },
    },
  ],
];