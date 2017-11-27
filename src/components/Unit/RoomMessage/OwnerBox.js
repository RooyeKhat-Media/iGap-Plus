import React from 'react';
import {View} from 'react-native';
import MessageBox from './MessageBox/index';
import AddonTime from './MessageBox/AddonTime';
import {ownerStyle as styles} from './index.styles';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
  <View style={styles.container}>
    <View style={styles.messageBox}>
      <MessageBox message={message} showText={showText} onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>
      <View style={styles.footerWrap}>
        <AddonTime createTime={message.createTime}/>
      </View>
    </View>
    <View style={styles.triangle}/>
  </View>
);