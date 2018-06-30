import React, {Component} from 'react';
import {Animated, Easing, View} from 'react-native';
import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        content: {
          backgroundColor: 'rgba(100, 100, 100, 0.3)',
          height: 7,
          overflow: 'hidden',
          borderRadius: 2,
        },
        progress: {
          backgroundColor: appTheme.primary,
          height: 7,
          borderRadius: 2,
        },
      },
    },
  ],
  true,
];


class PendingProgress extends Component {

  constructor() {
    super();
    this.pendingValue = new Animated.Value(0);
  }

  progressAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.pendingValue,
          {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.pendingValue,
          {
            toValue: 1,
            duration: 1200,
            easing: Easing.cubic,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.pendingValue,
          {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          this.pendingValue,
          {
            toValue: 1,
            duration: 750,
            easing: Easing.cubic,
            useNativeDriver: true,
          }
        ),
      ])).start();
  }

  componentDidMount() {
    this.progressAnimation();
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {width} = this.props;
    const styles = this.getStyles();
    const left = {
      transform: [
        {
          translateX: this.pendingValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-width / 1.8, width],
          }),
        },
        {
          scaleX: this.pendingValue,
        },
      ],
    };

    return (
      <View style={[styles.content, {width: width}]}>
        <Animated.View style={[styles.progress, left]}/>
      </View>
    );
  }
}

PendingProgress.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default PendingProgress;

