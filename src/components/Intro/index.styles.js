import * as _ from 'lodash';
import Device from '../../modules/Responsive/Device';

const id = _.uniqueId();
const {width, height} = Device.dimensions.window;
const min = _.min([width, height]);
const max = _.max([width, height]);
const svgSize = _.min([_.min([min, 360]) - 120, _.min([max, 640]) - 330]);
export default [
  id,
  [
    {
      query: {},
      style: {
        wrapper: {
          flex: 1,
          backgroundColor: '#f0f0f0',
        },
        layout: {
          flex: 1,
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
          color: '#3D325B',
          alignItems: 'center',
        },
        subTitle: {
          fontSize: 14,
          color: '#504479',
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
            backgroundColor: '#D3EFFA',
          },
          text: {
            color: '#3D325B',
          },
        },
        paginationStyle: {
          bottom: 5,
        },
        dotStyle: {
          borderRadius: 5,
          backgroundColor: '#fff',
          borderWidth: 2,
          borderColor: '#3D325B',
          width: 18,
          height: 9,
        },
        activeDotStyle: {
          borderRadius: 5,
          width: 18,
          height: 9,
          backgroundColor: '#3D325B',
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
      query: {minWidth: 361, orientation: 'portrait'},
      style: {
        layout: {
          flex: 0,
          width: 360,
        },
        wrapper: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    {
      query: {minWidth: 641, orientation: 'landscape'},
      style: {
        layout: {
          flex: 0,
          width: 640,
        },
        wrapper: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    {
      query: {minHeight: 361, orientation: 'landscape'},
      style: {
        layout: {
          flex: 0,
          height: 360,
        },
        wrapper: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    {
      query: {minHeight: 641, orientation: 'portrait'},
      style: {
        layout: {
          flex: 0,
          height: 640,
        },
        wrapper: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    {
      query: {orientation: 'portrait'},
      style: {
        slide: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
      },
    },
    {
      query: {orientation: 'landscape'},
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