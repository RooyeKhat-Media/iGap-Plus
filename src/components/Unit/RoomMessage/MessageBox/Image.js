import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from './Text';
import {ceil, max, min} from 'lodash';

import Device from '../../../../modules/Responsive/Device';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default ({message, attachment}) => {
  // const {width, height} = dimensionCalculate(attachment.getWidth(), attachment.getHeight(), boxWidth, boxHeight);
  const uri = attachment.downloadFile && attachment.downloadFile.uri ? attachment.downloadFile.uri : attachment.smallThumbnailUri;

  const width = max([100, min([boxWidth, attachment.getWidth()])]);
  const height = max([100, min([boxHeight, ceil(width * attachment.getHeight() / attachment.getWidth())])]);

  return (<View style={[styles.container, {width}]}>
    <Image source={{uri: 'file://' + uri}} style={[styles.imageWrap, {width, height}]}>
      <View>
        {/*<Icon name="download" />*/}
      </View>
    </Image>
    {message ? (<Text message={message}/>) : null}
  </View>);
};

const styles = StyleSheet.create({
  container: {},
  imageWrap: {},
});