/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {memoize} from 'lodash';


class AvatarComponent extends PureComponent {

  render() {
    const {text, uri, size, circle, color} = this.props;
    const styles = getAvatarStyle({color, size, hasUri: uri ? 1 : 0, circle: circle ? 1 : 0});
    let source = {};
    if (uri) {
      source.uri = uri;
    }
    return (
      <View style={styles.container}>
        <View style={styles.wrapStyles}>
          <Image source={source} style={styles.imageStyles}/>
          <Text style={styles.contentStyle}>{text}</Text>
        </View>
      </View>
    );
  }
}

const getAvatarStyle = memoize(({color, size, hasUri, circle}) => {
  return StyleSheet.create({
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
      display: !hasUri ? 'none' : null,
    },
  });
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
