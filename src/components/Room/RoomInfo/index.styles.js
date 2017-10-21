import {uniqueId} from 'lodash';
import {black200, gray500, gray800, primary} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        container: {
          flex: 1,
        },
        scroll: {
        },
        sectionTop: {
          height:200,
          backgroundColor:'#697',
        },
        avatar: {
          alignSelf:'center',
        },
        containerJoinLeav: {
          position :'absolute',
          top:150,
          right:15,
          flexDirection: 'row',
        },
        buttonwhite: {
          text: {
            fontSize: 16,
            color: '#000',
            fontWeight: 'normal',
          },
          container: {
            height: 35,
            backgroundColor:'#fff',
            borderColor:'#000',
            borderWidth:1,
            marginLeft:5,
            marginRight:5,
          },
        },
        buttonBlue: {
          text: {
            fontSize: 16,
            color: '#fff',
            fontWeight: 'normal',
          },
          container: {
            height: 35,
            backgroundColor:primary,
            marginLeft:5,
            marginRight:5,
          },
        },
        buttonjoin: {
          text: {
            fontSize: 16,
            color: '#fff',
            fontWeight: 'normal',
          },
          container: {
            height: 35,
            width:160,
            backgroundColor:primary,
          },
        },
        buttonLeave: {
          text: {
            fontSize: 16,
            color: '#000',
            fontWeight: 'normal',
          },
          container: {
            height: 35,
            width:160,
            backgroundColor:'#fff',
            borderColor:'#000',
            borderWidth:1,
          },
        },
        textTitle: {
          color:'#000',
          fontWeight:'bold',
          fontSize: 22,
          alignSelf:'flex-start',
        },
        textSub: {
          color:gray800,
          fontSize: 14,
          alignSelf:'flex-start',
        },
        textInfo: {
          color:black200,
          fontSize: 16,
          alignSelf:'flex-start',
        },
        sectionMiddle: {
          margin:10,
        },
        layoutMuteNotificaion: {
          flexDirection: 'row',
          marginTop:6,
        },
        sectionShearedMedia: {
          paddingBottom:20,
        },
        textSharedMedia: {
          color:black200,
          fontSize: 16,
          marginLeft:10,
          alignSelf:'flex-start',
        },
        divider: {
          flex:1,
          borderTopWidth:1,
          borderTopColor:gray500,
          alignSelf:'center',
          marginLeft:10,
        },
        rowField: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin:8,
        },
        sharedItem: {
          alignItems:'center',
        },
        sharedIcon: {
          width:35,
          height:35,
          backgroundColor:gray800,
          borderRadius:5,
          color:'#fff',
          paddingTop:6,
          paddingLeft:6,
        },
      },
    },
  ],
];