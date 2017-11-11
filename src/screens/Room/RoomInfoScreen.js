import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RoomViewComponent from '../../components/Room/RoomInfo';
import {getRoom} from '../../selector/entities/room';
import {connect} from 'react-redux';
import putState from '../../modules/Entities/Rooms/index';
import {
  ChannelAddMember,
  ChannelDelete,
  ChannelLeft,
  ChatDelete,
  ClientCountRoomHistory,
  ClientJoinByUsername,
  GroupAddMember,
  GroupDelete,
  GroupLeft,
  Proto,
} from '../../modules/Proto/index';
import {
  CHANNEL_ADD_MEMBER,
  CHANNEL_DELETE,
  CHANNEL_LEFT,
  CHAT_CLEAR_MESSAGE,
  CHAT_DELETE,
  CLIENT_COUNT_ROOM_HISTORY,
  CLIENT_JOIN_BY_USERNAME,
  GROUP_ADD_MEMBER,
  GROUP_CLEAR_MESSAGE,
  GROUP_DELETE,
  GROUP_LEFT,
} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {getCountRoomHistory} from '../../selector/methods/client/index';
import {goContactPicker, goRoomEdit, goRoomHistory, goRoomMemberList} from '../../navigators/SecondaryNavigator';
import i18n from '../../i18n/en';
import {secondaryNavigatorBack} from '../../actions/navigator';
import {resetSecondaryNavigation} from '../../navigators/index';
import {goRoomUpdateUsername} from '../../navigators/PrimaryNavigator';

const actions = {
  image: 'image', video: 'video', audio: 'audio', voice: 'voice', file: 'file', link: 'link',
  leave: 'leave', join: 'join', call: 'call', message: 'message', mute: 'mute',
};

class RoomInfoScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      access: {
        canSendMessage: false,
        canCall: false,
        canJoinRoom: false,
        canLeaveRoom: false,
        canEditRoom: false,
        canAddMember: false,
        canViewMemberList: false,
        canRevokeInviteLink: false,
        canConvertToPublic: false,
        canConvertToPimary: false,
        canChangeUsername: false,
        canClearHistory: false,
        canDeleteRoom: false,
      },
    };
  }

  async componentDidMount() {
    const {roomId} = this.props.navigation.state.params;
    await putState(roomId);
    const {room} = this.props;
    this.setRoomActionsAccess();
    const clientCountRoomHistory = new ClientCountRoomHistory();
    clientCountRoomHistory.setRoomId(room.longId);
    await Api.invoke(CLIENT_COUNT_ROOM_HISTORY, clientCountRoomHistory);
  }

  componentWillReceiveProps() {
    this.setRoomActionsAccess();
  }

  setRoomActionsAccess = () => {
    const {room} = this.props;
    const isChat = room.type === Proto.Room.Type.CHAT;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    const isChannel = room.type === Proto.Room.Type.CHANNEL;
    const isPublic = (isGroup && room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM) || (isChannel && room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM);
    const isPrivate = (isGroup && room.groupType === Proto.GroupRoom.Type.PRIVATE_ROOM) || (isChannel && room.channelType === Proto.ChannelRoom.Type.PRIVATE_ROOM);

    const isOwner = ((isGroup && room.groupRole === Proto.GroupRoom.Role.OWNER) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.OWNER));
    const isAdmin = ((isGroup && room.groupRole === Proto.GroupRoom.Role.ADMIN) || (isChannel && room.channelRole === Proto.ChannelRoom.Role.ADMIN));

    this.setState({
      access: {
        isChat: isChat,
        isGroup: isGroup,
        isChannel: isChannel,
        isPublic: isPublic,
        isPrivate: isPrivate,
        isOwner: isOwner,
        isAdmin: isAdmin,
        canSendMessage: isChat,
        canCall: isChat,
        canJoinRoom: !room.isParticipant && isPublic,
        canLeaveRoom: room.isParticipant && !isChat && (isPrivate || !isOwner),
        canEditRoom: isOwner || isAdmin,
        canAddMember: isOwner || isAdmin || isGroup || isChat,
        canViewMemberList: (isOwner || isAdmin || (isGroup && isPrivate)),
        canRevokeInviteLink: isOwner && isPrivate,
        canChangeUsername: isOwner,
        canClearHistory: room.isParticipant && (isChat || (isGroup && isPrivate)),
        canDeleteRoom: isOwner || isChat,
      },
    });
  }

  actionClick = () => {
  };

  joinRoom = async () => {
    const {room} = this.props;
    const clientJoinByUsername = new ClientJoinByUsername();
    clientJoinByUsername.setUsername(room.username);
    await Api.invoke(CLIENT_JOIN_BY_USERNAME, clientJoinByUsername);
  };

  leaveRoom = async () => {
    const {room} = this.props;
    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_LEFT : CHANNEL_LEFT;
    const proto = new (room.type === Proto.Room.Type.GROUP ? GroupLeft : ChannelLeft)();
    proto.setRoomId(room.longId);
    await Api.invoke(actionId, proto);
  };

  editRoom = () => {
    const {room} = this.props;
    goRoomEdit(room.id);
  }

  sendMessage = () => {
    const {room} = this.props;
    goRoomHistory(room.id);
  }

  callUser = () => {
  }

  memberList = () => {
    const {room} = this.props;
    goRoomMemberList(room.id);
  }

  addMember = () => {
    const {room} = this.props;
    const {access} = this.state;
    goContactPicker(i18n.roomInfoAddMemberToolbarTitle, async (contacts) => {
      const promiseList = [];
      contacts.forEach(function(userId) {
        const addMemberActionId = access.isGroup ? GROUP_ADD_MEMBER : CHANNEL_ADD_MEMBER;
        const addMemberProto = access.isGroup ? GroupAddMember : ChannelAddMember;

        const member = new addMemberProto.Member();
        member.setUserId(userId);

        const roomAddMember = new addMemberProto();
        roomAddMember.setRoomId(room.longId);
        roomAddMember.setMember(member);
        promiseList.push(Api.invoke(addMemberActionId, roomAddMember));
      });
      try {
        await Promise.all(promiseList);
      } finally {
        this.props.navigation.dispatch(secondaryNavigatorBack());
      }
    }, true);
  };
  notification = () => {
  };
  updateUsername = () => {
    const {room} = this.props;
    goRoomUpdateUsername(room.id);
  };
  revokeLink = () => {

  };
  clearHistory = async () => {
    const {room} = this.props;
    let actionId, proto;
    switch (room.type) {
      case Proto.Room.Type.CHAT:
        actionId = CHAT_CLEAR_MESSAGE;
        proto = ChatDelete;
        break;
      case Proto.Room.Type.GROUP:
        actionId = GROUP_CLEAR_MESSAGE;
        proto = GroupDelete;
        break;
    }
    if (actionId && proto) {
      proto = new proto();
      proto.setRoomId(room.longId);
      await Api.invoke(actionId, proto);
      this.props.navigation.goBack();
    }
  };
  deleteRoom = async () => {
    const {room} = this.props;
    let actionId, proto;
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
      await Api.invoke(actionId, proto);
      resetSecondaryNavigation();
    }
  };

  render() {
    const {access} = this.state;
    const {room, countRoomHistory} = this.props;
    if (!room) {
      return null;
    }

    return (
      <RoomViewComponent
        room={room}
        access={access}
        actions={actions}
        actionClick={this.actionClick}
        countRoomHistory={countRoomHistory}
        joinRoom={this.joinRoom}
        leaveRoom={this.leaveRoom}
        editRoom={this.editRoom}
        sendMessage={this.sendMessage}
        callUser={this.callUser}
        addMember={this.addMember}
        memberList={this.memberList}
        notification={this.notification}
        updateUsername={this.updateUsername}
        revokeLink={this.revokeLink}
        clearHistory={this.clearHistory}
        deleteRoom={this.deleteRoom}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

RoomInfoScreen.propTypes = {
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
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      countRoomHistory: getCountRoomHistory(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomInfoScreen);