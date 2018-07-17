import React, {PureComponent} from 'react';
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
import Sending from '../../components/Unit/RoomMessage/MessageBox/Sending';
import {
  fileManagerDownload,
  fileManagerDownloadManuallyPaused,
  fileManagerUploadManuallyPaused,
} from '../../actions/fileManager';
import {info} from '../../modules/FileManager';
import {
  FILE_MANAGER_DOWNLOAD_MANNER,
  FILE_MANAGER_DOWNLOAD_STATUS,
  FILE_MANAGER_UPLOAD_STATUS,
} from '../../constants/fileManager';
import {Proto} from '../../modules/Proto/index';
import {getDownloadedFile, getSmallThumbnailUri, getWaveformThumbnailUri} from '../../selector/entities/roomMessage';
import {getRoomHistorySelectedMode, getRoomHistoryUploadIdPrefix} from '../../utils/app';
import {goRoomGallery, goVideoPlayer} from '../../navigators/SecondaryNavigator';
import {prependFileProtocol} from '../../utils/core';
import {getMessageStats, listenMessage} from '../../utils/messenger';

class MessageAtomBox extends PureComponent {

  componentDidMount() {
    this.initialMessages(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.initialMessages(nextProps);
  }

  initialMessages(props) {
    this.viewMessage(props.message);
    this.prepareAttachment(props);
  }

  viewMessage(roomMessage) {
    const forwardMessage = roomMessage.forwardFrom;
    if (roomMessage.channelViewsLabel) {
      getMessageStats(roomMessage.roomId, roomMessage.longId);
    }
    if (forwardMessage && forwardMessage.channelViewsLabel) {
      getMessageStats(forwardMessage.roomId, forwardMessage.longId);
    }
  }

  prepareAttachment(props) {
    const {message, download, downloadedFile, smallThumbnailUri, waveformThumbnailUri} = props;
    if (message.attachment && !downloadedFile) {
      info(message.attachment.getSize(), message.attachment.getCacheId(), message.attachment.getName());
      if (!smallThumbnailUri && message.attachment.getSmallThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
          message.attachment.getToken(),
          Proto.FileDownload.Selector.SMALL_THUMBNAIL,
          message.attachment.getSmallThumbnail().getSize(),
          message.attachment.getSmallThumbnail().getCacheId(),
          message.attachment.getSmallThumbnail().getName());
      }

      if (!waveformThumbnailUri && message.attachment.getWaveformThumbnail()) {
        download(
          FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
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
    const {downloadedFile, message, onMessagePress} = this.props;
    switch (this.props.message.messageType) {
      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
        goVideoPlayer(prependFileProtocol(downloadedFile.uri), message.attachment.getName());
        break;
      case Proto.RoomMessageType.VOICE:
        listenMessage(message.roomId, message.id);
        break;
      case Proto.RoomMessageType.IMAGE:
      case Proto.RoomMessageType.IMAGE_TEXT:
        const dimensions = {
          width: message.attachment.getWidth(),
          height: message.attachment.getHeight(),
        };

        goRoomGallery(prependFileProtocol(downloadedFile.uri), dimensions, message.message, message.attachment.getName());
        break;
      default:
        onMessagePress(message);
    }
  };

  togglePress = () => {
    const {message, downloadedFile, uploading, stopUpload, onMessagePress} = this.props;
    if (
      message.status !== Proto.RoomMessageStatus.SENDING &&
      message.status !== Proto.RoomMessageStatus.FAILED &&
      !getRoomHistorySelectedMode()) {
      if (uploading) {
        switch (uploading.status) {
          case FILE_MANAGER_UPLOAD_STATUS.UPLOADING:
            return stopUpload(getRoomHistoryUploadIdPrefix(message.roomId, message.id));
        }
      } else if (downloadedFile) {
        switch (downloadedFile.status) {
          case FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED:
            return this.openFile();
          case FILE_MANAGER_DOWNLOAD_STATUS.PENDING:
          case FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING:
            return this.pauseDownload();
        }
      }
      return this.startDownload();
    } else {
      onMessagePress(message);
    }
  };

  render() {
    const {message} = this.props;

    if (!message || message.deleted) {
      return null;
    }

    if (message.status !== Proto.RoomMessageStatus.SENDING && message.status !== Proto.RoomMessageStatus.FAILED) {
      return this.renderContent();
    } else {
      return this.renderSending();
    }
  }

  renderSending() {
    const {
      uploading,
      message,
      showText,
    } = this.props;

    switch (message.messageType) {
      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
      case Proto.RoomMessageType.AUDIO:
      case Proto.RoomMessageType.AUDIO_TEXT:
      case Proto.RoomMessageType.VOICE:
      case Proto.RoomMessageType.FILE:
      case Proto.RoomMessageType.FILE_TEXT:
        return (<Sending
          showText={showText}
          message={message.message}
          pickedFile={message.pickedFile}
          uploading={uploading}
          onPress={this.togglePress}/>);
      default:
        return this.renderContent();
    }
  }

  renderContent() {
    const {
      uploading,
      downloadedFile,
      smallThumbnailUri,
      waveformThumbnailUri,
      message,
      onMessageLongPress,
      showText,
      isForwarded,
      layout,
    } = this.props;

    switch (message.messageType) {

      case Proto.RoomMessageType.TEXT:
        return (<Text
          isForwarded={isForwarded}
          message={message.message}
          showText={showText}/>);

      case Proto.RoomMessageType.IMAGE:
      case Proto.RoomMessageType.IMAGE_TEXT:
        return (<Image
          secondaryWidth={layout.secondaryWidth}
          isForwarded={isForwarded}
          message={message}
          uploading={uploading}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.VIDEO:
      case Proto.RoomMessageType.VIDEO_TEXT:
        return (<Video
          secondaryWidth={layout.secondaryWidth}
          isForwarded={isForwarded}
          message={message}
          uploading={uploading}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.AUDIO:
      case Proto.RoomMessageType.AUDIO_TEXT:
        return (<Audio
          isForwarded={isForwarded}
          message={message.message}
          pickedFile={message.pickedFile}
          attachment={message.attachment}
          uploading={uploading}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          waveformThumbnailUri={waveformThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.VOICE:
        return (<Voice
          isForwarded={isForwarded}
          attachment={message.attachment}
          uploading={uploading}
          downloadedFile={downloadedFile}
          waveformThumbnailUri={waveformThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.GIF:
      case Proto.RoomMessageType.GIF_TEXT:
        return (<Gif
          secondaryWidth={layout.secondaryWidth}
          isForwarded={isForwarded}
          message={message}
          uploading={uploading}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.FILE:
      case Proto.RoomMessageType.FILE_TEXT:
        return (<File
          isForwarded={isForwarded}
          message={message.message}
          pickedFile={message.pickedFile}
          attachment={message.attachment}
          uploading={uploading}
          showText={showText}
          downloadedFile={downloadedFile}
          smallThumbnailUri={smallThumbnailUri}
          onMessageLongPress={onMessageLongPress}
          onPress={this.togglePress}/>);

      case Proto.RoomMessageType.LOCATION:
        return (<Location
          isForwarded={isForwarded}
          message={message}
          location={message.location}/>);

      case Proto.RoomMessageType.CONTACT:
        return (<Contact
          isForwarded={isForwarded}
          contact={message.contact}/>);

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
      downloadedFile: props.message.pickedFile ? {
        uri: props.message.pickedFile.fileUri,
        status: FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED,
      } : getDownloadedFile(state, props.message.attachment),
      smallThumbnailUri: getSmallThumbnailUri(state, props.message.attachment),
      waveformThumbnailUri: getWaveformThumbnailUri(state, props.message.attachment),
      uploading: state.fileManager.upload[getRoomHistoryUploadIdPrefix(props.message.roomId, props.message.id)],
      layout: state.layout,
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
    stopUpload: (id) => {
      dispatch(fileManagerUploadManuallyPaused(id));
    },
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(MessageAtomBox);

