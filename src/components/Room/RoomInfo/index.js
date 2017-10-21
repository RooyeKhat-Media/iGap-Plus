import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {injectIntl, intlShape, FormattedRelative} from 'react-intl';
import { Toolbar, Button, MCIcon} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import Avatar from '../../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';

const sharedList = {image:'image', video:'video', audio:'audio', voice:'voice', file:'file', link:'link'};

class RoomInfoComponent extends React.Component {

    getStyles = () => {
      return MemoizeResponsiveStyleSheet(styleSheet);
    };

    onLeaveClick = () => {
      alert('onLeaveClick');
    };

    onJoinClick = () => {
      alert('onJoinClick');
    };

    onCallClick = () => {
      alert('onCallClick');
    };

    onMessageClick = () => {
      alert('onMessageClick');
    };

    onNotificationClick = () => {
      alert('onNotificationClick');
    };

    showSharedMediaList = (selectionType) => {
      switch (selectionType) {
        case sharedList.image:
          alert('Images');
          break;
        case sharedList.video:
          alert('video');
          break;
        case sharedList.audio:
          alert('audio');
          break;
        case sharedList.voice:
          alert('voice');
          break;
        case sharedList.file:
          alert('file');
          break;
        case sharedList.link:
          alert('link');
          break;
      }
    };

    render() {
      const {intl, goBack, room, countRoomHistory} = this.props;
      const styles = this.getStyles();
      const isUser = !!room.chatPeer;
      const isGroup = room.type === 1;
      const isMutual = room.chatPeer ? room.chatPeer.mutual : false;

      return (
        <View style={styles.container}>
          <Toolbar
            leftElement="arrow-back"
            rightElement="more-vert"
            onLeftElementPress={goBack}
            onRightElementPress={() => alert('menu')}
            centerElement={intl.formatMessage(i18n.roomInfoDetails)}/>

          { room && <ScrollView style={styles.scroll}>
            <View style={styles.sectionTop} >
              <View style={styles.avatar}>
                <Avatar roomId={!room.chatPeer ? room.id : null} userId={room.chatPeer ? room.chatPeer.id : null} size={200}/>
              </View>

              <View  style={styles.containerJoinLeav}>
                {!isUser && room.isParticipant && <Button style={styles.buttonLeave}
                  upperCase={false} primary raised accent={false}
                  onPress={this.onLeaveClick}
                  text={intl.formatMessage(i18n.roomInfoLeave)}/>}
                {!isUser && !room.isParticipant && <Button style={styles.buttonjoin}
                  upperCase={false} primary raised accent={false}
                  onPress={this.onJoinClick}
                  text={intl.formatMessage(i18n.roomInfoJoin)}/>}
                {isUser && <Button style={styles.buttonBlue}
                  upperCase={false} primary raised accent={false}
                  onPress={this.onMessageClick}
                  text={intl.formatMessage(i18n.roomInfoMessage)}/>}
                {isUser &&  <Button style={styles.buttonwhite}
                  upperCase={false} primary raised accent={false}
                  onPress={this.onCallClick}
                  text={intl.formatMessage(i18n.roomInfoCall)}/>}
              </View>

            </View>
            <View style={styles.sectionMiddle}>
              <Text  style={styles.textTitle} >{room.title}</Text>
              <Text  style={styles.textSub} >{isUser ? <FormattedRelative value={ room.chatPeer.lastSeen * 1000}/>  :
                (isGroup ? room.groupParticipantsCount : room.channelParticipantsCount) + ' ' + intl.formatMessage(i18n.roomInfoMember)}</Text>
              <Text  style={styles.textInfo } >{isUser ? room.chatPeer.phone.toString() : (isGroup ? room.groupDescription : room.channelDescription)}</Text>
              <Text  style={[styles.textInfo, {marginTop:7}]} >{isUser ? room.chatPeer.username : (isGroup ? room.groupProvateInviteLink : room.channelPublicUsername)}</Text>
              <Text  style={styles.textSub} >{intl.formatMessage(i18n.roomInfoUsername)}</Text>
              <View  style={styles.layoutMuteNotificaion}>
                <Text  style={[styles.textInfo, {flex:1}]} >{intl.formatMessage(i18n.roomInfoMuteNotifications)}</Text>
                <Switch  value={isMutual}  onValueChange={this.onNotificationClick} />
              </View>
            </View>
            {countRoomHistory && <View style={styles.sectionShearedMedia}>
              <View  style={styles.layoutMuteNotificaion}>
                <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedMedia)}</Text>
                <View   style={styles.divider}/>
              </View>
              <View style={styles.rowField}>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.image) }>
                  <MCIcon name="image" style={styles.sharedIcon} size={24}/>
                  <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedImages) + ' ' + (countRoomHistory.image + countRoomHistory.gif) }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.video)}>
                  <MCIcon name="camcorder" style={styles.sharedIcon} size={24}/>
                  <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedVideos) + ' ' + countRoomHistory.video }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.audio)}>
                  <MCIcon name="itunes" style={styles.sharedIcon} size={24}/>
                  <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedAudios) + ' ' + countRoomHistory.audio }</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowField}>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.voice)}>
                  <MCIcon name="microphone-outline" style={styles.sharedIcon}  size={24}/>
                  <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedVoices) + ' ' + countRoomHistory.voice }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.file)}>
                  <MCIcon name="file" style={styles.sharedIcon}  size={24}/>
                  <Text  style={styles.textSharedMedia} >{intl.formatMessage(i18n.roomInfoSharedFiles) + ' ' + countRoomHistory.file }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharedItem} onPress={ () => this.showSharedMediaList(sharedList.link)}>
                  <MCIcon name="link-variant" style={styles.sharedIcon}  size={24} />
                  <Text  style={styles.textSharedMedia}   >{intl.formatMessage(i18n.roomInfoSharedLinks) + ' ' + countRoomHistory.url }</Text>
                </TouchableOpacity>
              </View>
            </View> }
          </ScrollView> }
        </View>
      );
    }
}

RoomInfoComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
  countRoomHistory: PropTypes.shape({
    media: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    video: PropTypes.number.isRequired,
    audio: PropTypes.number.isRequired,
    voice: PropTypes.number.isRequired,
    gif: PropTypes.number.isRequired,
    file: PropTypes.number.isRequired,
    url: PropTypes.number.isRequired,
  }),
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomInfoComponent);