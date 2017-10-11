import React from 'react';
import PropTypes from 'prop-types';
import {Animated, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    height: 7,
    overflow: 'hidden',
    borderRadius: 2,
  },
  fill: {
    backgroundColor: '#3298ee',
    height: 7,
    borderRadius: 2,
  },
});

class ProgressBar extends React.Component {
  state = {
    progress: new Animated.Value(this.props.initialProgress || 0),
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress !== prevProps.progress) {
      this.update();
    }
  }

  render() {
    const fillWidth = this.state.progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0, this.props.width],
    });

    return (
      <View style={[styles.background, this.props.backgroundStyle, this.props.style, {width: this.props.width}]}>
        <Animated.View style={[styles.fill, this.props.fillStyle, {width: fillWidth}]}/>
      </View>
    );
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress,
    }).start();
  }
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  initialProgress: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;