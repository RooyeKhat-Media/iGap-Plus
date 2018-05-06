import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RoomViewComponent from '../../components/Room/RoomInfo';
import {getRoom, getRoomPeer} from '../../selector/entities/room';
import {connect} from 'react-redux';
import putState, {apiInvoke} from '../../modules/Entities/Rooms/index';
import {
  ChannelAddMember,
  ChannelDelete,
  ChannelLeft,
  ChatClearMessage,
  ChatDelete,
  ClientCountRoomHistory,
  ClientJoinByUsername, ClientMuteRoom,
  GroupAddMember,
  GroupClearMessage,
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
  CLIENT_JOIN_BY_USERNAME, CLIENT_MUTE_ROOM,
  GROUP_ADD_MEMBER,
  GROUP_CLEAR_MESSAGE,
  GROUP_DELETE,
  GROUP_LEFT,
} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {getCountRoomHistory} from '../../selector/methods/client/index';
import {
  goAvatarList,
  goCall,
  goContactPicker,
  goRoomEdit,
  goRoomHistory,
  goRoomInviteLink,
  goRoomMemberList,
  goRoomUpdateUsername,
} from '../../navigators/SecondaryNavigator';
import i18n from '../../i18n/en';
import {resetSecondaryNavigation} from '../../navigators/index';
import Long from 'long';
import {getCallPermission} from '../../selector/methods/signaling/callPermissin';
import {getUserId} from '../../utils/app';
import {dispatchMessengerRoomAddList} from '../../utils/messenger';

const actions = {
  image: 'image', video: 'video', audio: 'audio', voice: 'voice', file: 'file', link: 'link',
  leave: 'leave', join: 'join', call: 'call', message: 'message', mute: 'mute',
};

class RoomInfoScreen extends Component {

  constructor(props) {
    super(props);
    const {room} = this.props;
    this.state = {
      roomMute: room.roomMute,
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
    this.setRoomActionsAccess(this.props);
    const clientCountRoomHistory = new ClientCountRoomHistory();
    clientCountRoomHistory.setRoomId(room.longId);
    await Api.invoke(CLIENT_COUNT_ROOM_HISTORY, clientCountRoomHistory);
  }

  componentWillReceiveProps(nextProps) {
    this.setRoomActionsAccess(nextProps);
  }

  setRoomActionsAccess = (props) => {
    const {room, roomPeer} = props;
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
        canCall: isChat && roomPeer.id !== getUserId(true),
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
  };

  actionClick = () => {
  };

  joinRoom = async () => {
    const {room} = this.props;
    const clientJoinByUsername = new ClientJoinByUsername();
    clientJoinByUsername.setUsername(room.groupPublicUsername || room.channelPublicUsername);
    await Api.invoke(CLIENT_JOIN_BY_USERNAME, clientJoinByUsername);
    await apiInvoke(room.id);
    dispatchMessengerRoomAddList(room.id);
  };

  leaveRoom = async () => {
    const {room} = this.props;
    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_LEFT : CHANNEL_LEFT;
    const proto = new (room.type === Proto.Room.Type.GROUP ? GroupLeft : ChannelLeft)();
    proto.setRoomId(room.longId);
    await Api.invoke(actionId, proto);
    resetSecondaryNavigation();
  };

  editRoom = () => {
    const {room} = this.props;
    goRoomEdit(room.id);
  };

  sendMessage = () => {
    const {room} = this.props;
    goRoomHistory(room.id);
  };

  callUser = (callType) => {
    const {roomPeer} = this.props;
    switch (callType) {
      case 'voice':
        goCall(roomPeer.id, false, Proto.SignalingOffer.Type.VOICE_CALLING);
        break;
      case 'video':
        goCall(roomPeer.id, false, Proto.SignalingOffer.Type.VIDEO_CALLING);
        break;
    }
  };

  memberList = () => {
    const {room} = this.props;
    goRoomMemberList(room.id);
  };

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
      return Promise.all(promiseList);
    }, true);

  };
  notification = () => {
  };
  updateUsername = () => {
    const {room} = this.props;
    goRoomUpdateUsername(room.id);
  };
  revokeLink = () => {
    const {room} = this.props;
    goRoomInviteLink(room.id);
  };
  clearHistory = async () => {
    const {room} = this.props;
    let actionId, proto;
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
      proto.setClearId(Long.fromString(room.lastMessage));
      proto.setRoomId(room.longId);
      await Api.invoke(actionId, proto);
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
      resetSecondaryNavigation();
      await Api.invoke(actionId, proto);
    }
  };

  avatarList = () => {
    const {access} = this.state;
    const {room} = this.props;
    if ((access.isGroup && !room.groupAvatarCount) || (access.isChannel && !room.channelAvatarCount)) {
      return;
    }
    goAvatarList(room.id, room.chatPeer);
  };

  toggleMute = () => {
    const {room} = this.props;
    let {roomMute} = this.state;
    if (roomMute !== room.roomMute) {
      return;
    }
    roomMute = room.roomMute === Proto.RoomMute.UNMUTE ? Proto.RoomMute.MUTE : Proto.RoomMute.UNMUTE;
    const clientMuteRoom = new ClientMuteRoom();
    clientMuteRoom.setRoomId(room.longId);
    clientMuteRoom.setRoomMute(roomMute);
    Api.invoke(CLIENT_MUTE_ROOM, clientMuteRoom);
    this.setState({roomMute});
  };

  render() {
    const {access, roomMute} = this.state;
    const {room, roomPeer, countRoomHistory, callAction} = this.props;
    if (!room) {
      return null;
    }

    return (
      <RoomViewComponent
        room={room}
        roomPeer={roomPeer}
        roomMute={roomMute}
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
        goAvatarList={this.avatarList}
        toggleMute={this.toggleMute}
        goBack={this.props.navigation.goBack}
        callAction={callAction}
      />
    );
  }
}

RoomInfoScreen.propTypes = {
  room: PropTypes.object,
  roomPeer: PropTypes.object,
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
      roomPeer: getRoomPeer(state, props),
      countRoomHistory: getCountRoomHistory(state, props),
      callAction: getCallPermission(state),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomInfoScreen);