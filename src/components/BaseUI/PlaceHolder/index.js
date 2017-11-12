import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

class PlaceHolderComponent extends PureComponent {
  render() {
    const {width, height} = this.props;
    return (
      <View style={getStyle(width, height).root}/>
    );
  }
}

PlaceHolderComponent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PlaceHolderComponent;

function getStyle(width, height) {
  return StyleSheet.create({
    root: {
      width: width,
      height: height,
      backgroundColor: '#e7e7e7',
      borderRadius: 3,
      margin: 3,
    },
  });
}