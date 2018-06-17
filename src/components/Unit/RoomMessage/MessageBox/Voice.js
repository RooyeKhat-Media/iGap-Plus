import React from 'react';
import PropTypes from 'prop-types';
import {min, uniqueId} from 'lodash';
import {Text as BaseText, View} from 'react-native';
import Device from '../../../../modules/Responsive/Device';
import {convertBytes, convertSecendToTime} from '../../../../utils/filters';
import MessageElement from './MessageElement';
import {FILE_MANAGER_DOWNLOAD_STATUS} from '../../../../constants/fileManager';
import SoundPlayer from '../../../../containers/Unit/SoundPlayer';
import {SOUND_PLAYER_BOX_MESSAGE} from '../../../../constants/app';
import {appTheme} from '../../../../themes/default/index';
import {Icon} from '../../../BaseUI';
import {IRANSans_Medium} from '../../../../constants/fonts/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Voice extends MessageElement {
  getStyle = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {attachment, downloadedFile} = this.props;
    const styles = this.getStyle();
    const controlBar = this.renderControlBar(
      boxWidth,
      <View style={styles.thumbnail}>
        <Icon size={20} name="keyboard-voice"/>
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
            onPress={this.props.onPress}
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