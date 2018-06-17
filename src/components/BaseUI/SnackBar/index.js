import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {openSnackBar} from '../../../actions/snackBar';
import {uniqueId} from 'lodash';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          minHeight: 55,
          backgroundColor: '#000000bb',
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

  render() {
    const styles = this.getStyles();
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