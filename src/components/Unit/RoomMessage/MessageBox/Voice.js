import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text as BaseText, View} from 'react-native';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {gray700} from '../../../../themes/default/index';
import {convertSecendToTime} from '../../../../utils/filters';
import MessageElement from './MessageElement';
import {prependFileProtocol} from '../../../../utils/core';

const {width} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);

export default class Voice extends MessageElement {

  render() {
    const {attachment, waveformThumbnailUri} = this.props;
    const uri = prependFileProtocol(waveformThumbnailUri);

    const controlBar = this.renderControlBar(
      boxWidth,
      <View style={styles.thumbnail}/>,
      {
        renderProgressBar: false,
      }
    );

    return (
      <View style={styles.fileWrap}>
        {controlBar}

        <View style={styles.fileInfoWrap}>
          {uri && (<Image source={{uri: uri}} style={[styles.imageWrap]}/>)}

          <BaseText style={styles.fileDuration}>
            {convertSecendToTime(attachment.getDuration())}
          </BaseText>
          {this.renderProgressBar(boxWidth - 100, styles.progressStyle)}
        </View>
      </View>

    );
  }
}

Voice.propTypes = {
  attachment: PropTypes.object.isRequired,
  downloadedFile: PropTypes.object,
  waveformThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
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
  thumbnail: {
    width: 80,
    height: 70,
  },
  fileInfoWrap: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fileDuration: {
    fontSize: 12,
    color: gray700,
  },
  progressStyle: {
    marginTop: 5,
  },
});
