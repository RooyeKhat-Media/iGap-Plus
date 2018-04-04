import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class KeyboardAvoidingView extends Component {
  render() {
    return (
      <View style={styles.root}>
        {this.props.children}
      </View>);
  }
}

export default KeyboardAvoidingView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});