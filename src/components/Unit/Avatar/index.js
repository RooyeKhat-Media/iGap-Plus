/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {memoize, uniqueId} from 'lodash';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';


class AvatarComponent extends PureComponent {

  render() {
    const {text, uri, size, circle, color, onPress} = this.props;
    const styles = getAvatarStyle({color, size, hasUri: uri ? 1 : 0, circle: circle ? 1 : 0});
    let source = {};
    if (uri) {
      source.uri = uri;
    }
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.wrapStyles}>
          <Image source={source} style={styles.imageStyles}/>
          <Text style={styles.contentStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const getAvatarStyle = memoize(({color, size, hasUri, circle}) => {
  const uId = uniqueId();
  return MemoizeResponsiveStyleSheet([
    uId,
    () => [
      {
        query: {},
        style: {
          container: {
            flexGrow: 1,
          },
          wrapStyles: {
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: size,
            height: size,
            borderRadius: circle ? size / 2 : null,
            backgroundColor: color,
          },
          contentStyle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: size / 2.3,
            display: hasUri ? 'none' : null,
          },
          imageStyles: {
            width: size,
            height: size,
            borderRadius: circle ? size / 2 : null,
            display: (!hasUri && Platform.os !== 'android') ? 'none' : null,
          },
        },
      },
    ],
    true,
  ]);


}, function({color, size, hasUri, circle}) {
  return color + '_' + size + '_' + hasUri + '_' + circle;
});

AvatarComponent.propTypes = {
  uri: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  circle: PropTypes.bool,
};

export default AvatarComponent;
