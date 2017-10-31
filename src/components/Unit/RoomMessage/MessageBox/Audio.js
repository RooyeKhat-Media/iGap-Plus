import React from 'react';
import {Image, StyleSheet, Text as BaseText, TouchableOpacity, View} from 'react-native';
import {Icon, ProgressBar} from '../../../BaseUI';
import Text from './Text';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray700, primary} from '../../../../themes/default/index';
import {convertBytes, convertSecendToTime} from '../../../../utils/filters';
import {PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING} from '../../../BaseUI/ProgressBar/index';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default ({message, attachment, showText}) => {
  const uri = 'file://' + attachment.smallThumbnailUri;

  return (
    <View style={styles.container}>
      <View style={styles.fileWrap}>
        <Image source={{uri: uri}} style={[styles.imageWrap]}>
          <TouchableOpacity style={styles.tochableWrap} activeOpacity={1} onPress={attachment.togglePress}>
            {attachment.isProcessing && (
              <View style={styles.btnWrap}><Icon color="#fffaf7" name="close" size={25}/></View>)}
            {attachment.isCompleted && <Icon color={primary} name="play-circle-outline" size={50}/>}
            {attachment.isPaused && (
              <View style={styles.btnWrap}><Icon color="#fffaf7" name="file-download" size={25}/></View>)}
          </TouchableOpacity>
        </Image>

        <View style={styles.fileInfoWrap}>
          <BaseText numberOfLines={1} style={styles.fileName}>{attachment.getName()} </BaseText>
          <BaseText
            style={styles.fileSize}>{convertSecendToTime(attachment.getDuration())} {convertBytes(attachment.getSize().toNumber())}</BaseText>
          <View style={[styles.progressStyle]}>
            {attachment.isPending && (<ProgressBar width={boxWidth - 100} status={PROGRESS_BAR_PENDING}/>)}
            {attachment.isProcessing && ((
              <ProgressBar status={PROGRESS_BAR_PROGRESSING} width={boxWidth - 100}
                initialProgress={attachment.downloadFile.progress}
                progress={attachment.downloadFile.progress}/>))}
          </View>
        </View>
      </View>

      {(message && showText) ? (<Text message={message}/>) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
  fileWrap: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  imageWrap: {
    width: 80, height: 70,
  },
  tochableWrap: {
    backgroundColor: 'rgba(235, 240, 244, 0.6)',
    width: 80, height: 70,
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
    marginTop: 10,
  },
});