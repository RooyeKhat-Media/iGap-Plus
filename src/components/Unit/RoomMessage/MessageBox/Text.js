import React from 'react';
import {StyleSheet, View} from 'react-native';
import RichTextView from '../../../../modules/RichTextView/index';

export default ({message, showText}) => (
  showText ?
    <View style={styles.container}>
      <RichTextView style={styles.message} rawText={message}/>
    </View> : null
);

const styles = StyleSheet.create({
  container: {},
  message: {
    color: '#202020',
  },
});