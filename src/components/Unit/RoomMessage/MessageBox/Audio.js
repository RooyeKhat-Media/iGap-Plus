import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text as BaseText, View} from 'react-native';
import Text from './Text';
import {min, uniqueId} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {appTheme} from '../../../../themes/default/index';
import {convertBytes, convertSecendToTime} from '../../../../utils/filters';
import MessageElement from './MessageElement';
import {prependFileProtocol} from '../../../../utils/core';
import {IRANSans_Medium} from '../../../../constants/fonts/index';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../../../constants/fileManager';
import SoundPlayer from '../../../../containers/Unit/SoundPlayer';
import {SOUND_PLAYER_BOX_MESSAGE} from '../../../../constants/app';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Audio extends MessageElement {
  getStyle = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyle();
    const {message, attachment, pickedFile, showText, smallThumbnailUri, downloadedFile} = this.props;
    const uri = prependFileProtocol(smallThumbnailUri);

    const controlBar = this.renderControlBar(
      boxWidth,
      <View style={styles.thumbnail}>
        {uri && (<Image source={{uri: uri}} style={styles.thumbnail}/>)}
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
            duration={attachment.getDuration()}
            thumbnail={smallThumbnailUri}/>) :
          (<View style={styles.fileWrap}>
            {controlBar}
            <View style={styles.fileInfoWrap}>
              <BaseText numberOfLines={1} style={styles.fileName}>
                {attachment && attachment.getName() || pickedFile && pickedFile.fileName}
              </BaseText>
              <BaseText style={styles.fileSize}>
                {attachment && convertSecendToTime(attachment.getDuration())} {attachment && convertBytes(attachment.getSize().toNumber())}
              </BaseText>
              {this.renderProgressBar(boxWidth - 100, styles.progressStyle)}
            </View>
          </View>)}
        {(message && showText) ? (<Text showText={showText} message={message}/>) : null}
      </View>
    );
  }
}


Audio.propTypes = {
  message: PropTypes.string.isRequired,
  attachment: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  waveformThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
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
        },
        fileInfoWrap: {
          flex: 1,
          paddingLeft: 10,
          paddingRight: 5,
        },
        fileName: {
          ...IRANSans_Medium,
          fontSize: 14,
          color: appTheme.primary,
        },
        fileSize: {
          fontSize: 12,
          color: appTheme.secondaryText,
        },
        progressStyle: {
          marginTop: 10,
        },
      },
    },
  ],
  true,
];