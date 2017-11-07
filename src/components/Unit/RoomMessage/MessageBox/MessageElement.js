import React from 'react';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../../../constants/fileManager';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../BaseUI';
import ProgressBar from '../../../BaseUI/ProgressBar';
import {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../../BaseUI/ProgressBar/index';

class MessageElement extends React.Component {

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

  renderControlBar(width, siblingElement, options) {
    options = {
      completedIcon: 'play-circle-outline',
      completedIconSize: 50,
      renderProgressBar: true,
      ...options,
    };
    const {downloadedFile, onPress} = this.props;
    return (<TouchableOpacity onPress={onPress} activeOpacity={0.9}>

      <View>
        {siblingElement}

        {(this.isPending || this.isProcessing) && (
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
      </View>

      {options.renderProgressBar && this.isPending && (<ProgressBar width={width} status={PROGRESS_BAR_PENDING}/>)}
      {options.renderProgressBar && this.isProcessing && ((<ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
        initialProgress={downloadedFile.progress}
        progress={downloadedFile.progress}/>))}
    </TouchableOpacity>);
  }

  renderProgressBar(width, wrapperStyle = {}) {
    const {downloadedFile} = this.props;
    return (<View style={wrapperStyle}>
      {this.isPending && (<ProgressBar width={width} status={PROGRESS_BAR_PENDING}/>)}
      {this.isProcessing && ((<ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
        initialProgress={downloadedFile.progress}
        progress={downloadedFile.progress}/>))}
    </View>);
  }
}

export default MessageElement;

const styles = StyleSheet.create({
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
});