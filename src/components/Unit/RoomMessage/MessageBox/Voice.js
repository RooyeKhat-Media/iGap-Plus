import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text as BaseText, View} from 'react-native';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray700} from '../../../../themes/default/index';
import {convertBytes, convertSecendToTime} from '../../../../utils/filters';
import MessageElement from './MessageElement';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../../../constants/fileManager';
import SoundPlayer from '../../../../containers/Unit/SoundPlayer';
import {SOUND_PLAYER_BOX_MESSAGE} from '../../../../constants/app';
import {primary} from '../../../../themes/default/index';
import {Icon} from '../../../BaseUI';
import {IRANSans_Medium} from '../../../../constants/fonts/index';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Voice extends MessageElement {

  render() {
    const {attachment, downloadedFile} = this.props;

    const controlBar = this.renderControlBar(
      boxWidth,
      <View style={styles.thumbnail}>
        <Icon size={20} name="keyboard-voice" />
      </View>
      ,
      {
        renderProgressBar: false,
      }
    );

    return (
      <View style={styles.container}>
        {downloadedFile && downloadedFile.status === FILE_MANAGER_DOWNLOAD_STATUS.COMPLETED ?
          (<SoundPlayer
            type={SOUND_PLAYER_BOX_MESSAGE}
            uri={downloadedFile.uri}
            title={attachment.getName()}
            duration={attachment.getDuration()}/>) :
          (<View style={styles.fileWrap}>
            {controlBar}
            <View style={styles.fileInfoWrap}>
              <BaseText numberOfLines={1} style={styles.fileName}>
                {attachment && attachment.getName()}
              </BaseText>
              <BaseText style={styles.fileSize}>
                {attachment && convertSecendToTime(attachment.getDuration())} {attachment && convertBytes(attachment.getSize().toNumber())}
              </BaseText>
              {this.renderProgressBar(boxWidth - 100, styles.progressStyle)}
            </View>
          </View>)}
      </View>
    );
  }
}

Voice.propTypes = {
  attachment: PropTypes.object,
  downloadedFile: PropTypes.object,
  waveformThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
  fileWrap: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  thumbnail: {
    width: 80,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileInfoWrap: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fileName: {
    ...IRANSans_Medium,
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