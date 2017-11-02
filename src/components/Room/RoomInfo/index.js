import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {FormattedRelative, injectIntl, intlShape} from 'react-intl';
import {Button, MCIcon, Switch, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import Avatar from '../../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import {goRoomEdit} from '../../../navigators/PrimaryNavigator';


class RoomInfoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMute: false,
      canChangeMute: true,
    };
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  changeMute = () => {
    const {actionClick, actions} = this.props;
    actionClick(actions.mute);
    this.setState({isMute: !this.state.isMute, canChangeMute: false});
  };

  render() {
    const {intl, goBack, room, countRoomHistory, actionClick, actions} = this.props;
    const styles = this.getStyles();
    const isUser = !!room.chatPeer;
    const isGroup = room.type === 1;
    if (this.state.canChangeMute) {
      this.state.isMute = room.chatPeer ? room.chatPeer.mutual : false;
    }

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="more-vert"
          onLeftElementPress={goBack}
          onRightElementPress={() => alert('menu')}
          centerElement={intl.formatMessage(i18n.roomInfoDetails)}/>

        {room && <ScrollView style={styles.scroll}>
          <View style={styles.sectionTop}>
            <View style={styles.avatar}>
              <Avatar roomId={!room.chatPeer ? room.id : null} userId={room.chatPeer ? room.chatPeer.id : null}
                size={200}/>
            </View>

            <View style={styles.containerJoinLeav}>

              <Button style={styles.buttonLeave}
                upperCase={false} primary raised accent={false}
                onPress={() => goRoomEdit(room.id)}
                text={intl.formatMessage(i18n.roomEditBtnTitle)}/>

              {!isUser && room.isParticipant && <Button style={styles.buttonLeave}
                upperCase={false} primary raised accent={false}
                onPress={() => actionClick(actions.leave)}
                text={intl.formatMessage(i18n.roomInfoLeave)}/>}

              {!isUser && !room.isParticipant && <Button style={styles.buttonjoin}
                upperCase={false} primary raised accent={false}
                onPress={() => actionClick(actions.join)}
                text={intl.formatMessage(i18n.roomInfoJoin)}/>}

              {isUser && <Button style={styles.buttonBlue}
                upperCase={false} primary raised accent={false}
                onPress={() => actionClick(actions.message)}
                text={intl.formatMessage(i18n.roomInfoMessage)}/>}

              {isUser && <Button style={styles.buttonwhite}
                upperCase={false} primary raised accent={false}
                onPress={() => actionClick(actions.call)}
                text={intl.formatMessage(i18n.roomInfoCall)}/>}

            </View>

          </View>
          <View style={styles.sectionMiddle}>
            <Text style={styles.textTitle}>{room.title}</Text>
            <Text style={styles.textSub}>{isUser ? <FormattedRelative value={room.chatPeer.lastSeen * 1000}/> :
              (isGroup ? room.groupParticipantsCount : room.channelParticipantsCount) + ' ' + intl.formatMessage(i18n.roomInfoMember)}</Text>
            <Text
              style={styles.textInfo}>{isUser ? room.chatPeer.phone.toString() : (isGroup ? room.groupDescription : room.channelDescription)}</Text>
            <Text
              style={[styles.textInfo, {marginTop: 7}]}>{isUser ? room.chatPeer.username : (isGroup ? room.groupProvateInviteLink : room.channelPublicUsername)}</Text>
            <Text style={styles.textSub}>{intl.formatMessage(i18n.roomInfoUsername)}</Text>
            <View style={styles.layoutMuteNotificaion}>
              <Text style={[styles.textInfo, {flex: 1}]}>{intl.formatMessage(i18n.roomInfoMuteNotifications)}</Text>
              <Switch value={this.state.isMute} onValueChange={this.changeMute}/>
            </View>
          </View>
          {countRoomHistory && <View style={styles.sectionShearedMedia}>
            <View style={styles.layoutMuteNotificaion}>
              <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedMedia)}</Text>
              <View style={styles.divider}/>
            </View>
            <View style={styles.rowField}>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.image)}>
                <MCIcon name="image" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedImages) + ' ' + (countRoomHistory.image + countRoomHistory.gif)}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.video)}>
                <MCIcon name="camcorder" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedVideos) + ' ' + countRoomHistory.video}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.audio)}>
                <MCIcon name="itunes" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedAudios) + ' ' + countRoomHistory.audio}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowField}>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.voice)}>
                <MCIcon name="microphone-outline" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedVoices) + ' ' + countRoomHistory.voice}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.file)}>
                <MCIcon name="file" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedFiles) + ' ' + countRoomHistory.file}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.link)}>
                <MCIcon name="link-variant" style={styles.sharedIcon} size={24}/>
                <Text
                  style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedLinks) + ' ' + countRoomHistory.url}</Text>
              </TouchableOpacity>
            </View>
          </View>}
        </ScrollView>}
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
  actionClick: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

export default injectIntl(RoomInfoComponent);