import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthorHash} from '../../utils/app';
import {fileManagerDownload, fileManagerDownloadManuallyPaused} from '../../actions/fileManager';
import {info} from '../../modules/FileManager';
import RoomMessageComponent from '../../components/Unit/RoomMessage/index';
import {FILE_MANAGER_DOWNLOAD_MANNER} from '../../constants/fileManager';
import {Proto} from '../../modules/Proto/index';
import {
  getDownloadFile,
  getFullMessage,
  getSmallThumbnailUri,
  getWaveformThumbnailUri,
} from '../../selector/entities/roomMessage';

class RoomMessage extends Component {

  componentDidMount() {
    const {message, download, smallThumbnailUri, waveformThumbnailUri} = this.props;
    if (message.attachment) {
      info(message.attachment.getSize(), message.attachment.getCacheId(), message.attachment.getName());
      if (!smallThumbnailUri && message.attachment.getSmallThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.SMALL_THUMBNAIL,
          message.attachment.getSmallThumbnail().getSize(),
          message.attachment.getSmallThumbnail().getCacheId(),
          message.attachment.getName());
      }

      if (!waveformThumbnailUri && message.attachment.getWaveformThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.WAVEFORM_THUMBNAIL,
          message.attachment.getWaveformThumbnail().getSize(),
          message.attachment.getWaveformThumbnail().getCacheId(),
          message.attachment.getName());
      }

    }
  }

  startDownload = () => {
    const {message, download} = this.props;
    if (message.attachment) {
      // todo Add Priority for manual download
      download(
        FILE_MANAGER_DOWNLOAD_MANNER.MANUAL,
        message.attachment.getToken(),
        Proto.FileDownload.Selector.FILE,
        message.attachment.getSize(),
        message.attachment.getCacheId(),
        message.attachment.getName());
    }
  };

  pauseDownload = () => {
    const {message, pauseDownload} = this.props;
    if (message.attachment) {
      pauseDownload(message.attachment.getCacheId());
    }
  };

  render() {
    let messageBox = null;
    const authorHash = getAuthorHash();
    const {downloadFile, smallThumbnailUri, waveformThumbnailUri, message, roomType} = this.props;

    if (!message || message.deleted) {
      return null;
    }

    if (message.attachment) {
      message.attachment.startDownload = this.startDownload;
      message.attachment.pauseDownload = this.pauseDownload;
    }

    if (downloadFile) {
      message.attachment.downloadFile = downloadFile;
    }

    if (smallThumbnailUri) {
      message.attachment.smallThumbnailUri = smallThumbnailUri;
    }

    if (waveformThumbnailUri) {
      message.attachment.waveformThumbnailUri = waveformThumbnailUri;
    }

    return (
      <RoomMessageComponent
        authorHash={authorHash}
        roomType={roomType}
        message={message}
        messageBox={messageBox}/>
    );
  }
}


const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      message: getFullMessage(state, props),
      downloadFile: getDownloadFile(state, props),
      smallThumbnailUri: getSmallThumbnailUri(state, props),
      waveformThumbnailUri: getWaveformThumbnailUri(state, props),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download: (manner, token, selector, size, cacheId, fileName) => {
      dispatch(fileManagerDownload(manner, token, selector, size, cacheId, fileName));
    },
    pauseDownload: (cacheId) => {
      dispatch(fileManagerDownloadManuallyPaused(cacheId));
    },
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoomMessage);

