import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({location}) => (
  <View style={styles.container}><Text>location</Text></View>
);

const styles = StyleSheet.create({
  container: {},
  message: {
    color: '#202020',
  },
});