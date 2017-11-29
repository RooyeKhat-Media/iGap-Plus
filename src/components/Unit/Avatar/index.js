/* eslint-disable import/no-unresolved, import/extensions */
import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

class AvatarComponent extends PureComponent {

  render() {
    const {text, uri} = this.props;
    const {styles} = this;
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

  get styles() {
    const {uri, size, circle, color} = this.props;
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
        display: uri ? 'none' : null,
      },
      imageStyles: {
        width: size,
        height: size,
        borderRadius: circle ? size / 2 : null,
        display: !uri ? 'none' : null,
      },
    });
  }
}

AvatarComponent.propTypes = {
  uri: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  circle: PropTypes.bool,
};

export default AvatarComponent;
