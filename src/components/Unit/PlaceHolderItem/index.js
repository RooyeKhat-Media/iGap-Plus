import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceHolderComponent from '../../BaseUI/PlaceHolder/index';
import {random} from 'lodash';
import {white} from '../../../themes/default/index';

class PlaceHolderItemComponent extends PureComponent {
  render() {
    const widthTitle = random(120, 160);
    const widthSubTitle = random(160, 220);

    return (
      <View style={styles.root}>
        <View style={styles.circle}/>
        <View style={styles.sub1}>
          <PlaceHolderComponent width={widthTitle} height={20}/>
          <PlaceHolderComponent width={widthSubTitle} height={20}/>
        </View>
      </View>
    );
  }
}

PlaceHolderItemComponent.propTypes = {};

export default PlaceHolderItemComponent;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: white,
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#e7e7e7',
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  sub1: {
    flex: 1,
  },

});