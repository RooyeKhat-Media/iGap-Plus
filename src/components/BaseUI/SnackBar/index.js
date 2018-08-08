import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {openSnackBar} from '../../../actions/snackBar';
import {uniqueId} from 'lodash';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {MCIcon} from '../index';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          minHeight: 55,
          backgroundColor: 'black',
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
        },
        container: {
          flex: 1,
          alignSelf: 'center',
          fontSize: 16,
          color: 'white',
        },
        iconClose: {
          color: 'white',
          alignSelf: 'center',
        },
      },
    },
  ],
  true,
];

class SnackBar extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  componentWillReceiveProps(nextProps) {
    const {snackBar} = nextProps;
    if (snackBar.content !== null) {
      setTimeout(() => {
        this.props.dispatch(openSnackBar(null));
      }, 3000);
    }
  }

  render() {
    const styles = this.getStyles();
    const {snackBar} = this.props;
    if (!snackBar.content) {
      return null;
    }
    return (
      <TouchableOpacity style={styles.root} activeOpacity={1} onPress={() => this.props.dispatch(openSnackBar(null))}>
        <Text style={styles.container}>{snackBar.content}</Text>
        <MCIcon name="close" style={styles.iconClose} size={24}/>
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