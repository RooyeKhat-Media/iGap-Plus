import React from 'react';
import PropTypes from 'prop-types';
import {ActionButton} from '../../BaseUI';
import {
  Animated,
  Easing,
} from 'react-native';

class ScrollDown extends React.PureComponent {

  constructor(args) {
    super(args);
    this.offsetY = 0;
    this.isActive = false;
    this.state = {
      isActive: false,
    };
    this.animatedValue = new Animated.Value(0);
    this.firstEnter = false;
  }

  onScroll = (event, offsetX, offsetY) => {
    if (Math.abs(offsetY - this.offsetY) < 150) {
      return;
    }
    if (!this.isActive && offsetY > 300 && (this.offsetY - offsetY) > 0) {
      this.isActive = true;
      this.setState({isActive: true});
    } else if (this.isActive && (offsetY < 300 || (this.offsetY - offsetY) < 0)) {
      this.isActive = false;
      this.setState({isActive: false});
    }
    this.offsetY = offsetY;
  };

  animatePop() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start();
  }

  render() {
    const {scrollToEnd} = this.props;
    const {isActive} = this.state;

    if (this.firstEnter) {
      this.animatePop();
    } else {
      this.firstEnter = true;
      return null;
    }
    let UpDown;
    if (isActive) {
      UpDown = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
      });
    } else {
      UpDown = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
      });
    }

    return (
      <Animated.View style={{
        width: 100, // an increasing animated value for the width here in the real app
        height: 100,
        position: 'absolute',
        bottom: 50,
        right: 0,
        transform: [{
          translateY: UpDown,
        }],
      }}>
        <ActionButton
          onPress={scrollToEnd}
          icon="keyboard-arrow-down"/>
      </Animated.View>
    );

  }
}

ScrollDown.propTypes = {
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  scrollToEnd: PropTypes.func.isRequired,
};

export default ScrollDown;