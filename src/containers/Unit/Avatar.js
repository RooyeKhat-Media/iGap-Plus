import React, {Component} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar as BaseAvatar} from '../../components/BaseUI/index';
import {connect} from 'react-redux';
import {getRoomAvatar, getRoomAvatarUri} from '../../selector/entities/room';
import {fileManagerDownload} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../constants/fileManager';
import {getUserAvatar, getUserAvatarUri} from '../../selector/entities/registeredUser';
import Long from 'long';

class Avatar extends Component {

  componentDidMount() {
    const {avatarUri, avatarProps, download} = this.props;
    if (!avatarUri && avatarProps.avatar) {
      download(avatarProps.avatar);
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextAvatar = nextProps.avatarProps.avatar;
    const prevAvatar = this.props.avatarProps.avatar;
    if (nextAvatar && prevAvatar !== nextAvatar) {
      nextProps.download(nextAvatar);
    }
  }

  render() {
    const {avatarProps, avatarUri, size} = this.props;
    const style = {...this.props.style};

    if (avatarProps.color) {
      if (!style.container) {
        style.container = {};
      }
      style.container.backgroundColor = avatarProps.color;
    }

    let imageContent = null;
    let initials = null;
    if (avatarUri) {
      imageContent = (<Image source={{uri: 'file://' + avatarUri}}
        style={{width: size, height: size, borderRadius: (size / 2)}}/>);
    } else {
      initials = avatarProps.initials;
    }

    return (
      <BaseAvatar
        {...this.props}
        text={initials}
        image={imageContent}
        style={style}
      />
    );
  }
}

Avatar.propTypes = {
  roomId: PropTypes.string,
  userId: PropTypes.string,
  size: PropTypes.number.isRequired,
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

const makeMapStateToProps = () => {
  return (state, props) => {
    let avatarProps = null;
    let avatarUri = null;
    if (props.roomId) {
      avatarProps = getRoomAvatar(state, props);
      avatarUri = getRoomAvatarUri(state, props);
    } else if (props.userId) {
      avatarProps = getUserAvatar(state, props);
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

