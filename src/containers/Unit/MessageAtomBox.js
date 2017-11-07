import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Text from '../../components/Unit/RoomMessage/MessageBox/Text';
import Image from '../../components/Unit/RoomMessage/MessageBox/Image';
import Video from '../../components/Unit/RoomMessage/MessageBox/Video';
import Audio from '../../components/Unit/RoomMessage/MessageBox/Audio';
import Voice from '../../components/Unit/RoomMessage/MessageBox/Voice';
import Gif from '../../components/Unit/RoomMessage/MessageBox/Gif';
import File from '../../components/Unit/RoomMessage/MessageBox/File';
import Location from '../../components/Unit/RoomMessage/MessageBox/Location';
import Contact from '../../components/Unit/RoomMessage/MessageBox/Contact';
import {fileManagerDownload, fileManagerDownloadManuallyPaused} from '../../actions/fileManager';
import {info} from '../../modules/FileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER, FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';
import {Proto} from '../../modules/Proto/index';
import {getDownloadedFile, getSmallThumbnailUri, getWaveformThumbnailUri} from '../../selector/entities/roomMessage';

class MessageAtomBox extends Component {

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
          message.attachment.getSmallThumbnail().getName());
      }

      if (!waveformThumbnailUri && message.attachment.getWaveformThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.AUTO,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.WAVEFORM_THUMBNAIL,
          message.attachment.getWaveformThumbnail().getSize(),
          message.attachment.getWaveformThumbnail().getCacheId(),
          message.attachment.getWaveformThumbnail().getName());
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

  openFile = () => {

  };

  togglePress = () => {
    const {downloadedFile} = this.props;
    if (downloadedFile) {
      switch (downloadedFile.status) {
        case FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED:
          return this.openFile();
        case FILE_MANAGER_DOWNLOAD_STATUS.PENDING:
        case FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING:
          return this.pauseDownload();
      }
    }
    return this.startDownload();
  };

  render() {
    const {message} = this.props;

    if (!message || message.deleted) {
      return null;
    }

    return this.renderContent();
  }

  renderContent() {

    const {
      downloadedFile,
      smallThumbnailUri,
      waveformThumbnailUri,
      message,
      showText,
    } = this.props;

    switch (message.messageType) {

      case Proto.RoomMessageType.TEXT:
        return (<Text
          message={message.message}
          showText={showText}/>);

      case Proto.RoomMessageType.IMAGE:
      case Proto.RoomMessageType.IMAGE_TEXT:
        return (<Image
          message={message.message}
          attachment={message.attachment}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
        return (<Video
          message={message.message}
          attachment={message.attachment}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.AUDIO:
      case Proto.RoomMessageType.AUDIO_TEXT:
        return (<Audio
          message={message.message}
          attachment={message.attachment}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          waveformThumbnailUri={waveformThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.VOICE:
        return (<Voice
          attachment={message.attachment}
          downloadedFile={downloadedFile}
          waveformThumbnailUri={waveformThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.GIF:
      case Proto.RoomMessageType.GIF_TEXT:
        return (<Gif
          message={message.message}
          attachment={message.attachment}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.FILE:
      case Proto.RoomMessageType.FILE_TEXT:
        return (<File
          message={message.message}
          attachment={message.attachment}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.LOCATION:
        return (<Location location={message.location}/>);

      case Proto.RoomMessageType.CONTACT:
        return (<Contact contact={message.contact}/>);

      default:
        return null;
    }
  }
}

MessageAtomBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,

  //Connect
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  waveformThumbnailUri: PropTypes.string,

  download: PropTypes.func.isRequired,
  pauseDownload: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      downloadedFile: getDownloadedFile(state, props.message.attachment),
      smallThumbnailUri: getSmallThumbnailUri(state, props.message.attachment),
      waveformThumbnailUri: getWaveformThumbnailUri(state, props.message.attachment),
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
)(MessageAtomBox);

