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
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        itemLayout: {
          height: 72,
          justifyContent: 'center',
        },
        rowLayout: {
          flexDirection: 'row',
        },
        CallTypeIcon: {
          marginTop: 6,
        },
        titleText: {
          fontSize: 18,
          color: appTheme.primaryText,
          textAlign: 'left',
        },
        rightElement: {
          paddingRight: 10,
          paddingLeft: 5,
        },
        icon: {
          marginRight: 5,
        },
      },
    },
  ],
];