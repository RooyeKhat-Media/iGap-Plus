import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class LoadingDots extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {style} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.container} {...this.props} >
        <AnimatedDot style={style} delayTime={0}/>
        <AnimatedDot style={style} delayTime={200}/>
        <AnimatedDot style={style} delayTime={400}/>
      </View>
    );
  }
}

LoadingDots.propTypes = {
  style: PropTypes.object,
};

class AnimatedDot extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

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
    const styles = this.getStyles();
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