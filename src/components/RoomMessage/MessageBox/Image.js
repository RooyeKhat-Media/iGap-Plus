import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

export default ({message, attachment}) => (
  <View style={styles.container}>
    <View style={styles.imageWrap}>
      <Text message="Image"/>
    </View>
    {message ? (<Text message={message}/>) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {},
  imageWrap: {
    width: 200,
    height: 180,
  },
});