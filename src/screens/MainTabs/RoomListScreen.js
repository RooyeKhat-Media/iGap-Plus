import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import {getRoomList} from '../../selector/messenger/room';
import RoomListComponent from '../../components/MainTabs/RoomList';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {initialRoomsState} from '../../modules/Messenger/Rooms/index';
import {
  ChannelDelete,
  ChannelLeft,
  ChatClearMessage,
  ChatDelete,
  ClientMuteRoom,
  ClientPinRoom,
  GroupClearMessage,
  GroupDelete,
  GroupLeft,
  Proto,
} from '../../modules/Proto/index';
import i18n from '../../i18n';
import Api from '../../modules/Api/index';
import {
  CHANNEL_DELETE,
  CHANNEL_LEFT,
  CHAT_CLEAR_MESSAGE,
  CHAT_DELETE,
  CLIENT_MUTE_ROOM,
  CLIENT_PIN_ROOM,
  GROUP_CLEAR_MESSAGE,
  GROUP_DELETE,
  GROUP_LEFT,
} from '../../constants/methods/index';
import Long from 'long';

class RoomListScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      room: null,
      access: {
        canLeaveRoom: false,
        canClearHistory: false,
        canDeleteRoom: false,
      },
    };
  }

  async componentDidMount() {
    await initialRoomsState();
  }

  onPressRoomListComponent = (room) => {
    goRoomHistory(room.id);
  };

  onLongPress = (room) => {
    const isChat = room.type === Proto.Room.Type.CHAT;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    const isChannel = room.type === Proto.Room.Type.CHANNEL;
    const isPrivate = (isGroup && room.groupType === Proto.GroupRoom.Type.PRIVATE_ROOM) || (isChannel && room.channelType === Proto.ChannelRoom.Type.PRIVATE_ROOM);
    const isOwner = ((isGroup && room.groupRole === Proto.GroupRoom.Role.OWNER) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.OWNER));

    const access = {
      canLeaveRoom: room.isParticipant && !isChat && (isPrivate || !isOwner),
      canClearHistory: room.isParticipant && (isChat || (isGroup && isPrivate)),
      canDeleteRoom: isOwner || isChat,
    };
    this.setState({
      room,
      access,
    }, () => {
      this.actionSheet.open(this.getActionList(room, access));
    });
  };

  getActionList = (room, access) => {
    const actions = [];
    const {intl} = this.props;
    actions.push({
      icon: room.pinId !== '0' ? 'bookmark' : 'bookmark-border',
      title: intl.formatMessage(room.pinId !== '0' ? i18n.roomListActionUnpinRoom : i18n.roomListActionPinRoom),
      onPress: this.togglePin,
    });
    actions.push({
      icon: room.roomMute === Proto.RoomMute.MUTE ? 'notifications-active' : 'notifications',
      title: intl.formatMessage(room.roomMute === Proto.RoomMute.MUTE ? i18n.roomListActionUnMuteNotification : i18n.roomListActionMuteNotification),
      onPress: this.toggleMute,
    });

    if (access.canClearHistory) {
      actions.push({
        icon: 'clear-all',
        title: intl.formatMessage(i18n.roomListActionClearHistory),
        onPress: this.clearHistory,
      });
    }
    if (access.canLeaveRoom) {
      actions.push({
        icon: 'subdirectory-arrow-left',
        title: intl.formatMessage(i18n.roomListActionLeaveRoom),
        onPress: this.leaveRoom,
      });
    }
    if (access.canDeleteRoom) {
      actions.push({
        icon: 'delete',
        title: intl.formatMessage(i18n.roomListActionDeleteRoom),
        onPress: this.deleteRoom,
      });
    }

    return actions;
  };

  togglePin = () => {
    const {room} = this.state;

    const clientPinRoom = new ClientPinRoom();
    clientPinRoom.setRoomId(room.longId);
    clientPinRoom.setPin(room.pinId === '0');

    return Api.invoke(CLIENT_PIN_ROOM, clientPinRoom);
  };

  toggleMute = () => {
    const {room} = this.state;
    const clientMuteRoom = new ClientMuteRoom();
    clientMuteRoom.setRoomId(room.longId);
    clientMuteRoom.setRoomMute(room.roomMute === Proto.RoomMute.UNMUTE ? Proto.RoomMute.MUTE : Proto.RoomMute.UNMUTE);

    return Api.invoke(CLIENT_MUTE_ROOM, clientMuteRoom);
  };

  leaveRoom = async () => {
    const {room} = this.state;
    this.confirm.open(
      i18n.roomInfoLeaveRomConfirmTitle,
      {...i18n.roomInfoLeaveRomConfirmDescription, values: {roomTitle: room.title}},
      () => {
        const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_LEFT : CHANNEL_LEFT;
        const proto = new (room.type === Proto.Room.Type.GROUP ? GroupLeft : ChannelLeft)();
        proto.setRoomId(room.longId);
        return Api.invoke(actionId, proto);
      });
  };

  clearHistory = async () => {
    const {room} = this.state;
    let actionId, proto;
    this.confirm.open(
      i18n.roomInfoClearHistoryConfirmTitle,
      {...i18n.roomInfoClearHistoryConfirmDescription, values: {roomTitle: room.title}},
      () => {
        switch (room.type) {
          case Proto.Room.Type.CHAT:
            actionId = CHAT_CLEAR_MESSAGE;
            proto = ChatClearMessage;
            break;
          case Proto.Room.Type.GROUP:
            actionId = GROUP_CLEAR_MESSAGE;
            proto = GroupClearMessage;
            break;
        }
        if (actionId && proto) {
          proto = new proto();
          proto.setRoomId(room.longId);
          proto.setClearId(Long.fromString(room.lastMessage));
          Api.invoke(actionId, proto);
        }
      });
  };
  deleteRoom = async () => {
    const {room} = this.state;
    let actionId, proto;
    this.confirm.open(
      i18n.roomInfoDeleteRoomConfirmTitle,
      {...i18n.roomInfoDeleteRoomConfirmDescription, values: {roomTitle: room.title}},
      () => {
        switch (room.type) {
          case Proto.Room.Type.CHAT:
            actionId = CHAT_DELETE;
            proto = ChatDelete;
            break;
          case Proto.Room.Type.GROUP:
            actionId = GROUP_DELETE;
            proto = GroupDelete;
            break;
          case Proto.Room.Type.CHANNEL:
            actionId = CHANNEL_DELETE;
            proto = ChannelDelete;
            break;
        }
        if (actionId && proto) {
          proto = new proto();
          proto.setRoomId(room.longId);
          return Api.invoke(actionId, proto);
        }
      });
  };

  actionSheetControl = (action) => {
    this.actionSheet = action;
  };

  confirmControl = (control) => {
    this.confirm = control;
  };

  render() {
    const {roomList, clientUpdating} = this.props;
    return (
      <RoomListComponent
        roomList={roomList}
        clientUpdating={clientUpdating}
        onLongPress={this.onLongPress}
        confirmControl={this.confirmControl}
        actionSheetControl={this.actionSheetControl}
        onPress={this.onPressRoomListComponent}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state) => {
    return {
      roomList: getRoomList(state),
      clientUpdating: state.clientUpdating,
    };
  };
};

RoomListScreen.propTypes = {
  intl: intlShape.isRequired,
};
export default connect(
  makeMapStateToProps,
)(injectIntl(RoomListScreen));