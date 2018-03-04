import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getRoomAvatar, getRoomAvatarUri} from '../../selector/entities/room';
import {fileManagerDownload} from '../../actions/fileManager';
import AvatarComponent from '../../components/Unit/Avatar';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../constants/fileManager';
import {getUserAvatar, getUserAvatarUri} from '../../selector/entities/registeredUser';
import Long from 'long';
import {prependFileProtocol} from '../../utils/core';

class Avatar extends React.Component {

  componentDidMount() {
    const {avatarUri, avatarProps, download} = this.props;
    if (!avatarUri && avatarProps.avatar) {
      download(avatarProps.avatar);
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextAvatar = nextProps.avatarProps.avatar;
    const prevAvatar = this.props.avatarProps.avatar;
    if (nextAvatar && (!prevAvatar || prevAvatar.token !== nextAvatar.token)) {
      nextProps.download(nextAvatar);
    }
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.avatarProps.color !== nextProps.avatarProps.color
        ||
        this.props.avatarProps.initials !== nextProps.avatarProps.initials
        ||
        this.props.avatarUri !== nextProps.avatarUri
    );
  }

  render() {
    const {circle, size, avatarProps, avatarUri, onPress} = this.props;

    return (
      <AvatarComponent
        circle={circle}
        size={size}
        onPress={onPress}
        color={avatarProps.color}
        text={avatarProps.initials}
        uri={prependFileProtocol(avatarUri)}
      />
    );
  }
}

Avatar.propTypes = {
  roomId: PropTypes.string,
  userId: PropTypes.string,
  size: PropTypes.number.isRequired,
  circle: PropTypes.bool,
  //Connect
  avatarProps: PropTypes.shape({
    color: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      token: PropTypes.string.isRequired,
      selector: PropTypes.number.isRequired,
      size: PropTypes.instanceOf(Long).isRequired,
      cacheId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  avatarUri: PropTypes.string,
  download: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  circle: true,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    let avatarProps = {
      color: '#FFFFFF',
      initials: '',
    };
    let avatarUri = null;
    if (props.roomId) {
      avatarProps = getRoomAvatar(state, props) || avatarProps;
      avatarUri = getRoomAvatarUri(state, props);
    } else if (props.userId) {
      avatarProps = getUserAvatar(state, props) || avatarProps;
      avatarUri = getUserAvatarUri(state, props);
    }
    return {
      avatarProps,
      avatarUri,
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download: (avatar) => {
      dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
        avatar.token, avatar.selector, avatar.size, avatar.cacheId, avatar.fileName));
    },
  };
};


export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Avatar);

