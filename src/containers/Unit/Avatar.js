import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar as BaseAvatar} from '../../components/BaseUI/index';
import {ClientGetRoom, UserInfo} from '../../modules/Proto/index';
import {CLIENT_GET_ROOM, USER_INFO} from '../../constants/methods/index';
import Api from '../../modules/Api/index';

class Avatar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initials: '',
      color: '',
    };
  }

  async componentDidMount() {
    const {id, user, room} = this.props;
    if (user) {
      let userInfo = new UserInfo();
      userInfo.setUserId(id);
      /**
       * @type {ProtoUserInfoResponse}
       */
      const userInfoResponse = Api.invoke(USER_INFO, userInfo);
      this.setState({
        initials: userInfoResponse.getUser().getInitials(),
        color: userInfoResponse.getUser().getColor(),
      });
    } else if (room) {
      let clientGetRoom = new ClientGetRoom();
      clientGetRoom.setRoomId(id);
      /**
       * @type {ProtoClientGetRoomResponse}
       */
      const clientGetRoomResponse = Api.invoke(CLIENT_GET_ROOM, clientGetRoom);
      this.setState({
        initials: clientGetRoomResponse.getRoom().getInitials(),
        color: clientGetRoomResponse.getRoom().getColor(),
      });
    }
  }

  render() {
    const {initials, color} = this.state;
    const style = {...this.props.style};
    if (color) {
      style.container = {backgroundColor: color};
    }
    return (
      <BaseAvatar
        text={initials}
        style={style}
        {...this.props}
      />
    );
  }
}


Avatar.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.bool,
  room: PropTypes.bool,
};

export default Avatar;