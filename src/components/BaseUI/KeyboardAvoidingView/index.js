import React, {Component} from 'react';
import {View} from 'react-native';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {uniqueId} from 'lodash';

class KeyboardAvoidingView extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        {this.props.children}
      </View>);
  }
}

export default KeyboardAvoidingView;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
        },
      },
    },
  ],
  true,
];
