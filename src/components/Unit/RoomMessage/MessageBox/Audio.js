import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({message, attachment}) => (
  <View style={styles.container}><Text>{message}</Text></View>
);

const styles = StyleSheet.create({
  container: {},
  message: {
    color: '#202020',
  },
});