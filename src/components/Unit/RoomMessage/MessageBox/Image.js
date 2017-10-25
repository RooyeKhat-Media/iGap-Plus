import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from './Text';
import {min} from 'lodash';
import {Icon} from '../../../BaseUI';
import Device from '../../../../modules/Responsive/Device';
import {dimensionCalculate} from '../../../../utils/core';
import ProgressBar from '../../../BaseUI/ProgressBar';
import {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../../BaseUI/ProgressBar/index';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default ({message, attachment}) => {

  const {width, height} = dimensionCalculate(attachment.getWidth(), attachment.getHeight(), boxWidth, boxHeight);
  const uri = 'file://' + (attachment.isCompleted ? attachment.downloadFile.uri : attachment.smallThumbnailUri);

  return (<View style={[styles.container, {width}]}>

    <TouchableOpacity onPress={attachment.togglePress} activeOpacity={0.9}>
      <Image
        source={{uri: uri}}
        style={[styles.imageWrap, {width, height}]}>
        {attachment.isPaused && (
          <View style={styles.downloadBtn}><Icon name="file-download" size={30} color="#fafafa"/></View>)}
      </Image>

      {attachment.isPending && (<ProgressBar width={width} status={PROGRESS_BAR_PENDING}/>)}
      {attachment.isProcessing && ((<ProgressBar width={width} status={PROGRESS_BAR_PROGRESSING}
        initialProgress={attachment.downloadFile.progress}
        progress={attachment.downloadFile.progress}/>))}

    </TouchableOpacity>

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

});