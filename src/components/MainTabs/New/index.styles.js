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
          backgroundColor: appTheme.pageBackground,
        },
        sectionTop: {
          marginTop: 15,
          marginLeft: 15,
        },
        rowField: {
          flexDirection: 'row',
          marginTop: 6,
        },
        iconsLayout: {
          flexDirection: 'row',
          marginRight: 10,
          alignContent: 'center',
        },
        icon: {
          marginRight: 2,
          marginLeft: 2,
          padding: 4,
        },
        titleText: {
          color: appTheme.primaryText,
        },
        divider: {
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: appTheme.border,
          alignSelf: 'center',
          marginLeft: 10,
        },
        dividerHeader: {
          fontSize: 16,
          ...IRANSans_Medium,
          textAlign: 'right',
          paddingRight: 15,
          color: appTheme.primaryText,
          borderBottomColor: appTheme.border,
          borderBottomWidth: 1,
        },
        listItem: {
          container: {
            height: 35,
          },
          centerElementContainer: {
            marginLeft: 0,
          },
          leftElement: {
            marginRight: 0,
          },
          leftElementContainer: {
            width: 30,
          },
        },

      },
    },
  ],
];