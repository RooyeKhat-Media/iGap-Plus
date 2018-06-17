import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {appTheme} from '../../../themes/default/index';


export default () => (
  <StatusBar backgroundColor={appTheme.statusBar} barStyle={Platform.select({
    android: 'dark-content',
    default: 'default',
  })}/>
);