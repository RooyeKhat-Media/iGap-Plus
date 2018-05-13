// @flow
import {merge} from 'lodash';
import {StyleSheet} from 'react-native';
import Device from './Device';
import MediaQuerySelector, {MediaQuery} from './MediaQuerySelector';

type MediaQueryStyle = {
  query: MediaQuery,
  style: StyleSheet.Styles
};

export default class MediaQueryStyleSheet {
  static select(styles: MediaQueryStyle[]): StyleSheet.Styles {
    const {width, height} = Device.dimensions.window;
    let selectedStyles: StyleSheet.Styles[] = [];
    styles.forEach(style =>
      selectedStyles = MediaQuerySelector.query(style.query, width, height) ? merge(selectedStyles, {...style.style}) : selectedStyles
    );
    return selectedStyles;
  }
}