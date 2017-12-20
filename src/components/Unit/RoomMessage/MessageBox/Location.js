import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {getGoogleStaticMap} from '../../../../utils/app';
import {dimensionCalculate} from '../../../../utils/core';
import {min} from 'lodash';
import Device from '../../../../modules/Responsive/Device';

const {width, height} = Device.dimensions.window;
const boxWidth = min([250, (0.7 * width)]);
const boxHeight = min([500, (0.8 * height)]);

export default class Location extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {width, height} = dimensionCalculate(300, 400, boxWidth, boxHeight);
    const uri = getGoogleStaticMap();
    return (
      <View style={styles.container}>
        <Image source={{uri: uri}} style={{width, height}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});