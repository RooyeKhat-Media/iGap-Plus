import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import PendingProgress from './PendingProgress';
import ProgressingProgress from './ProgressingProgress';

export const PROGRESS_BAR_PENDING = 0;
export const PROGRESS_BAR_PROGRESSING = 1;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 2,
    left: 2,
    right: 2,
  },
});

class ProgressBar extends React.Component {
  render() {
    const {status, width} = this.props;
    return (
      <View style={[styles.root, {width: width}]}>
        {status === PROGRESS_BAR_PROGRESSING ? <ProgressingProgress  {...this.props} />
          : <PendingProgress  {...this.props} />}
      </View>
    );
  }
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  status: PropTypes.oneOf([PROGRESS_BAR_PENDING, PROGRESS_BAR_PROGRESSING]).isRequired,
  initialProgress: PropTypes.number,
  progress: PropTypes.number,
};

export default ProgressBar;