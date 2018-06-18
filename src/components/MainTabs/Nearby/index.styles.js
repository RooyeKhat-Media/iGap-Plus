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
        container: {
          flex: 1,
        },
        nearbyTurnOn: {
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appTheme.wrapperBackground,
        },
        nearbyMessage: {
          flex: 0.5,
          color: appTheme.primaryText,
        },
        titleText: {
          marginLeft: 20,
          color: appTheme.toolbarText,
          fontSize: 18,
          alignSelf: 'flex-start',
          ...IRANSans_Medium,
        },
      },
    },
  ],
];