import React, {Component} from 'react';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import {getRoomList} from '../../selector/messenger/room';
import RoomListComponent from '../../components/MainTabs/RoomList';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {initialRoomsState} from '../../modules/Messenger/Rooms/index';
import {Proto} from '../../modules/Proto/index';
import room from '../../schemas/room';
import i18n from '../../i18n';

class RoomListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      room: null,
      access: {
        canLeaveRoom: false,
        canClearHistory: false,
        canDeleteRoom: false,
      },
      actions: [],
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
      room: room,
      access,
      actions: this.getActionList(access),
    }, () => {
      this.actionSheet.open();
    });
  };

  getActionList = (access) => {
    const actions = [];
    const {intl} = this.props;

    actions.push({
      icon: room.pinId ? 'bookmark' : 'bookmark-border',
      title: intl.formatMessage(room.pinId ? i18n.roomListActionUnpinRoom : i18n.roomListActionPinRoom),
      onPress: this.togglePin,
    });
    actions.push({
      icon: room.roomMute === Proto.RoomMute.UNMUTE ? 'notifications-active' : 'notifications',
      title: intl.formatMessage(room.roomMute === Proto.RoomMute.UNMUTE ? i18n.roomListActionUnMuteNotification : i18n.roomListActionMuteNotification),
      onPress: this.togglePin,
    });

    if (access.canClearHistory) {
      actions.push({
        icon: 'clear-all',
        title: intl.formatMessage(i18n.roomListActionClearHistory),
        onPress: this.togglePin,
      });
    }
    if (access.canLeaveRoom) {
      actions.push({
        icon: 'subdirectory-arrow-left',
        title: intl.formatMessage(i18n.roomListActionLeaveRoom),
        onPress: this.togglePin,
      });
    }
    if (access.canDeleteRoom) {
      actions.push({
        icon: 'delete',
        title: intl.formatMessage(i18n.roomListActionDeleteRoom),
        onPress: this.togglePin,
      });
    }

    return actions;
  };

  togglePin = () => {

  };

  actionSheetControl = (action) => {
    this.actionSheet = action;
  };

  render() {
    const {roomList} = this.props;
    const {actions} = this.state;
    return (
      <RoomListComponent
        roomList={roomList}
        actions={actions}
        onLongPress={this.onLongPress}
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
    };
  };
};

RoomListScreen.propTypes = {
  intl: intlShape.isRequired,
};
export default connect(
  makeMapStateToProps,
)(injectIntl(RoomListScreen));