import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

export default ({message, attachment}) => (
  <View style={styles.container}>
    <View style={styles.fileWrap}></View>
    {message && (<Text message={message}/>)}
  </View>
);

const styles = StyleSheet.create({
  container: {},
  fileWrap: {
    height: 40,
    backgroundColor: '#d5ebee',
    borderRadius: 3,
  },
});