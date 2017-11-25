import {uniqueId} from 'lodash';
import {primary} from '../../../themes/default/index';

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
        revokeWrap: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        inviteLinkLabel: {
          fontWeight: 'bold',
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