import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();

export default [
  uId,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          height: 45,
        },
        touchable: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
          borderWidth: 1,
          borderColor: appTheme.border,
          borderRadius: 4,
        },
        touchableView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        selectBox: {flex: 1},
        selectText: {
          color: appTheme.primaryText,
        },
        selectIcon: {
          width: 20,
        },
        listViewContainer: {
          flex: 1,
        },
        countryList: {
          flex: 1,
        },
      },
    },
  ],
];