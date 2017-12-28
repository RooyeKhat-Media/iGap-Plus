import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => (<View style={defaultStyle.container} />);

const defaultStyle = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#e5e5e5',
  },
});