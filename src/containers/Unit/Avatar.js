import React, {Component} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar as BaseAvatar} from '../../components/BaseUI/index';
import {connect} from 'react-redux';
import {getRoomAvatar} from '../../selector/entities/room';
import {fileManagerDownload} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER, FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';

class Avatar extends Component {

  componentDidMount() {
    const {avatarObject, download} = this.props;
    if (avatarObject.avatar) {
      download(avatarObject.avatar);
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextAvatar = nextProps.avatarObject.avatar;
    const prevAvatar = this.props.avatarObject.avatar;
    if (nextAvatar && prevAvatar !== nextAvatar) {
      nextProps.download(nextAvatar);
    }
  }

  render() {
    const {avatarObject, avatarFile, size} = this.props;
    const style = {...this.props.style};

    if (avatarObject.color) {
      if (!style.container) {
        style.container = {};
      }
      style.container.backgroundColor = avatarObject.color;
    }

    let imageContent = null;
    let initials = null;
    if (avatarFile && avatarFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
      imageContent = (<Image source={{uri: 'file://' + avatarFile.uri}}
        style={{width: size, height: size, borderRadius: (size / 2)}}/>);
    } else {
      initials = avatarObject.initials;
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

  avatarObject: PropTypes.shape({
    color: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      token: PropTypes.string.isRequired,
      selector: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      cacheId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  avatarFile: PropTypes.object.isRequired,
  download: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    let avatarObject = null;
    if (props.roomId) {
      avatarObject = getRoomAvatar(state, props);
    }
    return {
      avatarObject,
      avatarFile: avatarObject.avatar ? state.fileManager.download[avatarObject.avatar.cacheId] : null,
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download: (avatar) => {
      dispatch(fileManagerDownload(
        FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
        avatar.token, avatar.selector, avatar.size, avatar.cacheId
      ));
    },
  };
};


export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Avatar);

