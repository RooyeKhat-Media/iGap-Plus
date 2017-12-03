import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {blackTransparent} from '../../../themes/default/index';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: blackTransparent,
    borderRadius: 5,
  },
  textTimer: {
    alignSelf: 'center',
    minWidth: 40,
    marginRight: 5,
    color: 'white',
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

  toHHMMSS = (secs) => {
    let sec_num = parseInt(secs, 10);
    let hours = Math.floor(sec_num / 3600) % 24;
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;
    return [hours, minutes, seconds]
      .map(v => v < 10 ? '0' + v : v)
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };

  render() {
    return (
      <View style={styles.row}>
        <View
          style={[styles.circle, this.state.showRedCircle ? {backgroundColor: 'red'} : {backgroundColor: 'white'}]}/>
        <Text style={styles.textTimer}>{this.toHHMMSS(this.state.timeValue)}</Text>
      </View>
    );
  }
}

export default BlinkRecorder;