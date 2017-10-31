import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {FormattedRelative} from 'react-intl';
import {white} from '../../../themes/default/index';

export default ({message, showText}) => (
  <View style={styles.container}>
    <View style={styles.triangle}/>
    <View style={styles.messageBox}>
      <MessageBox message={message} showText={showText}/>
      <View style={styles.footerWrap}>
        <Text style={styles.timeText}>
          <FormattedRelative updateInterval={0} value={message.createTime * 1000}/>
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
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
});