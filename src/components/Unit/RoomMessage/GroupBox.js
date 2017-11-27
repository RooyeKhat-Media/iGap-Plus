import React from 'react';
import {View} from 'react-native';
import MessageBox from './MessageBox/index';
import Avatar from '../../../containers/Unit/Avatar';
import AddonTime from './MessageBox/AddonTime';
import Title from '../../../containers/Unit/Title';
import {groupStyle as styles} from './index.styles';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
  <View style={styles.container}>
    <View style={styles.avatarWrap}>
      <Avatar userId={message.authorUser} roomId={message.authorRoom} size={40}/>
    </View>
    <View style={styles.triangle}/>
    <View style={styles.messageBox}>
      <Title userId={message.authorUser} roomId={message.authorRoom}/>
      <MessageBox message={message} showText={showText} onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>
      <View style={styles.footerWrap}>
        <AddonTime createTime={message.createTime}/>
      </View>
    </View>
  </View>
);