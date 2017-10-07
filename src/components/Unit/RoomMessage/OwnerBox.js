import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {FormattedRelative} from 'react-intl';

export default ({message}) => (
  <View style={styles.container}>
    <View style={styles.messageBox}>
      <MessageBox message={message}/>
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
    justifyContent: 'flex-end',
  },

  messageBox: {
    backgroundColor: '#fafafa',
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});