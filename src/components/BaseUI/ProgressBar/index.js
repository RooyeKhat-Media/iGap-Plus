import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import PendingProgress from './PendingProgress';
import ProgressingProgress from './ProgressingProgress';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {uniqueId} from 'lodash';

export const PROGRESS_BAR_PENDING = 0;
export const PROGRESS_BAR_PROGRESSING = 1;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {},
      },
    },
  ],
  true,
];

class ProgressBar extends React.Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {status, width} = this.props;
    const styles = this.getStyles();
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