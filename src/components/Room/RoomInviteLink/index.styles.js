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
        scroll: {
          paddingBottom: 100,
        },
        LinkWrap: {
          backgroundColor: appTheme.wrapperBackground,
          borderBottomWidth: 1,
          borderTopWidth: 1,
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
          ...IRANSans_Medium,
          color: appTheme.primary,
        },
        inviteLink: {
          padding: 5,
          paddingTop: 10,
          color: appTheme.primaryText,
        },
        revokeBtn: {
          marginLeft: 5,
        },
      },
    },
  ],
];