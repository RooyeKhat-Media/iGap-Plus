import Device from '../../../modules/Responsive/Device';
import {max, min, uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {appTheme} from '../../../themes/default/index';

const {width} = Device.dimensions.window;
const boxWidth = min([360, max([width, 280])]);
const uId = uniqueId();

export default [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          backgroundColor: appTheme.pageBackground,
          flex: 1,
          margin: 20,
          borderRadius: 2,
          width: boxWidth,
          minWidth: 280,
          maxWidth: 420,
        },
        flexContainer: {
          flex: 1,
          borderRadius: 2,
          backgroundColor: '#fff',
        },
        headerWrap: {
          padding: 5,
          borderBottomWidth: 1,
          borderBottomColor: appTheme.border,
        },
        headerTopWrap: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        headerTopActions: {
          flexDirection: 'row',
        },
        headerTitle: {
          padding: 10,
          ...IRANSans_Medium,
          fontSize: 16,
          color: appTheme.primaryText,
        },
        searchWrap: {
          flexDirection: 'row',
          margin: 5,
          height: 40,
          paddingLeft: 5,
          paddingRight: 5,
          borderWidth: 1,
          borderColor: appTheme.border,
          backgroundColor: appTheme.wrapperBackground,
          borderRadius: 0,
        },
        searchInput: {
          flex: 1,
          borderWidth: 0,
          height: 38,
          borderRadius: 0,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 0,
          paddingBottom: 0,
        },
        searchIcon: {
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        },
        bodyWrap: {
          padding: 5,
          flex: 1,
        },
        listViewContainer: {
          flex: 1,
        },
        countryList: {
          flex: 1,
        },
        footerWrap: {
          padding: 5,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        },
        dialogBtn: {
          container: {
            marginLeft: 8,
            paddingHorizontal: 8,
            borderWidth: 0,
          },
        },
      },
    },
  ],
];