import React from 'react';
import PropTypes from 'prop-types';
import {Image as NativeImage, View} from 'react-native';
import Text from './Text';
import {prependFileProtocol} from '../../../../utils/core';
import MessageElement from './MessageElement';
import {innerDimension} from '../../../../modules/DimensionCalculator/index';

export default class Image extends MessageElement {

  render() {
    const {message, showText, isForwarded, downloadedFile, smallThumbnailUri} = this.props;

    const imageWidth = message.pickedFile ? message.pickedFile.width : message.attachment.getWidth();
    const imageHeight = message.pickedFile ? message.pickedFile.height : message.attachment.getHeight();

    const hasImageDimension = imageWidth && imageHeight;
    const uri = this.isCompleted ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const {width, height} = innerDimension(message, this.context.boxType, isForwarded);

    const content = (hasImageDimension) ? this.renderControlBar(
      width,
      <View style={{width, height}}>
        {uri && (<NativeImage source={{uri: uri}} style={{width, height}}/>)}
      </View>
      ,
      {
        completedIcon: null,
      }
    ) : null;

    return (<View style={{width: hasImageDimension ? width : null}}>
      {content}

      {(message.message && showText) ? (<Text message={message.message} showText={showText}/>) : null}
    </View>);
  }
}

Image.propTypes = {
  secondaryWidth: PropTypes.number.isRequired,
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Image.contextTypes = {
  boxType: PropTypes.number,
};
