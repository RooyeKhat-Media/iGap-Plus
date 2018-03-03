import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {Icon} from '../../BaseUI';
import Video from 'react-native-video';
import SeekBarComponent from '../SeekBar/index';
import {toHHMMSS} from '../../../utils/core';

class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      currentTime: '0',
      duration: '0',
      mute: false,
      showControlBar: true,
      progress: 0,
    };
    this.width = 300;
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styles);
  };

  togglePlay = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };

  toggleMute = () => {
    this.setState({
      mute: !this.state.mute,
    });
  };

  toggleControlBar = () => {
    this.setState({
      showControlBar: !this.state.showControlBar,
    });
  };

  onLoad = (data) => {
    this.setState({
      duration: toHHMMSS(data.duration),
    });
    this.maxTime = parseFloat(data.duration).toFixed(0);
  };

  onProgress = (data) => {
    this.setState({
      currentTime: toHHMMSS(Number(data.currentTime.toFixed(0))),
      progress: this.getCurrentTimePercentage(data.currentTime),
    });
  };

  getCurrentTimePercentage = (curentTime) => {
    if (curentTime > 0) {
      return Number(((parseFloat(curentTime)) / this.maxTime));
    }
    return 0;
  };

  onEnd = () => {
    this.setState({
      paused: true,
    });
    this.props.goBack();
  };

  onError = () => {
    this.props.goBack();
  };

  onSeek = (value) => {
    const sec = Number((value * this.maxTime).toFixed(0));
    this.player.seek(sec);
    this.setState({
      currentTime: toHHMMSS(sec),
    });
  };

  render() {
    const {uri, fileName, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.toggleControlBar()}>
        <Video
          source={{uri: uri}}
          ref={(ref) => this.player = ref}
          rate={1.0}
          volume={1.0}
          muted={this.state.mute}
          paused={this.state.paused}
          resizeMode="contain"  //contain  cover  stretch
          repeat={false}
          playInBackground={false}
          playWhenInactive={false}
          ignoreSilentSwitch={'ignore'}
          progressUpdateInterval={500}
          onLoad={this.onLoad}
          onProgress={this.onProgress}
          onEnd={this.onEnd}
          onError={this.onError}
          style={styles.backgroundVideo}/>

        {
          this.state.showControlBar &&
          <View style={styles.bottomOverlay} onLayout={(event) => this.width = event.nativeEvent.layout.width}>
            <SeekBarComponent width={this.width} onSeek={this.onSeek} progress={this.state.progress}/>
            <View style={styles.row}>
              <TouchableOpacity style={styles.play} onPress={() => this.togglePlay()}>
                <Icon name={this.state.paused ? 'play-arrow' : 'pause'} size={32} color={'white'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.play} onPress={() => this.toggleMute()}>
                <Icon name={this.state.mute ? 'volume-mute' : 'volume-up'} size={32} color={'white'}/>
              </TouchableOpacity>
              <Text style={styles.timer}>{this.state.currentTime + ' / ' + this.state.duration}</Text>
              <Text style={styles.fileName} numberOfLines={1} ellipsizeMode={'middle'}>{fileName}</Text>
              <TouchableOpacity style={styles.close} onPress={() => goBack()}>
                <Icon name="close" size={32} color={'white'}/>
              </TouchableOpacity>
            </View>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

VideoPlayerComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  uri: PropTypes.string,
  fileName: PropTypes.string,
};

export default VideoPlayerComponent;