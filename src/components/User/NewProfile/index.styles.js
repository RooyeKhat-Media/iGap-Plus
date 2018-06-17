import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: appTheme.pageBackground,
        },
        panel: {
          flex: 1,
          padding: 15,
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
          borderColor: appTheme.border,
        },
      },
    }],
];