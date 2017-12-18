import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {toHHMMSS} from '../../../utils/core';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  textTimer: {
    alignSelf: 'center',
    minWidth: 40,
    marginRight: 5,
    fontSize: 16,
  },
  circle: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

class BlinkRecorder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showRedCircle: false,
      timeValue: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(previousState => {
        return {
          showRedCircle: !previousState.showRedCircle,
          timeValue: previousState.showRedCircle ? previousState.timeValue + 1 : previousState.timeValue,
        };
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.row}>
        <View
          style={[styles.circle, this.state.showRedCircle ? {backgroundColor: 'red'} : {backgroundColor: 'white'}]}/>
        <Text style={[styles.textTimer, {color: this.props.textColor}]}>{toHHMMSS(this.state.timeValue)}</Text>
      </View>
    );
  }
}

BlinkRecorder.propTypes = {
  textColor: PropTypes.string,
};

export default BlinkRecorder;