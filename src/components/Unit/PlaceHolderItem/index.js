import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PlaceHolderComponent from '../../BaseUI/PlaceHolder/index';
import {random, uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class PlaceHolderItemComponent extends PureComponent {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const widthTitle = random(12, 16) * 10;
    const widthSubTitle = random(16, 22) * 10;

    const styles = this.getStyles();

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

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          flexDirection: 'row',
          backgroundColor: appTheme.pageBackground,
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

      },
    },
  ],
  true,
];