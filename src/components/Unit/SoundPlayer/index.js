import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text as BaseText, TouchableWithoutFeedback, View} from 'react-native';
import {Icon} from '../../../components/BaseUI';
import {convertSecendToTime} from '../../../utils/filters';
import {prependFileProtocol} from '../../../utils/core';
import {SOUND_PLAYER_BOX_MESSAGE, SOUND_PLAYER_BOX_TOOLBAR} from '../../../constants/app';
import styleSheet from './index.styles';
import {appTheme} from '../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';

export default class SoundPlayerComponent extends React.PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  renderMessage() {
    const {title, thumbnail, duration, currentTime, playing, togglePlay} = this.props;
    const thumbnailUri = prependFileProtocol(thumbnail);
    const styles = this.getStyles();
    return (<TouchableWithoutFeedback onPress={togglePlay}>
      <View style={styles.fileWrap}>
        {thumbnailUri && (<View style={styles.thumbnail}>
          <Image Image source={{uri: thumbnailUri}} style={styles.thumbnail}/>
        </View>)}
        <View style={styles.fileInfoWrap}>
          <BaseText numberOfLines={1} style={styles.fileName}>
            {title}
          </BaseText>
          <View style={styles.controlBox}>
            {playing ? (<Icon name="stop" color={appTheme.icon}/>) : (<Icon name="play-arrow" color={appTheme.icon}/>)}
            <BaseText style={styles.fileSize}>
              {convertSecendToTime(currentTime)} - {convertSecendToTime(duration)}
            </BaseText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>);
  }

  renderToolbar() {
    const {title, duration, currentTime, playing, togglePlay} = this.props;
    if (!playing) {
      return null;
    }
    const styles = this.getStyles();
    return (
      <TouchableWithoutFeedback onPress={togglePlay}>
        <View style={styles.headerWrap}>
          <View style={styles.headerSoundName}>
            {playing ? (<Icon name="stop" color={appTheme.icon}/>) : (<Icon name="play-arrow" color={appTheme.icon}/>)}
            <BaseText numberOfLines={1} style={styles.fileName}>
              {title}
            </BaseText>
          </View>
          <View style={styles.hederTimer}>
            <BaseText style={styles.fileSize}>
              {convertSecendToTime(currentTime)}
              -
              {convertSecendToTime(duration)}
            </BaseText>
          </View>
        </View>
      </TouchableWithoutFeedback>);
  }

  render() {
    const {type} = this.props;
    switch (type) {
      case SOUND_PLAYER_BOX_MESSAGE:
        return this.renderMessage();
      case SOUND_PLAYER_BOX_TOOLBAR:
        return this.renderToolbar();
    }
    return null;
  }
}

SoundPlayerComponent.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  playing: PropTypes.bool,
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  togglePlay: PropTypes.func.isRequired,
};