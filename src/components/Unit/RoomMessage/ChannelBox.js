import React from 'react';
import {StyleSheet, View} from 'react-native';
import MessageBox from './MessageBox/index';

export default ({message}) => (
  <View style={styles.container}>
    <MessageBox message={message}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  message: {
    color: '#202020',
  },
});