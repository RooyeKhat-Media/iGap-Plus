import {uniqueId} from 'lodash';
import {MAX_WIDTH_NORMAL_HEIGHT, MIN_WIDTH_NORMAL_HEIGHT} from '../../../../constants/screenBreakPoints';
import {black600} from '../../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  [
    {
      query: {},
      style: {
        container: {
          backgroundColor: '#fff',
          paddingRight: 15,
          paddingLeft: 20,
          paddingBottom: 5,
          paddingTop: 25,
        },
        layoutHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 2,
        },
        avatarWrap: {
          width: 40,
        },
        textTitle: {
          marginLeft: 10,
          flex: 1,
          color: black600,
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'left',
        },
        layoutChannelInfo: {
          marginTop: 8,
          flex: 1,
          flexDirection: 'row',
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
          flex: 1,
          textAlign: 'right',
        },
        textMessage: {
          color: black600,
          fontSize: 18,
        },
        flex: {
          flex: 1,
        },
        bookmark: {
          marginLeft: 18,
        },
        messageWrapper: {
          flex: 1,
        },
      },
    },
    {
      query: MAX_WIDTH_NORMAL_HEIGHT,
      style: {
        messageWrapper: {
          flexDirection: 'column',
        },
      },
    },
    {
      query: MIN_WIDTH_NORMAL_HEIGHT,
      style: {
        messageWrapper: {
          flexDirection: 'row',
        },
        textMessage: {
          marginLeft: 2,
        },
      },
    },
  ],
];