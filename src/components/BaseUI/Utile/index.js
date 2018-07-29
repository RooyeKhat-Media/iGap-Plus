import React from 'react';
import {I18nManager, TouchableOpacity} from 'react-native';
import {Icon} from '../index';
import {appTheme} from '../../../themes/default/index';

export function arrowBackIcon(goBack) {
  return <TouchableOpacity onPress={() => goBack()} style={{padding:7}}>
    <Icon name={'arrow-back'} color={appTheme.toolbarIcon}
      style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}], paddingStart: 5}}/>
  </TouchableOpacity>;
}