import React from 'react';
import {View} from 'react-native';
import Log from './MessageBox/Log';
import {logStyle as styles} from './index.styles';

export default ({message}) => (
  <View style={styles.container}>
    <Log message={message}/>
  </View>
);