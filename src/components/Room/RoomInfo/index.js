import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Button, Confirm, ListItem, MCIcon, Switch, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import Avatar from '../../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';

class RoomInfoComponent extends React.Component {
  render() {
    const {
      intl, room, access, countRoomHistory, sendMessage, callUser, leaveRoom, joinRoom, editRoom, actionClick, actions,
      addMember, memberList, notification, updateUsername, revokeLink, clearHistory, deleteRoom, goBack,
    } = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          rightElement="more-vert"
          onLeftElementPress={goBack}
          centerElement={room.title}/>

        <ScrollView style={styles.scroll}>

          <View style={styles.avatarWrap}>
            <Avatar
              roomId={room.id}
              circle={false}
              size={360}/>
            <View style={styles.containerJoinLeav}>
              {/*Can Send Message to chatPeer Room ?*/}
              {access.canSendMessage &&
              (<Button style={styles.buttonBlue}
                upperCase={false} primary raised accent={false}
                onPress={sendMessage}
                text={intl.formatMessage(i18n.roomInfoChatSendMessageBtn)}/>)}

              {/*Can Call chatPeer Room ?*/}
              {access.canCall &&
              (<Button style={styles.buttonwhite}
                upperCase={false} primary raised accent={false}
                onPress={callUser}
                text={intl.formatMessage(i18n.roomInfoChatCallBtn)}/>)}

              {/*Can Leave Room ?*/}
              {access.canLeaveRoom &&
              (<Button style={styles.buttonLeave}
                upperCase={false} primary raised accent={false}
                onPress={() => {
                  this.confirm.open(
                    i18n.roomInfoLeaveRomConfirmTitle,
                    {...i18n.roomInfoLeaveRomConfirmDescription, values: {roomTitle: room.title}},
                    leaveRoom);
                }}
                text={intl.formatMessage(i18n.roomInfoLeaveRoomBtn)}/>)}

              {/*Can Join Room ?*/}
              {access.canJoinRoom &&
              (<Button style={styles.buttonjoin}
                upperCase={false} primary raised accent={false}
                onPress={joinRoom}
                text={intl.formatMessage(i18n.roomInfoJoinRoomBtn)}/>)}

              {/*Can Edit Room ?*/}
              {access.canEditRoom &&
              (<Button style={styles.buttonwhite}
                upperCase={false} primary raised accent={false}
                onPress={editRoom}
                text={intl.formatMessage(i18n.roomInfoEditRoomBtn)}/>)}
            </View>
          </View>

          <View style={styles.sectionWrap}>

            <View style={styles.section}>
              <ListItem
                centerElement={{
                  primaryText: room.title,
                  secondaryText: '2 days ago - (Not Implemented)',
                }}
              />
              {(room.groupPublicUsername || room.channelPublicUsername || (room.chatPeer && room.chatPeer.username)) && (
                <ListItem
                  centerElement={{
                    primaryText: '@' + (room.groupPublicUsername || room.channelPublicUsername || (room.chatPeer && room.chatPeer.username)),
                    secondaryText: intl.formatMessage(i18n.roomInfoUsername),
                  }}
                />
              )}
            </View>

            <View style={styles.section}>
              {access.canAddMember && (
                <ListItem
                  leftElement="person-add"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoAddMember),
                  }}
                  onPress={addMember}
                  style={styles.listItem}
                />
              )}

              {access.canViewMemberList && (
                <ListItem
                  leftElement="list"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoMemberList),
                  }}
                  onPress={memberList}
                  style={styles.listItem}
                />
              )}

              <ListItem
                leftElement="notifications"
                centerElement={{
                  primaryText: intl.formatMessage(i18n.roomInfoMuteNotifications),
                }}
                rightElement={<Switch/>}
                onPress={notification}
                style={styles.listItem}
              />

              {access.canChangeUsername && (
                <ListItem
                  leftElement="settings-input-component"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoConvertType),
                  }}
                  onPress={updateUsername}
                  style={styles.listItem}
                />
              )}

              {access.canRevokeInviteLink && (
                <ListItem
                  leftElement="link"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoInviteLink),
                  }}
                  onPress={revokeLink}
                  style={styles.listItem}
                />
              )}

              {access.canClearHistory && (
                <ListItem
                  leftElement="clear-all"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoClearHistory),
                  }}
                  onPress={() => {
                    this.confirm.open(
                      i18n.roomInfoClearHistoryConfirmTitle,
                      {...i18n.roomInfoClearHistoryConfirmDescription, values: {rooTitle: room.title}},
                      clearHistory);
                  }}
                  style={styles.listItem}
                />
              )}

              {access.canDeleteRoom && (
                <ListItem
                  leftElement="delete-forever"
                  centerElement={{
                    primaryText: intl.formatMessage(i18n.roomInfoDeleteRoom),
                  }}
                  onPress={() => {
                    this.confirm.open(
                      i18n.roomInfoDeleteRoomConfirmTitle,
                      {...i18n.roomInfoDeleteRoomConfirmDescription, values: {rooTitle: room.title}},
                      deleteRoom);
                  }}
                  style={styles.listItem}
                />
              )}
            </View>

            {countRoomHistory && <View style={styles.sectionShearedMedia}>
              <View style={styles.layoutMuteNotificaion}>
                <Text style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedMedia)}</Text>
                <View style={styles.divider}/>
              </View>
              <View style={styles.rowField}>

                <TouchableOpacity
                  style={styles.sharedItem}
                  onPress={() => actionClick(actions.image)}>
                  <MCIcon
                    name="image"
                    style={styles.sharedIcon}
                    size={24}/>
                  <Text
                    style={styles.textSharedMedia}>
                    {intl.formatMessage(i18n.roomInfoSharedImages) + ' ' + (countRoomHistory.image + countRoomHistory.gif)}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.sharedItem}
                  onPress={() => actionClick(actions.video)}>
                  <MCIcon
                    name="camcorder"
                    style={styles.sharedIcon}
                    size={24}/>
                  <Text
                    style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedVideos) + ' ' + countRoomHistory.video}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.sharedItem} onPress={() => actionClick(actions.audio)}>
                  <MCIcon
                    name="itunes"
                    style={styles.sharedIcon}
                    size={24}/>
                  <Text
                    style={styles.textSharedMedia}>
                    {intl.formatMessage(i18n.roomInfoSharedAudios) + ' ' + countRoomHistory.audio}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.rowField}>
                <TouchableOpacity
                  style={styles.sharedItem}
                  onPress={() => actionClick(actions.voice)}>
                  <MCIcon
                    name="microphone-outline"
                    style={styles.sharedIcon}
                    size={24}/>
                  <Text
                    style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedVoices) + ' ' + countRoomHistory.voice}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sharedItem} onPress={() => actionClick(actions.file)}>
                  <MCIcon name="file" style={styles.sharedIcon} size={24}/>
                  <Text
                    style={styles.textSharedMedia}>
                    {intl.formatMessage(i18n.roomInfoSharedFiles) + ' ' + countRoomHistory.file}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sharedItem}
                  onPress={() => actionClick(actions.link)}>
                  <MCIcon
                    name="link-variant"
                    style={styles.sharedIcon}
                    size={24}/>
                  <Text
                    style={styles.textSharedMedia}>{intl.formatMessage(i18n.roomInfoSharedLinks) + ' ' + countRoomHistory.url}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>}
          </View>

        </ScrollView>

        <Confirm control={(confirm) => {
          this.confirm = confirm;
        }}/>
      </View>
    );
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };
}

RoomInfoComponent.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
  access: PropTypes.object,
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