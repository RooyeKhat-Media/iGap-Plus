import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Text from './Text';
import {prependFileProtocol} from '../../../../utils/core';
import MessageElement from './MessageElement';
import {innerDimension} from '../../../../modules/DimensionCalculator';

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
    const {message, showText, isForwarded, downloadedFile, smallThumbnailUri} = this.props;
    const {playGif} = this.state;

    const imageWidth = message.pickedFile ? message.pickedFile.width : message.attachment.getWidth();
    const imageHeight = message.pickedFile ? message.pickedFile.height : message.attachment.getHeight();
    const hasImageDimension = imageWidth && imageHeight;

    const uri = (this.isCompleted && playGif) ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const {width, height} = innerDimension(message, this.context.boxType, isForwarded);

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
      {(message && showText) ? (<Text message={message.message} showText={showText}/>) : null}
    </View>);
  }
}
Gif.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Gif.contextTypes = {
  boxType: PropTypes.number,
};