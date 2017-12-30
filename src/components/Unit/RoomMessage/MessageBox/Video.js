import React from 'react';
import PropTypes from 'prop-types';

import {Image, View} from 'react-native';
import Text from './Text';
import {prependFileProtocol} from '../../../../utils/core';
import MessageElement from './MessageElement';
import {innerDimension} from '../../../../modules/DimensionCalculator/index';


export default class Video extends MessageElement {
  render() {
    const {message, showText, isForwarded, downloadedFile, smallThumbnailUri} = this.props;

    const {width, height} = innerDimension(message, this.context.boxType, isForwarded);
    const uri = this.isCompleted ? prependFileProtocol(downloadedFile.uri) : prependFileProtocol(smallThumbnailUri);

    const content = this.renderControlBar(
      width,
      <View style={{width, height}}>
        {uri && (<Image source={{uri: uri}} style={{width, height}}/>)}
      </View>
    );

    return (<View style={{width}}>
      {content}
      {(message.message && showText) ? (<Text showText={showText} message={message.message}/>) : null}
    </View>);
  }
}

Video.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  downloadedFile: PropTypes.object,
  smallThumbnailUri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Video.contextTypes = {
  boxType: PropTypes.number,
};
