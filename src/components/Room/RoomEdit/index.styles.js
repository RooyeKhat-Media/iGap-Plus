import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        root: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
        },
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
        text_changePhoto: {
          padding: 5,
          margin: 5,
          fontSize: 18,
          color: appTheme.primary,
          alignSelf: 'center',
        },
        loaderStyle: {
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: '#619ec6',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  ],
];