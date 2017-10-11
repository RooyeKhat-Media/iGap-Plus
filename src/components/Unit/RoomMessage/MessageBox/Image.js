import React from 'react';
import {ActivityIndicator, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from './Text';
import {min} from 'lodash';
import {Icon, ProgressBar} from '../../../BaseUI';
import Device from '../../../../modules/Responsive/Device';
import {dimensionCalculate} from '../../../../utils/core';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../../../constants/fileManager';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default ({message, attachment}) => {

  const {width, height} = dimensionCalculate(attachment.getWidth(), attachment.getHeight(), boxWidth, boxHeight);
  const uri = 'file://' + (attachment.downloadFile && attachment.downloadFile.uri ? attachment.downloadFile.uri : attachment.smallThumbnailUri);

  let isCompleted = false;
  let isPending = false;
  let isProcessing = false;

  if (attachment.downloadFile) {
    if (attachment.downloadFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED) {
      isCompleted = true;
    }
    if (attachment.downloadFile.status === FILE_MANAGER_DOWNLOAD_STATUS.PENDING) {
      isPending = true;
    } else if (attachment.downloadFile.status === FILE_MANAGER_DOWNLOAD_STATUS.PROCESSING) {
      isProcessing = true;
    }
  }

  const isPaused = (!isCompleted && !isPending && !isProcessing);

  return (<View style={[styles.container, {width}]}>
    <Image blurRadius={isCompleted ? 0 : 0.5}
      source={{uri: uri}}
      style={[styles.imageWrap, {width, height}]}>

      <TouchableOpacity activeOpacity={1} onPress={() => {
        if (!isCompleted) {

        }
        if (isPending || isProcessing) {
          attachment.pauseDownload();
        } else {
          attachment.startDownload();
        }
      }}>
        <View>
          {isPending && (<ActivityIndicator size="large"/>)}

          {isProcessing && ((<ProgressBar
            style={[styles.progressStyle]}
            width={width - 10}
            initialProgress={0}
            progress={attachment.downloadFile.progress}/>))}

          {isPaused && (<View style={styles.downloadBtn}><Icon name="file-download" size={30} color="#fafafa"/></View>)}
        </View>
      </TouchableOpacity>

    </Image>

    {message ? (<Text message={message}/>) : null}
  </View>);
};

const styles = StyleSheet.create({
  container: {},
  imageWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadBtn: {
    backgroundColor: 'rgba(64, 64, 64, 0.6)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressStyle: {
    marginBottom: 5,
  },
});