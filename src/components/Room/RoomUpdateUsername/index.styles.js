import {uniqueId} from 'lodash';
import {primary} from '../../../themes/default/index';
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
        scroll: {
          paddingBottom: 100,
        },
        form: {
          padding: 15,
        },
        avatarWrap: {
          margin: 10,
          alignSelf: 'center',
          height: 150,
        },
        radioWrap: {
          flexDirection: 'row',
          flex: 1,
          height: 50,
        },
        radioLabel: {
          ...IRANSans_Medium,
          fontSize: 15,
        },
        usernameWrap: {},
        LinkWrap: {
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          padding: 7,
        },
        inviteLinkWrap: {
          flex: 1,
        },
        inviteLinkLabel: {
          ...IRANSans_Medium,
          color: primary,
        },
        inviteLink: {
          padding: 5,
          paddingTop: 10,
        },
      },
    },
  ],
];