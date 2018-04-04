import React, {Component} from 'react';
import {KeyboardAvoidingView as KeyboardAvoidingViewReact, StyleSheet} from 'react-native';

class KeyboardAvoidingView extends Component {
  render() {
    return (
      <KeyboardAvoidingViewReact
        style={styles.root}>
        {this.props.children}
      </KeyboardAvoidingViewReact>
    );
  }
}

export default KeyboardAvoidingView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});