import React, {Component} from 'react';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {getAuthorHash} from '../../utils/app';
import {Proto} from '../../modules/Proto/index';
import {getFullMessage, getSmallThumbnailUri, getWaveformThumbnailUri} from '../../selector/entities/roomMessage';
import {connect} from 'react-redux';
import {fileManagerDownload} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../constants/fileManager';

class RoomMessage extends Component {

  componentDidMount() {
    const {message, download} = this.props;
    if (message.attachment) {
      if (message.attachment.getSmallThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.SMALL_THUMBNAIL,
          message.attachment.getSmallThumbnail().getSize(),
          message.attachment.getSmallThumbnail().getCacheId());
      }
      if (message.attachment.getWaveformThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.WAVEFORM_THUMBNAIL,
          message.attachment.getWaveformThumbnail().getSize(),
          message.attachment.getWaveformThumbnail().getCacheId());
      }
    }
  }

  render() {
    let messageType = null;
    const authorHash = getAuthorHash();
    const {smallThumbnailUri, waveformThumbnailUri, message, roomType} = this.props;

    if (!message || message.deleted) {
      return null;
    }
    if (message.messageType === Proto.RoomMessageType.LOG) {
      messageType = 'log';
    } else if (message.authorHash === authorHash) {
      messageType = 'owner';
    } else if (roomType === Proto.Room.Type.CHAT) {
      messageType = 'chat';
    } else if (roomType === Proto.Room.Type.GROUP) {
      messageType = 'group';
    } else if (roomType === Proto.Room.Type.CHANNEL) {
      messageType = 'channel';
    }

    if (smallThumbnailUri) {
      message.attachment.smallThumbnailUri = smallThumbnailUri;
    }
    if (waveformThumbnailUri) {
      message.attachment.waveformThumbnailUri = waveformThumbnailUri;
    }

    return (
      <RoomMessageComponent
        message={message}
        messageType={messageType}/>
    );
  }
}


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getFullMessage(state, props),
      smallThumbnailUri: getSmallThumbnailUri(state, props),
      waveformThumbnailUri: getWaveformThumbnailUri(state, props),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download: (manner, token, selector, size, cacheId) => {
      dispatch(fileManagerDownload(manner, token, selector, size, cacheId));
    },
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoomMessage);

