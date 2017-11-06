import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getRoom} from '../../selector/entities/room';
import {ChannelGetMemberList, GroupGetMemberList, Proto} from '../../modules/Proto/index';
import {CHANNEL_GET_MEMBER_LIST, GROUP_GET_MEMBER_LIST} from '../../constants/methods/index';
import {CLIENT_GET_MEMBER_LIST_PAGINATION_LIMIT} from '../../constants/configs';
import RoomMemberlistComponent from '../../components/Room/RoomMemberlist';
import Api from '../../modules/Api/index';
import putState from '../../modules/Entities/RegisteredUsers/index';

class RoomMemberListScreen extends Component {

  async componentDidMount() {
    await this.loadMore();
  }

  loadMore = async () => {
    const {room, memberList} = this.props;
    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_GET_MEMBER_LIST : CHANNEL_GET_MEMBER_LIST;
    const proto = new (room.type === Proto.Room.Type.GROUP ? GroupGetMemberList : ChannelGetMemberList)();

    const pagination = new Proto.Pagination();
    pagination.setOffset(memberList.length);
    pagination.setLimit(CLIENT_GET_MEMBER_LIST_PAGINATION_LIMIT);

    try {
      proto.setRoomId(room.longId);
      const memberListResponse = await Api.invoke(actionId, proto);
      const promisList = [];
      memberListResponse.getMemberList().forEach(function(member) {
        promisList.push(putState(member.getUserId().toString()));
      });
      await Promise.all(promisList);
    } catch (e) {
      console.error('Api.invoke:Error', e);
    }
  }

  onScroll = (props, moreProps) => {
    console.log('onScroll', props, moreProps);
  }

  render() {
    const {room, memberList} = this.props;
    return (
      <RoomMemberlistComponent
        room={room}
        memberList={memberList}
        goBack={this.props.navigation.goBack}
        onScroll={this.onScroll}
      />
    );
  }
}

RoomMemberListScreen.propTypes = {
  room: PropTypes.object,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    const room = getRoom(state, props);
    return {
      room,
      memberList: room.type === Proto.Room.Type.GROUP ? state.methods.groupMemberList : state.methods.channelMemberList,
    };
  };
};

export default connect(
  makeMapStateToProps,
)(RoomMemberListScreen);