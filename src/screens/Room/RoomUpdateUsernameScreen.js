import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoomUpdateUsernameComponent from '../../components/Room/RoomUpdateUsername';
import {requiredValidator, stringValidator} from '../../utils/validator';
import Api from '../../modules/Api/index';
import {
  ChannelCheckUsername,
  ChannelRemoveUsername,
  ChannelUpdateUsername,
  GroupCheckUsername,
  GroupRemoveUsername,
  GroupUpdateUsername,
  Proto,
} from '../../modules/Proto/index';
import {
  CHANNEL_CHECK_USERNAME,
  CHANNEL_REMOVE_USERNAME,
  CHANNEL_UPDATE_USERNAME,
  GROUP_CHECK_USERNAME,
  GROUP_REMOVE_USERNAME,
  GROUP_UPDATE_USERNAME,
} from '../../constants/methods/index';
import i18n from '../../i18n/index';
import {getRoom} from '../../selector/entities/room';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD,
  ERROR_CHANNEL_UPDATE_USERNAME_FORBIDDEN,
  ERROR_CHANNEL_UPDATE_USERNAME_UPDATE_LOCK,
  ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD,
  ERROR_GROUP_UPDATE_USERNAME_FORBIDDEN,
  ERROR_GROUP_UPDATE_USERNAME_UPDATE_LOCK,
} from '../../modules/Api/errors/index';

const formRules = {
  username: [
    {validate: requiredValidator},
    {validate: stringValidator, options: {min: 5}},
  ],
};

class RoomUpdateUsername extends Component {

  static navigationOptions = {
    header: null,
  };

  prepareRoom = (room) => {
    if (!room) {
      return;
    }
    let isPublic = false;
    let username = '';
    if (room.type === Proto.Room.Type.GROUP && room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM) {
      isPublic = true;
      username = room.groupPublicUsername;
    }
    if (room.type === Proto.Room.Type.CHANNEL && room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM) {
      isPublic = true;
      username = room.channelPublicUsername;
    }
    this.setState({
      isPublic,
      username,
    });
    formRules.username.push({
      validate: this.checkUsername,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isPublic: false,
      username: '',
    };
  }

  componentDidMount() {
    const {room} = this.props;
    this.prepareRoom(room);
  }

  componentWillReceiveProps(nextProps) {
    const {room} = nextProps;
    this.prepareRoom(room);
  }

  handleFormData = async (formData, setError) => {
    const {goBack} = this.props.navigation.state.params;
    const {room} = this.props;
    const {isPublic} = this.state;
    const isGroup = room.type === Proto.Room.Type.GROUP;
    try {
      if (isPublic) {
        const actionId = isGroup ? GROUP_UPDATE_USERNAME : CHANNEL_UPDATE_USERNAME;
        const proto = new (isGroup ? GroupUpdateUsername : ChannelUpdateUsername)();
        proto.setRoomId(room.longId);
        proto.setUsername(formData.username);
        await Api.invokeMapError(actionId, proto, setError, {
          [errorId(ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD)]: 'username',
          [errorId(ERROR_GROUP_UPDATE_USERNAME_UPDATE_LOCK)]: 'username',
          [errorId(ERROR_GROUP_UPDATE_USERNAME_FORBIDDEN)]: 'username',
          [errorId(ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD)]: 'username',
          [errorId(ERROR_CHANNEL_UPDATE_USERNAME_UPDATE_LOCK)]: 'username',
          [errorId(ERROR_CHANNEL_UPDATE_USERNAME_FORBIDDEN)]: 'username',
        });
      } else if (
        (room.type === Proto.Room.Type.GROUP && room.groupType === Proto.GroupRoom.Type.PUBLIC_ROOM) ||
        (room.type === Proto.Room.Type.CHANNEL && room.channelType === Proto.ChannelRoom.Type.PUBLIC_ROOM)) {
        const actionId = isGroup ? GROUP_REMOVE_USERNAME : CHANNEL_REMOVE_USERNAME;
        const proto = new (isGroup ? GroupRemoveUsername : ChannelRemoveUsername)();
        proto.setRoomId(room.longId);
        await Api.invoke(actionId, proto);
      }
      setTimeout(() => {
        if (goBack) {
          goBack();
        } else {
          this.props.navigation.goBack();
        }
      });
    } catch (e) {
    }
  };

  checkUsername = (value, options = {}) => {
    const {isPublic} = this.state;
    const {room} = this.props;
    return new Promise((resolve, reject) => {
      if (isPublic) {
        const actionId = room.type === Proto.Room.Type.GROUP ? GROUP_CHECK_USERNAME : CHANNEL_CHECK_USERNAME;
        const proto = new (room.type === Proto.Room.Type.GROUP ? GroupCheckUsername : ChannelCheckUsername)();
        proto.setUsername(value);
        proto.setRoomId(room.longId);
        Api.invoke(actionId, proto)
          .then(function(response) {
            if (room.type === Proto.Room.Type.GROUP) {
              if (response.getStatus() === Proto.GroupCheckUsernameResponse.Status.INVALID) {
                reject(i18n.groupCheckUsernameInvalid);
              } else if (response.getStatus() === Proto.GroupCheckUsernameResponse.Status.TAKEN) {
                reject(i18n.groupCheckUsernameTaken);
              } else {
                resolve();
              }
            } else {
              if (response.getStatus() === Proto.ChannelCheckUsernameResponse.Status.INVALID) {
                reject(i18n.channelCheckUsernameInvalid);
              } else if (response.getStatus() === Proto.ChannelCheckUsernameResponse.Status.TAKEN) {
                reject(i18n.channelCheckUsernameTaken);
              } else {
                resolve();
              }
            }
          }, function() {
            reject();
          });
      } else {
        resolve();
      }
    });
  };

  onSelectRadioBtn = (value) => {
    this.setState({
      isPublic: value,
    });
  };

  render() {
    const {room} = this.props;
    const {isPublic, username} = this.state;
    const inviteLink = room ? (room.type === Proto.Room.Type.GROUP ? room.groupPrivateInviteLink : room.channelPrivateInviteLink) : null;
    return (
      <RoomUpdateUsernameComponent
        isPublic={!!isPublic}
        formRules={formRules}
        username={username}
        inviteLink={inviteLink}
        onSelectRadioBtn={this.onSelectRadioBtn}
        handleFormData={this.handleFormData}
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

export default connect(mapStateToProps)(RoomUpdateUsername);