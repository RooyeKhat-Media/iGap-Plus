import {uniqueId} from 'lodash';
import {black200, gray500, gray800, primary} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
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
        sectionWrap: {
          backgroundColor: '#fafafa',
        },
        section: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e2e2e2',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
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
            backgroundColor: primary,
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
            backgroundColor: primary,
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
        textTitle: {
          color: '#000',
          ...IRANSans_Medium,
          fontSize: 22,
          alignSelf: 'flex-start',
        },
        textSub: {
          color: gray800,
          fontSize: 14,
          alignSelf: 'flex-start',
        },
        textInfo: {
          color: black200,
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
          color: black200,
          fontSize: 16,
        },
        divider: {
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: gray500,
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
          backgroundColor: gray800,
          borderRadius: 5,
          color: '#fff',
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