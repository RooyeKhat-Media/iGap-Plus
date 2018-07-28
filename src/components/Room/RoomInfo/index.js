import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {Avatar as CircleIcon, Button, Confirm, ListItem, MCIcon, PopupMenu, Switch, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import Avatar from '../../../containers/Unit/Avatar';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import {appTheme} from '../../../themes/default/index';
import {APP_MODAL_ID_SECONDARY} from '../../../constants/app';
import RichTextView from '../../../modules/RichTextView/index';
import {Proto} from '../../../modules/Proto/index';
import RoomStatus from '../../../containers/Unit/RoomStatus';
import {getUserId} from '../../../utils/app';
import Verify from '../../../assets/images/verify';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomInfoComponent extends React.Component {
  render() {
    const {
      intl, room, roomPeer, roomMute, access, countRoomHistory, sendMessage, callUser, leaveRoom, joinRoom, editRoom, actionClick, actions,
      addMember, memberList, notification, updateUsername, revokeLink, clearHistory, deleteRoom, goAvatarList, toggleMute, goBack, callAction, verified,
      isBlock, onActionListPress,
    } = this.props;
    const styles = this.getStyles();

    let description;
    if (room.groupDescription) {
      description = room.groupDescription;
    } else if (room.channelDescription) {
      description = room.channelDescription;
    } else if (roomPeer) {
      description = roomPeer.bio;
    }

    const actionList = [];
    if (roomPeer && roomPeer.id !== getUserId(true)) {
      if (roomPeer.mutual) {
        actionList.push(intl.formatMessage(i18n.roomInfoEditContact));
        actionList.push(intl.formatMessage(isBlock ? i18n.roomInfoUnBlockContact : i18n.roomInfoBlockContact));
        actionList.push(intl.formatMessage(i18n.roomInfoDeleteContact));
      } else {
        actionList.push(intl.formatMessage(isBlock ? i18n.roomInfoUnBlockContact : i18n.roomInfoBlockContact));
      }
    }
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement={roomPeer ? (
            <PopupMenu
              actionList={actionList}
              type={APP_MODAL_ID_SECONDARY}
              onPress={(idx) => {
                onActionListPress(idx, this.confirm);
              }}/>) : null}
          centerElement={
            <View style={styles.rowTitle}>
              <Text numberOfLines={1} style={styles.titleText}>{room.title}</Text>
              {verified && <Verify style={styles.verifyStyle}/>}
            </View>
          }
        />

        <ScrollView style={styles.scroll}>

          <TouchableOpacity style={styles.avatarWrap}>
            <Avatar
              roomId={room.id}
              circle={false}
              onPress={goAvatarList}
              size={360}/>
            <View style={styles.containerJoinLeav}>
              <View style={styles.iconsLayout}>
                {(callAction.voice && access.canCall) &&
                <TouchableOpacity onPress={() => callUser('voice')}>
                  <CircleIcon icon={'phone'} iconSize={25} size={40} iconColor={appTheme.icon}
                    style={styles.circleIcon}/>
                </TouchableOpacity>}
                {(callAction.video && access.canCall) &&
                <TouchableOpacity onPress={() => callUser('video')} style={{marginLeft: 10, marginRight: 10}}>
                  <CircleIcon icon={'videocam'} iconSize={28} size={40} iconColor={appTheme.icon}
                    style={styles.circleIcon}/>
                </TouchableOpacity>}
                {access.canSendMessage &&
                <TouchableOpacity onPress={sendMessage}>
                  <CircleIcon icon={'chat'} iconSize={22} size={40} iconColor={appTheme.icon}
                    style={styles.circleIcon}/>
                </TouchableOpacity>}
              </View>

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
          </TouchableOpacity>

          <View style={styles.sectionWrap}>

            <View style={styles.section}>
              <ListItem
                centerElement={
                  <View style={styles.rowTitle}>
                    <Text numberOfLines={1} style={styles.roomTitle}>{room.title}</Text>
                    {verified && <Verify style={styles.verifyStyle}/>}
                  </View>}/>
              <ListItem
                centerElement={
                  <View style={styles.roomTitleWrap}>
                    <Text style={styles.roomStatus}><RoomStatus roomId={room.id}/></Text>
                  </View>}/>

              {(roomPeer && roomPeer.mutual) && (
                <ListItem
                  centerElement={{
                    primaryText: roomPeer.phone.toString(),
                    secondaryText: intl.formatMessage(i18n.roomInfoPhone),
                  }}
                />
              )}
              {(description) && (<View style={styles.roomDescription}><RichTextView rawText={description}/></View>)}
              {(room.groupPublicUsername || room.channelPublicUsername || (roomPeer && roomPeer.username)) && (
                <ListItem
                  centerElement={{
                    primaryText: '@' + (room.groupPublicUsername || room.channelPublicUsername || (roomPeer && roomPeer.username)),
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
                rightElement={<Switch value={roomMute === Proto.RoomMute.UNMUTE} onValueChange={toggleMute}/>}
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
                      {...i18n.roomInfoClearHistoryConfirmDescription, values: {roomTitle: room.title}},
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
                      {...i18n.roomInfoDeleteRoomConfirmDescription, values: {roomTitle: room.title}},
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
        }} type={APP_MODAL_ID_SECONDARY}/>
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
  roomPeer: PropTypes.object,
  roomMute: PropTypes.number,
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
  toggleMute: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  actionClick: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  callAction: PropTypes.object.isRequired,
  onActionListPress: PropTypes.func.isRequired,
  isBlock: PropTypes.bool.isRequired,
  verified: PropTypes.bool,
};

export default injectIntl(RoomInfoComponent);