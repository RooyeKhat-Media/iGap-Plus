import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {FormattedRelative} from 'react-intl';
import Avatar from '../../../containers/Unit/Avatar';

export default ({message}) => (
  <View style={styles.container}>
    <View style={styles.avatarWrap}>
      {message.authorUserObject ? (<Avatar userId={message.authorUserObject.id} size={35}/>) : null}
    </View>
    <View style={styles.messageBox}>
      {message.authorUserObject ? (<Text style={[styles.author, {color: message.authorUserObject.color}]}>
        {message.authorUserObject.displayName}
      </Text>) : null}
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
    justifyContent: 'flex-start',
  },
  avatarWrap: {
    width: 38,
    marginLeft: 4,
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
    margin: 5,
    maxWidth: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 10,
  },
});