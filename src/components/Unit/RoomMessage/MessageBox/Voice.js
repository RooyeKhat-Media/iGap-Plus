import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({attachment}) => (
  <View style={styles.container}><Text>Voice</Text></View>
);

const styles = StyleSheet.create({
  container: {},
  message: {
    color: '#202020',
  },
});