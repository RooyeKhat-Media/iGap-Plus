import React from 'react';
import {Platform, StatusBar} from 'react-native';


export default () => (
  <StatusBar backgroundColor="#e5e5e5" barStyle={Platform.select({
    android: 'dark-content',
    default: 'default',
  })}/>
);