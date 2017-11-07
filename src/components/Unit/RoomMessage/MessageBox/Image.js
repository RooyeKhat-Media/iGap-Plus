import React from 'react';
import PropTypes from 'prop-types';
import {Image as NativeImage, View} from 'react-native';
import Text from './Text';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {dimensionCalculate, prependFileProtocol} from '../../../../utils/core';
import MessageElement from './MessageElement';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default class Image extends MessageElement {

  render() {
    const {message, attachment, showText, downloadedFile, smallThumbnailUri} = this.props;

    const {width, height} = dimensionCalculate(attachment.getWidth(), attachment.getHeight(), boxWidth, boxHeight);
    const uri = this.isCompleted ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const content = this.renderControlBar(
      width,
      <View style={{width, height}}>
        {uri && (<NativeImage source={{uri: uri}} style={{width, height}}/>)}
      </View>
      ,
      {
        completedIcon: null,
      }
    );

    return (<View style={{width}}>
      {content}

      {(message && showText) ? (<Text message={message}/>) : null}
    </View>);
  }
}

Image.propTypes = {
  message: PropTypes.string.isRequired,
  attachment: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};