import React from 'react';
import {StyleSheet, View} from 'react-native';
import MessageBox from './MessageBox/index';
import AddonTime from './MessageBox/AddonTime';
import {white500} from '../../../themes/default/index';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
  <View style={styles.container}>
    <View style={styles.messageBox}>
      <MessageBox message={message} showText={showText} onMessagePress={onMessagePress} onMessageLongPress={onMessageLongPress}/>
      <View style={styles.footerWrap}>
        <AddonTime createTime={message.createTime}/>
      </View>
    </View>
    <View style={styles.triangle}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  messageBox: {
    backgroundColor: white500,
    borderRadius: 15,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
    marginLeft: -13,
    borderLeftWidth: 15,
    borderRightWidth: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: white500,
    borderRightColor: 'rgba(0,0,0,0)',
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    transform: [{rotate: '45deg'}],
  },
});