import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fileManagerDownload} from '../../actions/fileManager';
import {FILE_MANAGER_DOWNLOAD_MANNER, FILE_MANAGER_DOWNLOAD_STATUS} from '../../constants/fileManager';
import {Proto} from '../../modules/Proto/index';
import {getDownloadedFile, getSmallThumbnailUri} from '../../selector/entities/roomMessage';
import {Image, View} from 'react-native';
import {uniqueId} from 'lodash';
import {prependFileProtocol} from '../../utils/core';
import ProgressBar, {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../components/BaseUI/ProgressBar/index';
import Device from '../../modules/Responsive/Device';
import MemoizeResponsiveStyleSheet from '../../modules/Responsive/MemoizeResponsiveStyleSheet';

const {width} = Device.dimensions.window;

class AvatarBox extends Component {

  get isPending() {
    const {downloadedFile} = this.props;
    if (!downloadedFile) {
      return false;
    }
    return (downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.PENDING);
  }

  get isProcessing() {
    const {downloadedFile} = this.props;
    if (!downloadedFile) {
      return false;
    }
    return (downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING);
  }

  get isCompleted() {
    const {downloadedFile} = this.props;
    if (!downloadedFile) {
      return false;
    }
    return (downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED);
  }

  get isPaused() {
    const {downloadedFile} = this.props;
    if (!downloadedFile) {
      return true;
    }
    return (
      downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.AUTO_PAUSED
      ||
      downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED
    );
  }

  componentWillUnmount() {
    const {image, stopAvatarDownload} = this.props;
    stopAvatarDownload(image.index);
  }

  componentDidMount() {
    const {image, download, smallThumbnailUri, startAvatarDownload} = this.props;
    const attachment = image.avatar.getFile();
    if (!smallThumbnailUri && attachment.getSmallThumbnail()) {
      download(
        FILE_MANAGER_DOWNLOAD_MANNER.FORCE,
        attachment.getToken(),
        Proto.FileDownload.Selector.SMALL_THUMBNAIL,
        attachment.getSmallThumbnail().getSize(),
        attachment.getSmallThumbnail().getCacheId(),
        attachment.getSmallThumbnail().getName());
    }
    if (this.isPaused) {
      startAvatarDownload(image.index);
    }
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {smallThumbnailUri, downloadedFile} = this.props;
    const imageSource = this.isCompleted ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);
    if (imageSource == null) {
      return null;
    }
    return (
      <View>
        <Image{...this.props}
          source={{uri:imageSource}}/>
        {this.isPending && (
          <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PENDING}/></View>)}
        {this.isProcessing && ((
          <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
            initialProgress={downloadedFile.progress}
            progress={downloadedFile.progress}/></View>))}
      </View>
    );
  }

}

AvatarBox.propTypes = {
  image: PropTypes.object.isRequired,
  startAvatarDownload: PropTypes.func.isRequired,
  stopAvatarDownload: PropTypes.func.isRequired,

  //Connect
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  download: PropTypes.func.isRequired,

};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      downloadedFile: getDownloadedFile(state, props.image.avatar.getFile()),
      smallThumbnailUri: getSmallThumbnailUri(state, props.image.avatar.getFile()),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download: (manner, token, selector, size, cacheId, fileName) => {
      dispatch(fileManagerDownload(manner, token, selector, size, cacheId, fileName));
    },

  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(AvatarBox);

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        progressWrap: {
          position: 'absolute',
          top: 2,
          left: 2,
          right: 2,
        },
      },
    },
  ],
  true,
];