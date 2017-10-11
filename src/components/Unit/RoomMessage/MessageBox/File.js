import React from 'react';
import {StyleSheet, Text as BaseText, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Icon, ProgressBar} from '../../../BaseUI';
import Text from './Text';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray700, primary} from '../../../../themes/default/index';
import {convertBytes} from '../../../../utils/filters';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default ({message, attachment}) => {

  return (
    <View style={styles.container}>
      <View style={styles.fileWrap}>

        <TouchableOpacity style={styles.fileIconWrap} activeOpacity={1} onPress={attachment.togglePress}>

          {attachment.isPending && (<ActivityIndicator size="large"/>)}
          {attachment.isProcessing &&
          (<View style={styles.btnWrap}>
            <Icon color="#fffaf7" name="close" size={25}/>
          </View>)}
          {attachment.isCompleted &&
          (<View style={styles.btnWrap}>
            <Icon color="#fffaf7" name="insert-drive-file" size={25}/>
          </View>)}
          {attachment.isPaused &&
          (<View style={styles.btnWrap}>
            <Icon color="#fffaf7" name="file-download" size={25}/>
          </View>)
          }

        </TouchableOpacity>

        <View style={styles.fileInfoWrap}>
          <BaseText numberOfLines={1} style={styles.fileName}>{attachment.getName()} </BaseText>
          <BaseText style={styles.fileSize}>{convertBytes(attachment.getSize().toNumber())}</BaseText>

          {attachment.isProcessing && ((<ProgressBar
            style={[styles.progressStyle]}
            width={boxWidth - 100}
            initialProgress={attachment.downloadFile.progress}
            progress={attachment.downloadFile.progress}/>))}

        </View>
      </View>
      {message ? (<Text message={message}/>) : null}
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
  fileIconWrap: {
    width: 80, height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf0f4',
    borderRadius: 3,
  },
  btnWrap: {
    backgroundColor: '#a2b8c6',
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