import {uniqueId} from 'lodash';

const id = uniqueId();
export default (UserNewProfile) => ([
  id,
  [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: UserNewProfile.layoutBackgroundColor,
        },
        panel: {
          flex: 1,
          padding: 15,
        },
        inputRow: {
          flexDirection: 'row',
        },
        btnRow: {
          marginTop: 10,
          marginBottom: 10,
        },
        avatarWrap: {
          alignItems: 'center',
          justifyContent: 'center',
          margin: 40,
        },
        selectAvatar: {
          borderRadius: 65,
          width: 130,
          height: 130,
          borderWidth: 3,
          borderColor: UserNewProfile.selectAvatarBorderColor,
        },
      },
    }],
]);