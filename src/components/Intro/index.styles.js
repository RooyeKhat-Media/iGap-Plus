import {max, min, uniqueId} from 'lodash';
import Device from '../../modules/Responsive/Device';

import {
  NORMAL_HEIGHT,
  NORMAL_WIDTH,
  ORIENTATION_LANDSCAPE,
  ORIENTATION_PORTRAIT,
} from '../../constants/screenBreakPoints';
import {IRANSans_Medium} from '../../constants/fonts/index';
import {appTheme, gray2} from '../../themes/default/index';

const id = uniqueId();
const {width, height} = Device.dimensions.window;
const minSize = min([width, height]);
const maxSize = max([width, height]);
const svgSize = min([min([minSize, NORMAL_WIDTH]) - 120,
  min([maxSize, NORMAL_HEIGHT]) - 330]);
export default [
  id,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          backgroundColor: appTheme.wrapperBackground,
        },
        layout: {
          backgroundColor: appTheme.pageBackground,
        },
        swiperWrap: {
          flex: 1,
        },
        swiper: {
          flex: 1,
        },
        slide: {
          flex: 1,
        },
        titleWrap: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        title: {
          fontSize: 20,
          ...IRANSans_Medium,
          color: appTheme.titleText,
          alignItems: 'center',
        },
        subTitle: {
          fontSize: 14,
          color: appTheme.secondaryText,
          paddingLeft: 20,
          paddingRight: 20,
          lineHeight: 25,
          textAlign: 'center',
        },
        btnWrap: {
          height: 50,
          justifyContent: 'center',
        },
        btn: {
          container: {
            flex: 1,
            backgroundColor: appTheme.toolbar,
            margin: 1,
          },
          text: {
            color: appTheme.primaryText,
          },
        },
        btnActive: {
          container: {
            flex: 1,
            backgroundColor: appTheme.primary,
          },
          text: {
            color: appTheme.primaryText,
          },
        },
        paginationStyle: {
          bottom: 5,
        },
        dotStyle: {
          borderRadius: 5,
          backgroundColor: appTheme.border,
          borderWidth: 2,
          borderColor: appTheme.border,
          width: 18,
          height: 9,
        },
        activeDotStyle: {
          borderRadius: 5,
          width: 18,
          height: 9,
          backgroundColor: gray2,
        },
        svgWrap: {
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        svgStyle: {
          width: svgSize,
          height: svgSize,
        },
      },
    },
    {
      query: ORIENTATION_PORTRAIT,
      style: {
        slide: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
      },
    },
    {
      query: ORIENTATION_LANDSCAPE,
      style: {
        slide: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        titleWrap: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  ],
];
