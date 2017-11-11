import React, {Component} from 'react';
import {Image, View} from 'react-native';
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
    let imageContent = null;
    let initials = null;
    const {avatarProps, avatarUri, size, circle} = this.props;
    const style = {
      width: size,
      height: size,
      borderRadius: circle ? size / 2 : null,
      backgroundColor: avatarProps.color,
    };
    const avatarStyle = {
      ...this.props.style,
      container: {
        ...(this.props.style && this.props.style.container) ? this.props.style.container : {},
        backgroundColor: avatarProps.color,
      },
    };

    if (avatarUri) {
      imageContent = (<Image source={{uri: 'file://' + avatarUri}} style={[style, {backgroundColor: null}]}/>);
    } else {
      initials = avatarProps.initials;
      avatarStyle.content = {
        ...avatarStyle.content,
        fontSize: avatarStyle.content && avatarStyle.content.fontSize || size / 2.3,
      };
    }

    return (
      <View style={style}>
        <BaseAvatar
          text={initials}
          image={imageContent}
          style={avatarStyle}
          size={size}
        />
      </View>
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

