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
        root: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
        },
        scrollView: {
          flex: 1,
        },
        itemText: {
          fontSize: 15,
          color: appTheme.titleText,
          paddingLeft: 3,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 2,
          flex: 1,
        },
        rowField: {
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: appTheme.border,
          marginBottom: 2,
        },
        textLoading: {
          fontSize: 15,
          paddingTop: 14,
          color: appTheme.titleText,
          paddingRight: 8,
          ...IRANSans_Medium,
          alignSelf: 'center',
        },
        textSelfRemove: {
          fontSize: 18,
          color: appTheme.primary,
          alignSelf: 'center',
          margin: 8,
        },
        rowFieldSelfRemove: {
          flexDirection: 'row',
        },
        textSelfRemoveComment: {
          fontSize: 12,
          color: appTheme.titleText,
          paddingRight: 5,
          paddingLeft: 5,
          paddingBottom: 10,
          marginBottom: 2,
        },
      },
    },
  ],
];