import React from 'react';
import {StyleSheet, View} from 'react-native';
import Log from './MessageBox/Log';

export default ({message}) => (
  <View style={styles.container}>
    <Log message={message}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  message: {
    color: '#202020',
  },
});