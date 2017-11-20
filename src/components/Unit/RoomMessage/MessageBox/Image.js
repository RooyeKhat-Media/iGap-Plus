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

  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 0,
      imageHeight: 0,
    };
  }

  async componentWillMount() {
    const {attachment, pickedFile} = this.props;
    if (attachment) {
      this.setState({
        imageWidth: attachment.getWidth(),
        imageHeight: attachment.getHeight(),
      });
    } else if (pickedFile) {
      NativeImage.getSize(prependFileProtocol(pickedFile.fileUri), (width, height) => {
        this.setState({
          imageWidth: width,
          imageHeight: height,
        });
      });
    }
  }

  render() {
    const {message, showText, downloadedFile, smallThumbnailUri} = this.props;
    const {imageWidth, imageHeight} = this.state;
    const hasImageDimension = imageWidth && imageHeight;
    const uri = this.isCompleted ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const {width, height} = dimensionCalculate(imageWidth, imageHeight, boxWidth, boxHeight);

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

      {(message && showText) ? (<Text message={message} showText={showText}/>) : null}
    </View>);
  }
}

Image.propTypes = {
  message: PropTypes.string.isRequired,
  attachment: PropTypes.object,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};