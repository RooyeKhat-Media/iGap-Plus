import {appTheme} from '../../../themes/default/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';
import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
  uId,
  () => [
    {
      query: {},
      style: {
        fileWrap: {
          flexDirection: 'row',
          marginBottom: 3,
        },
        thumbnail: {
          width: 80,
          height: 70,
        },
        fileInfoWrap: {
          flex: 1,
          paddingLeft: 10,
          paddingRight: 5,
        },
        fileName: {
          ...IRANSans_Medium,
          fontSize: 14,
          color: appTheme.primary,
        },
        fileSize: {
          fontSize: 12,
          color: appTheme.secondaryText,
        },
        progressStyle: {
          marginTop: 10,
        },
        controlBox: {
          flexDirection: 'row',
        },
        headerWrap: {
          height: 30,
          paddingLeft: 15,
          paddingRight: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: appTheme.wrapperBackground,
          borderBottomColor: appTheme.border,
          borderBottomWidth: 1,
        },
        headerSoundName: {
          flex: 1,
          flexDirection: 'row',
          overflow: 'hidden',
        },
        hederTimer: {
          paddingLeft: 10,
          paddingRight: 10,
          minWidth: 81,
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  ],
  true,
];