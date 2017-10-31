import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {MCIcon} from '../../BaseUI';
import {black200} from '../../../themes/default/index';
import Avatar from '../../../containers/Unit/Avatar';
import AddonTime from './MessageBox/AddonTime';

export default ({message, showText}) => (
  <View style={styles.container}>
    <View style={styles.layoutheader}>
      <View style={styles.avatarWrap}>
        <Avatar roomId={message.roomId} size={40}/>
      </View>
      <Text style={styles.textTitle}>{'title'}</Text>
      <TouchableOpacity onPress={() => alert('more')} style={styles.moreIcon}>
        <MCIcon color={black200} name="dots-vertical" size={22}/>
      </TouchableOpacity>
    </View>

    <MessageBox message={message} showText={showText}/>

    <View style={styles.layoutChannelInfo}>

      <View style={styles.sub1}>
        <TouchableOpacity style={styles.rowField} onPress={() => alert('down')}>
          <Text style={styles.textCount}>{message.channelThumbsDownLabel}</Text>
          <MCIcon color={black200} name="thumb-down-outline" size={20} style={{marginRight: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowField} onPress={() => alert('up')}>
          <MCIcon color={black200} name="thumb-up-outline" size={20}/>
          <Text style={styles.textCount}>{message.channelThumbsUpLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('send')} style={styles.sendIcon}>
          <MCIcon color={black200} name="send" size={20}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('close')} style={styles.moreIcon}>
          <MCIcon color={black200} name="bookmark-outline" size={18}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.textCountView}>{message.channelViewsLabel + ' View'}</Text>
      {message.channelSignature.length > 0 &&
      <Text style={styles.textSigniture}>{message.channelSignature}</Text>}
      <Text style={styles.textMessage}>{message.message}</Text>

      <AddonTime createTime={message.createTime}/>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  avatarWrap: {
    width: 50,
    padding: 7,
  },
  layoutheader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    marginLeft: 10,
    flex: 1,
    color: black200,
    fontSize: 18,
  },
  layoutChannelInfo: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  sub1: {
    flexDirection: 'row',
  },
  sub2: {
    flexDirection: 'row',
    marginTop: -4,
    marginBottom: 12,
  },
  textCount: {
    margin: 4,
    color: black200,
  },
  rowField: {
    flexDirection: 'row',
  },
  textCountView: {
    color: black200,
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
    marginTop: -4,
  },
  textSigniture: {
    color: black200,
    fontSize: 14,
    marginTop: -4,
  },
  moreIcon: {
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end',
  },
  textMessage: {
    color: black200,
    fontSize: 16,
    marginTop: 4,
    marginBottom: 4,
  },
  sendIcon: {
    marginLeft: 30,
    flex: 1,
  },
});