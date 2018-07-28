import {uniqueId} from 'lodash';
import {appTheme} from '../../themes/default/index';
import {IRANSans_Bold} from '../../constants/fonts/index';

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
        scrollView: {
          flex: 1,
        },
        TitleText: {
          fontSize: 18,
          color: appTheme.primary,
          textAlign: 'center',
          paddingTop: 15,
          paddingBottom: 5,
          ...IRANSans_Bold,
          marginTop: 10,
        },
        subItemText: {
          fontSize: 14,
          color: appTheme.secondaryText,
          padding: 12,
          textAlign: 'center',
        },
        listItem: {
          container: {
            borderBottomWidth: 1,
            borderBottomColor: appTheme.border,
            margin: 5,
          },
          primaryText: {
            color: appTheme.titleText,
          },
          leftElementContainer: {
            width: 25,
            marginEnd: 10,
          },
        },
        themeColorWrap: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        },
        themeColor: {
          width: 20,
          height: 20,
          borderRadius: 10,
          margin: 2,
        },
      },
    },
  ],
];