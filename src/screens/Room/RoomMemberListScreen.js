import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n';
import {getRoom} from '../../selector/entities/room';
import Api from '../../modules/Api/index';
import putState from '../../modules/Entities/RegisteredUsers/index';
import {
  ChannelAddModerator,
  ChannelGetMemberList,
  ChannelKickAdmin,
  ChannelKickMember,
  ChannelKickModerator,
  GroupAddAdmin,
  GroupAddModerator,
  GroupGetMemberList,
  GroupKickAdmin,
  GroupKickMember,
  GroupKickModerator,
  Proto,
} from '../../modules/Proto/index';
import {
  CHANNEL_ADD_ADMIN,
  CHANNEL_ADD_MODERATOR,
  CHANNEL_GET_MEMBER_LIST,
  CHANNEL_KICK_ADMIN,
  CHANNEL_KICK_MEMBER,
  CHANNEL_KICK_MODERATOR,
  GROUP_ADD_ADMIN,
  GROUP_ADD_MODERATOR,
  GROUP_GET_MEMBER_LIST,
  GROUP_KICK_ADMIN,
  GROUP_KICK_MEMBER,
  GROUP_KICK_MODERATOR,
} from '../../constants/methods/index';
import {CLIENT_GET_MEMBER_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import RoomMemberListComponent from '../../components/Room/RoomMemberList';
import {resetMemberList} from '../../actions/methods/rooms/getMemberList';
import {getMemberList} from '../../selector/methods/rooms/index';

class RoomMemberListScreen extends Component {

  constructor(props) {
    super(props);
    this.isLoading = false;
  }

  async componentDidMount() {
    await this.loadMore();
  }

  componentWillUnmount() {
    const {resetMemberList, room} = this.props;
    resetMemberList(room.id);
  }

  loadMore = async () => {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    const {room, memberList} = this.props;
    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_GET_MEMBER_LIST : CHANNEL_GET_MEMBER_LIST;
    const proto = new (room.type === Proto.Room.Type.GROUP ? GroupGetMemberList : ChannelGetMemberList)();

    const pagination = new Proto.Pagination();
    pagination.setOffset(memberList.length);
    pagination.setLimit(CLIENT_GET_MEMBER_LIST_PAGINATION_LIMIT);

    try {
      proto.setRoomId(room.longId);
      proto.setPagination(pagination);
      const promiseList = [];
      const memberListResponse = await Api.invoke(actionId, proto);
      memberListResponse.getMemberList().forEach(function(member) {
        promiseList.push(putState(member.getUserId().toString()));
      });
      await Promise.all(promiseList);
    } catch (e) {
      console.error('Api.invoke:Error', e);
    }
  };

  __actions = (role) => {
    const {room, intl} = this.props;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    const roomRole = isGroup ? room.groupRole : room.channelRole;
    const Role = isGroup ? Proto.GroupRoom.Role : Proto.ChannelRoom.Role;

    const actions = {
      [Role.OWNER]: {
        [Role.ADMIN]: [
          {
            label: intl.formatMessage(i18n.roomMemberListKickAdmin),
            actionId: isGroup ? GROUP_KICK_ADMIN : CHANNEL_KICK_ADMIN,
            proto: isGroup ? GroupKickAdmin : ChannelKickAdmin,
          },
        ],
        [Role.MODERATOR]: [
          {
            label: intl.formatMessage(i18n.roomMemberListAddAdmin),
            actionId: isGroup ? GROUP_ADD_ADMIN : CHANNEL_ADD_ADMIN,
            proto: isGroup ? GroupAddAdmin : ChannelKickAdmin,
          },
          {
            label: intl.formatMessage(i18n.roomMemberListKickModerator),
            actionId: isGroup ? GROUP_KICK_MODERATOR : CHANNEL_KICK_MODERATOR,
            proto: isGroup ? GroupKickModerator : ChannelKickModerator,
          },
        ],
        [Role.MEMBER]: [
          {
            label: intl.formatMessage(i18n.roomMemberListAddAdmin),
            actionId: isGroup ? GROUP_ADD_ADMIN : CHANNEL_ADD_ADMIN,
            proto: isGroup ? GroupAddAdmin : ChannelKickAdmin,
          },
          {
            label: intl.formatMessage(i18n.roomMemberListAddtModerator),
            actionId: isGroup ? GROUP_ADD_MODERATOR : CHANNEL_ADD_MODERATOR,
            proto: isGroup ? GroupAddModerator : ChannelAddModerator,
          },
          {
            label: intl.formatMessage(i18n.roomMemberListKickMember),
            actionId: isGroup ? GROUP_KICK_MEMBER : CHANNEL_KICK_MEMBER,
            proto: isGroup ? GroupKickMember : ChannelKickMember,
          },
        ],
      },
      [Role.ADMIN]: {
        [Role.MODERATOR]: [
          {
            label: intl.formatMessage(i18n.roomMemberListKickModerator),
            actionId: isGroup ? GROUP_KICK_MODERATOR : CHANNEL_KICK_MODERATOR,
            proto: isGroup ? GroupKickModerator : ChannelKickModerator,
          },
        ],
        [Role.MEMBER]: [
          {
            label: intl.formatMessage(i18n.roomMemberListAddtModerator),
            actionId: isGroup ? GROUP_ADD_MODERATOR : CHANNEL_ADD_MODERATOR,
            proto: isGroup ? GroupAddModerator : ChannelAddModerator,
          },
          {
            label: intl.formatMessage(i18n.roomMemberListKickMember),
            actionId: isGroup ? GROUP_KICK_MEMBER : CHANNEL_KICK_MEMBER,
            proto: isGroup ? GroupKickMember : ChannelKickMember,
          },
        ],
      },
      [Role.MODERATOR]: {
        [Role.MEMBER]: [
          {
            label: intl.formatMessage(i18n.roomMemberListKickMember),
            actionId: isGroup ? GROUP_KICK_MEMBER : CHANNEL_KICK_MEMBER,
            proto: isGroup ? GroupKickMember : ChannelKickMember,
          },
        ],
      },
    };
    return actions[roomRole] ? actions[roomRole][role] : null;
  };

  getActionList = (role) => {
    const actions = this.__actions(role);
    const labels = (actions || []).map(function(item) {
      return item.label;
    });
    return actions ? labels : null;
  };

  doAction = async (memberId, role, index) => {
    const {room} = this.props;
    const actions = this.__actions(role);
    const {actionId, proto} = actions ? actions[index] : {};
    if (actionId && proto) {
      const actionProto = new proto();
      actionProto.setRoomId(room.longId);
      actionProto.setMemberId(memberId);
      await Api.invoke(actionId, actionProto);
    }
  };

  onScroll = async (e) => {
    let paddingToBottom = 10;
    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
    if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
      await this.loadMore();
    }
  };

  render() {
    const {room, memberList} = this.props;
    return (
      <RoomMemberListComponent
        room={room}
        memberList={memberList}
        onScroll={this.onScroll}
        getActionList={this.getActionList}
        doAction={this.doAction}
        Role={room.type === Proto.Room.Type.GROUP ? Proto.GroupRoom.Role : Proto.ChannelRoom.Role}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

RoomMemberListScreen.propTypes = {
  intl: intlShape.isRequired,
  room: PropTypes.object,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      room: getRoom(state, props),
      memberList: getMemberList(state, props),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetMemberList: (roomId) => {
      return dispatch(resetMemberList(roomId));
    },
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(injectIntl(RoomMemberListScreen));