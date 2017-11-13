import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import styles from './index.styles';

class LoadingDots extends Component {
  render() {
    const {dotStyle} = this.props;
    return (
      <View style={styles.container} {...this.props} >
        <AnimatedDot key="dot-1" style={dotStyle} delayTime={0}/>
        <AnimatedDot key="dot-2" style={dotStyle} delayTime={200}/>
        <AnimatedDot key="dot-3" style={dotStyle} delayTime={400}/>
      </View>
    );
  }
}

LoadingDots.propTypes = {
  dotStyle: PropTypes.object,
};

class AnimatedDot extends Component {
  constructor(props) {
    super(props);
    this.fadeAnimate = new Animated.Value(0);
  }

  componentDidMount() {
    const {delayTime} = this.props;
    Animated.sequence([
      Animated.delay(delayTime),
      Animated.loop(
        Animated.sequence([
          Animated.timing(
            this.fadeAnimate,
            {
              toValue: 1,
              duration: 400,
              // useNativeDriver: true,
            }
          ),
          Animated.timing(
            this.fadeAnimate,
            {
              toValue: 0,
              duration: 400,
              // useNativeDriver: true,
            }
          ),
        ]),
      )]).start();
  }

  render() {
    const {style, key} = this.props;
    let fadeAnimate = this.fadeAnimate;
    return (
      <Animated.View key={key} style={[styles.dot, style, {opacity: fadeAnimate}]}/>
    );
  }
}

AnimatedDot.propTypes = {
  delayTime: PropTypes.number.isRequired,
  style: PropTypes.object,
  key: PropTypes.string,
};

export default LoadingDots;