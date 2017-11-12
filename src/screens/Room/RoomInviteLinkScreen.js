import React, {Component} from 'react';
import {connect} from 'react-redux';
import Api from '../../modules/Api/index';
import RoomInviteLinkComponent from '../../components/Room/RoomInviteLink';
import {getRoom} from '../../selector/entities/room';
import {ChannelRevokeLink, GroupRevokeLink, Proto} from '../../modules/Proto/index';
import {CHANNEL_REVOKE_LINK, GROUP_REVOKE_LINK} from '../../constants/methods/index';

class RoomInviteLinkScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  revokeInviteLink = () => {
    const {room} = this.props;

    const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_REVOKE_LINK : CHANNEL_REVOKE_LINK;
    const proto = room.type === Proto.Room.Type.GROUP ? GroupRevokeLink : ChannelRevokeLink;

    const revokeLink = new proto();
    revokeLink.setRoomId(room.longId);

    return Api.invoke(actionId, revokeLink);
  };

  render() {
    const {room} = this.props;
    const inviteLink = (room.type === Proto.Room.Type.GROUP ? room.groupPrivateInviteLink : room.channelPrivateInviteLink) || false;
    return (
      <RoomInviteLinkComponent
        inviteLink={inviteLink}
        revokeInviteLink={this.revokeInviteLink}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    room: getRoom(state, props),
  };
};

export default connect(mapStateToProps)(RoomInviteLinkScreen);