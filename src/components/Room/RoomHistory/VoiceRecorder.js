import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {MCIcon} from '../../BaseUI/index';
import i18n from '../../../i18n/en';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {black200, primary} from '../../../themes/default/index';
import BlinkRecorder from '../../General/Camera/BlinkRecorder';
import SoundRecorder from 'react-native-sound-recorder';

const _slideToCancel = 100;
const _slideToLock = 60;

class VoiceRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightMove: 0,
      bottomMove: 0,
      isTouchMode: true,
      voiceRecordUri: null,
    };
    this.firstInit = true;
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.lastY = 0;
  }

  componentDidMount() {
    this.props.onRef(this);
    this.startRecord();
  }

  startRecord = () => {
    SoundRecorder.start(SoundRecorder.PATH_DOCUMENT + '/' + Date.now().toString() + '.mp4');
  };

  stopRecord = (isCancel) => {
    const {onEndRecordSound, onRef} = this.props;
    onRef(null);

    SoundRecorder.stop()
      .then(function(data) {
        if (isCancel || data.duration < 1000) {
          onEndRecordSound(null);
        } else {
          onEndRecordSound(data.path);
        }
      });
  };

  onTouch = (gestureState, touchState) => {
    if (this.state.isTouchMode) {
      if (touchState === 'move') {
        if (Math.abs(gestureState.moveX - this.lastX) > 1 || Math.abs(gestureState.moveY - this.lastY) > 1) {
          if (this.firstInit) {
            this.startX = gestureState.moveX;
            this.startY = gestureState.moveY;
            this.firstInit = false;
          }
          this.lastX = gestureState.moveX;
          this.lastY = gestureState.moveY;

          const rightMove = Math.abs(gestureState.moveX - this.startX).toFixed(0);
          const bottomMove = Math.abs(gestureState.moveY - this.startY).toFixed(0);

          if (rightMove > _slideToCancel) {
            this.stopRecord(true);
          } else if (bottomMove > _slideToLock) {
            this.setState({isTouchMode: false});
          } else {
            this.setState({
              rightMove: rightMove,
              bottomMove: bottomMove,
            });
          }
        }
      } else if (touchState === 'end') {
        this.stopRecord(false);
      }
    }
  };

  get calculateOpacitySlide() {
    const value = this.state.rightMove > 0 ? this.state.rightMove : 1;
    return Number((1 - (  value / _slideToCancel )).toFixed(2));
  }

  get calculateOpacityLock() {
    const value = this.state.bottomMove > 0 ? this.state.bottomMove : 1;
    return Number((1 - (  value / _slideToLock )).toFixed(2));
  }

  render() {
    const {intl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.recordBox}>
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <BlinkRecorder textColor="black"/>
          </View>
          {this.state.isTouchMode ?
            <Text style={[styles.slideText, {
              marginRight: Number(this.state.rightMove),
              opacity: this.calculateOpacitySlide,
            }]}>{intl.formatMessage(i18n.voiceRecorderSlideToCancel)}</Text>
            :
            <Text style={styles.cancelText}
              onPress={() => this.stopRecord(true)}>  {'[ ' + intl.formatMessage(i18n.cancel) + ' ]'}</Text>
          }
        </View>
        <TouchableOpacity style={styles.micWrap} onPress={() => this.stopRecord(false)}>
          <MCIcon name={this.state.isTouchMode ? 'microphone' : 'send'} style={styles.micIcon} size={30}/>
        </TouchableOpacity>

        <View style={[styles.lockWrap, this.state.isTouchMode ? {marginBottom: Number(this.state.bottomMove)} : {}]}>
          <MCIcon name={this.state.isTouchMode ? 'lock-open' : 'lock'} style={styles.micIcon} size={20}/>
          {this.state.isTouchMode &&
          <MCIcon name="chevron-up" style={[styles.micIcon, {opacity: this.calculateOpacityLock}]} size={20}/>
          }
        </View>
      </View>
    );
  }
}

VoiceRecorder.propTypes = {
  intl: intlShape.isRequired,
  onEndRecordSound: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default injectIntl(VoiceRecorder);

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-end',
  },
  recordBox: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
  },
  micWrap: {
    position: 'absolute',
    right: -16,
    bottom: -6,
    width: 80,
    height: 80,
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: primary,
  },
  lockWrap: {
    position: 'absolute',
    right: 10,
    bottom: 80,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 3,
  },
  micIcon: {
    alignSelf: 'center',
  },
  timeLayout: {
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  slideText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    color: black200,
  },
  cancelText: {
    flex: 1,
    textAlign: 'center',
    marginRight: 100,
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
});