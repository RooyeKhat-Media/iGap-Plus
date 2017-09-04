import * as _ from 'lodash';
import Device from '../../modules/Responsive/Device';

import {
  NORMAL_HEIGHT,
  NORMAL_WIDTH,
  ORIENTATION_LANDSCAPE,
  ORIENTATION_PORTRAIT,
} from '../../constants/screenBreakPoints';

const id = _.uniqueId();
const {width, height} = Device.dimensions.window;
const min = _.min([width, height]);
const max = _.max([width, height]);
const svgSize = _.min([_.min([min, NORMAL_WIDTH]) - 120,
  _.min([max, NORMAL_HEIGHT]) - 330]);
export default [
  id,
  [
    {
      query: {},
      style: {
        wrapper: {
          backgroundColor: '#f0f0f0',
        },
        layout: {
          backgroundColor: 'white',
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
          fontWeight: 'bold',
          color: '#222222',
          alignItems: 'center',
        },
        subTitle: {
          fontSize: 14,
          color: '#c7c7c7',
          paddingLeft: 20,
          paddingRight: 20,
          lineHeight: 25,
          textAlign: 'center',
          fontWeight: '100',
        },
        btnWrap: {
          height: 50,
          justifyContent: 'center',
        },
        btn: {
          container: {
            flex: 1,
            backgroundColor: '#fafafa',
          },
          text: {
            color: '#222',
          },
        },
        btnActive: {
          container: {
            flex: 1,
            backgroundColor: '#3298ee',
          },
          text: {
            color: '#fff',
          },
        },
        paginationStyle: {
          bottom: 5,
        },
        dotStyle: {
          borderRadius: 5,
          backgroundColor: '#c7c7c7',
          borderWidth: 2,
          borderColor: '#c7c7c7',
          width: 18,
          height: 9,
        },
        activeDotStyle: {
          borderRadius: 5,
          width: 18,
          height: 9,
          backgroundColor: '#222222',
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