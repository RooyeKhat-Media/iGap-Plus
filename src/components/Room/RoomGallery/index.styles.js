import {uniqueId} from 'lodash';
import {IRANSans_Medium} from '../../../constants/fonts/index';
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
        },
        galleryStyle: {
          flex: 1,
          backgroundColor: '#696969',
        },
        messageText: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight: 140,
          padding: 5,
          backgroundColor: '#ffffff80',
        },
        toolbarText: {
          color: appTheme.titleText,
          fontSize: 18,
          alignSelf: 'flex-start',
          ...IRANSans_Medium,
          paddingRight: 20,
        },
      },
    },
  ],
];