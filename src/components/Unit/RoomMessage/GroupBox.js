import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessageBox from './MessageBox/index';
import Avatar from '../../../containers/Unit/Avatar';
import AddonTime from './MessageBox/AddonTime';
import {white} from '../../../themes/default/index';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
  <View style={styles.container}>
    <View style={styles.avatarWrap}>
      <Avatar userId={message.authorUserObject && message.authorUserObject.id} size={40}/>
    </View>
    <View style={styles.triangle}/>
    <View style={styles.messageBox}>
      {message.authorUserObject ? (<Text
        style={[styles.author, {color: message.authorUserObject.color}]}>{message.authorUserObject.displayName}</Text>) : null}
      <MessageBox message={message} showText={showText} onMessagePress={onMessagePress}
        onMessageLongPress={onMessageLongPress}/>
      <View style={styles.footerWrap}>
        <AddonTime createTime={message.createTime}/>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  avatarWrap: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: -3,
  },
  messageBox: {
    backgroundColor: white,
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
    marginRight: -14,
    borderLeftWidth: 0,
    borderRightWidth: 16,
    borderTopWidth: 6,
    borderBottomWidth: 5,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: white,
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    transform: [{rotate: '-45deg'}],
  },
  author: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});