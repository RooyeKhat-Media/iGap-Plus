import React from 'react';
import {Image, StyleSheet, Text as BaseText, TouchableOpacity, View} from 'react-native';
import {Icon, ProgressBar} from '../../../BaseUI';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray700, primary} from '../../../../themes/default/index';
import {convertSecendToTime} from '../../../../utils/filters';
import {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../../BaseUI/ProgressBar/index';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default ({attachment}) => {
  const uri = 'file://' + attachment.waveformThumbnailUri;

  return (
    <View style={styles.fileWrap}>
      <TouchableOpacity style={styles.tochableWrap} activeOpacity={1} onPress={attachment.togglePress}>
        {attachment.isProcessing && (
          <View style={styles.btnWrap}><Icon color="#fffaf7" name="close" size={25}/></View>)}
        {attachment.isCompleted && <Icon color={primary} name="play-circle-outline" size={50}/>}
        {attachment.isPaused && (
          <View style={styles.btnWrap}><Icon color="#fffaf7" name="file-download" size={25}/></View>)}
      </TouchableOpacity>

      <View style={styles.fileInfoWrap}>
        <Image source={{uri: uri}} style={[styles.imageWrap]}/>

        <BaseText
          style={styles.fileSize}>{convertSecendToTime(attachment.getDuration())}</BaseText>
        <View style={[styles.progressStyle]}>
          {attachment.isPending && (<ProgressBar width={boxWidth - 100} status={PROGRESS_BAR_PENDING}/>)}
          {attachment.isProcessing && ((<ProgressBar status={PROGRESS_BAR_PROGRESSING} width={boxWidth - 100}
            initialProgress={attachment.downloadFile.progress}
            progress={attachment.downloadFile.progress}/>))}
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  fileWrap: {
    width: 250,
    flexDirection: 'row',
    marginBottom: 3,
  },
  imageWrap: {
    flex: 1,
  },
  tochableWrap: {
    width: 60,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  btnWrap: {
    backgroundColor: 'rgba(162, 184, 198, 0.6)',
    borderRadius: 25,
    padding: 10,
  },
  fileInfoWrap: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fileName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: primary,
  },
  fileSize: {
    fontSize: 12,
    color: gray700,
  },
  progressStyle: {
    marginTop: 5,
  },
});
