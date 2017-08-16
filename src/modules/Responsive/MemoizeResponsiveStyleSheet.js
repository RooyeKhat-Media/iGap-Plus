// @flow
import * as _ from 'lodash';
import Device from './Device';
import ResponsiveStyleSheet from './ResponsiveStyleSheet';

function styleSelect(style) {
  return ResponsiveStyleSheet.select(style[1]);
}

const MemoizeResponsiveStyleSheet = _.memoize(styleSelect, function(style) {
  const {width, height} = Device.dimensions.window;
  return style[0] + ':' + width + ':' + height;
});

export default MemoizeResponsiveStyleSheet;