import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import MessageElement from './MessageElement';
import {getGoogleStaticMap} from '../../../../utils/app';
import {innerDimension} from '../../../../modules/DimensionCalculator/index';

export default class Location extends MessageElement {
  constructor(props) {
    super(props);
  }

  render() {
    const {isForwarded, location, message} = this.props;
    const uri = getGoogleStaticMap(location.lat, location.lon);
    const {width, height} = innerDimension(message, this.context.boxType, isForwarded);

    return (
      <View style={{width, height}}>
        <Image source={{uri}} style={{width, height}}/>
      </View>);
  }
}

Location.contextTypes = {
  boxType: PropTypes.number,
};