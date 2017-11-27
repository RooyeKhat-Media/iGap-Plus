import React from 'react';
import {Text, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {FormattedRelative} from 'react-intl';
import {chatStyle as styles} from './index.styles';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
  <View style={styles.container}>
    <View style={styles.triangle}/>
    <View style={styles.messageBox}>
      <MessageBox message={message} showText={showText} onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>
      <View style={styles.footerWrap}>
        <Text style={styles.timeText}>
          <FormattedRelative updateInterval={0} value={message.createTime * 1000}/>
        </Text>
      </View>
    </View>
  </View>
);