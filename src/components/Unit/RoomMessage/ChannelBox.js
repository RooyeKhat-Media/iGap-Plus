import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MessageBox from './MessageBox/index';
import {MCIcon} from '../../BaseUI';
import {black200} from '../../../themes/default/index';
import Avatar from '../../../containers/Unit/Avatar';
import AddonTime from './MessageBox/AddonTime';
import {channelStyle as styles} from './index.styles';

export default ({message, showText, onMessagePress, onMessageLongPress}) => (
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

    <MessageBox message={message} showText={showText}
      onMessagePress={onMessagePress}
      onMessageLongPress={onMessageLongPress}/>

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

      {(message.channelSignature) ?
        (<Text style={styles.textSigniture}>{message.channelSignature}</Text>) : null}

      <Text style={styles.textMessage}>{message.message}</Text>

      <AddonTime createTime={message.createTime}/>

    </View>
  </View>
);