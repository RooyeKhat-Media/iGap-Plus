import React from 'react';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import {appTheme} from '../../../themes/default/index';
import {uniqueId} from 'lodash';

import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        background: {
          backgroundColor: 'rgba(100, 100, 100, 0.3)',
          height: 7,
          overflow: 'hidden',
          borderRadius: 2,
        },
        fill: {
          backgroundColor: appTheme.primary,
          height: 7,
          borderRadius: 2,
        },
      },
    },
  ],
  true,
];

class ProgressingProgress extends React.Component {
  state = {
    progress: new Animated.Value(this.props.initialProgress || 0),
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress !== prevProps.progress) {
      this.update();
    }
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {width} = this.props;
    const styles = this.getStyles();
    const fillWidth = {
      transform: [
        {
          translateX: this.state.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [-width, 0],
          }),
        },
      ],
    };

    return (
      <View style={[styles.background, this.props.backgroundStyle, this.props.style, {width: this.props.width}]}>
        <Animated.View style={[styles.fill, this.props.fillStyle, fillWidth]}/>
      </View>
    );
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress,
      useNativeDriver: true,
    }).start();
  }
}

ProgressingProgress.propTypes = {
  width: PropTypes.number.isRequired,
  initialProgress: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProgressingProgress;