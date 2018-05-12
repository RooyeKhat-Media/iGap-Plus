import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {openSnackBar} from '../../../actions/snackBar';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    minHeight: 55,
    backgroundColor: '#000000bb',
  },
});

class SnackBar extends Component {
  render() {
    const {snackBar} = this.props;
    if (!snackBar.content) {
      return null;
    }
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}
        onPress={() => this.props.dispatch(openSnackBar(null))}>
        {snackBar.content}
      </TouchableOpacity>
    );
  }
}

SnackBar.propTypes = {};

const mapStateToProps = (state) => {
  return {
    snackBar: state.snackBar,
  };
};

export default connect(mapStateToProps)(SnackBar);