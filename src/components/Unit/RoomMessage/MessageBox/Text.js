import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({message, showText}) => (
  showText ?
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View> : null
);

const styles = StyleSheet.create({
  container: {},
  message: {
    color: '#202020',
  },
});