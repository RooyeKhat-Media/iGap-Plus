import React from 'react';
import {StyleSheet, View} from 'react-native';
import MessageBox from './MessageBox/index';
import AddonTime from './MessageBox/AddonTime';

export default ({message}) => (
  <View style={styles.container}>
    <View style={styles.messageBox}>
      <MessageBox message={message}/>
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
    justifyContent: 'flex-end',
  },

  messageBox: {
    backgroundColor: '#faf8f6',
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});