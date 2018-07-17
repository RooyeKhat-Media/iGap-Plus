import React from 'react';
import {FILE_MANAGER_DOWNLOAD_STATUS, FILE_MANAGER_UPLOAD_STATUS} from '../../../../constants/fileManager';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../BaseUI';
import {uniqueId} from 'lodash';
import ProgressBar from '../../../BaseUI/ProgressBar';
import {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../../BaseUI/ProgressBar/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class MessageElement extends React.PureComponent {

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
    return (downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) || downloadedFile.uri;
  }

  get isPaused() {
    const {downloadedFile} = this.props;
    if (!downloadedFile) {
      return false;
    }

    return (
      downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.AUTO_PAUSED
      ||
      downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.MANUALLY_PAUSED
    );
  }

  get isUploading() {
    const {uploading} = this.props;
    if (!uploading) {
      return false;
    }
    return uploading.status === FILE_MANAGER_UPLOAD_STATUS.UPLOADING;
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };


  renderControlBar(width, siblingElement, options) {
    options = {
      completedIcon: 'play-circle-outline',
      completedIconSize: 50,
      renderProgressBar: true,
      ...options,
    };
    const {downloadedFile, uploading, onPress, onMessageLongPress} = this.props;
    const overrideOnPress = options.onPress || onPress;
    const styles = this.getStyles();
    const processing = this.isPending || this.isProcessing || this.isUploading;
    return (
      <TouchableOpacity onPress={overrideOnPress} delayLongPress={700} onLongPress={onMessageLongPress}
        activeOpacity={0.9}>

        <View>
          {siblingElement}

          {processing && (
            <View style={styles.controlBtnWrap}>
              <View style={styles.controlBtn}><Icon name="close" size={30} color="#fafafa"/></View>
            </View>)}

          {options.completedIcon && this.isCompleted && (
            <View style={styles.controlBtnWrap}>
              <View style={styles.controlBtn}><Icon name={options.completedIcon} size={options.completedIconSize}
                color="#fafafa"/></View>
            </View>)}

          {this.isPaused && (
            <View style={styles.controlBtnWrap}>
              <View style={styles.controlBtn}><Icon name="file-download" size={30} color="#fafafa"/></View>
            </View>)}

          {(!processing && uploading) && (
            <View style={styles.controlBtnWrap}>
              <View style={styles.controlBtn}><Icon name="file-upload" size={30} color="#fafafa"/></View>
            </View>)}
        </View>

        {options.renderProgressBar && this.isPending && (
          <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PENDING}/></View>)}

        {options.renderProgressBar && this.isProcessing && ((
          <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
            initialProgress={downloadedFile.progress}
            progress={downloadedFile.progress}/></View>))}

        {options.renderProgressBar && this.isUploading && ((
          <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
            initialProgress={uploading.progress}
            progress={uploading.progress}/></View>))}

      </TouchableOpacity>);
  }

  renderProgressBar(width, wrapperStyle = {}) {
    const {downloadedFile, uploading} = this.props;
    const styles = this.getStyles();
    return (<View style={wrapperStyle}>
      {this.isPending && (
        <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PENDING}/></View>)}

      {this.isProcessing && ((
        <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
          initialProgress={downloadedFile.progress}
          progress={downloadedFile.progress}/></View>))}

      {this.isUploading && ((
        <View style={styles.progressWrap}><ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
          initialProgress={uploading.progress}
          progress={uploading.progress}/></View>))}
    </View>);
  }
}

export default MessageElement;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        controlBtnWrap: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        },
        controlBtn: {
          backgroundColor: 'rgba(64, 64, 64, 0.6)',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        },
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