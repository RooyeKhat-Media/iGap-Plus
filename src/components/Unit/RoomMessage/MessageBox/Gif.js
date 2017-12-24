import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Text from './Text';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';
import {prependFileProtocol} from '../../../../utils/core';
import MessageElement from './MessageElement';
import {dimensionCalculate} from '../../../../modules/DimensionCalculator/util';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default class Gif extends MessageElement {

  constructor(props) {
    super(props);
    this.state = {
      playGif: false,
    };
  }

  onPress = () => {
    const {onPress} = this.props;
    if (!this.isCompleted) {
      onPress();
    } else {
      this.setState(prevState => {
        return {
          playGif: !prevState.playGif,
        };
      });
    }
  };

  render() {
    const {message, showText, downloadedFile, smallThumbnailUri, pickedFile, attachment} = this.props;
    const {playGif} = this.state;

    const imageWidth = pickedFile ? pickedFile.width : attachment.getWidth();
    const imageHeight = pickedFile ? pickedFile.height : attachment.getHeight();
    const hasImageDimension = imageWidth && imageHeight;

    const uri = (this.isCompleted && playGif) ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const {width, height} = dimensionCalculate(imageWidth, imageHeight, boxWidth, boxHeight);

    const content = (hasImageDimension) ? this.renderControlBar(
      width,
      <View style={{width, height}}>
        {uri && (<Image source={{uri: uri}} style={{width, height}}/>)}
      </View>
      ,
      {
        completedIcon: !playGif ? 'gif' : null,
        onPress: this.onPress,
      }
    ) : null;

    return (<View style={{width: hasImageDimension ? width : null}}>
      {content}

      {(message && showText) ? (<Text message={message} showText={showText}/>) : null}
    </View>);
  }
}
Gif.propTypes = {
  message: PropTypes.string.isRequired,
  attachment: PropTypes.object,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};