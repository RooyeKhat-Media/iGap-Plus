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
          backgroundColor: appTheme.pageBackground,
        },
        form: {
          padding: 15,
        },
        radioWrap: {
          flexDirection: 'row',
          flex: 1,
          height: 50,
        },
        radioLabel: {
          label: {
            ...IRANSans_Medium,
            fontSize: 15,
            color: appTheme.primaryText,
          },
        },
        usernameWrap: {},
        textPublic: {
          ...IRANSans_Medium,
          fontSize: 16,
          color: appTheme.primaryText,
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
        inviteLinkLabel: {
          ...IRANSans_Medium,
          color: appTheme.primary,
        },
        inviteLink: {
          padding: 5,
          paddingTop: 10,
          color: appTheme.primaryText,
        },
      },
    },
  ],
];