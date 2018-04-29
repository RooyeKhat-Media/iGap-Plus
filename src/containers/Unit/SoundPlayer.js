import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SoundPlayerComponent from '../../components/Unit/SoundPlayer/index';
import {SOUND_PLAYER_BOX_MESSAGE, SOUND_PLAYER_BOX_TOOLBAR} from '../../constants/app';
import BaseSoundPlayer from '../../modules/SoundPlayer/index';

class SoundPlayer extends React.PureComponent {

  toggle = () => {
    const {player, onPress, uri, title, duration} = this.props;
    if (!uri) {
      BaseSoundPlayer.instance.stop();
    } else if (!player || !player.playing) {
      BaseSoundPlayer.instance.play(uri, title, duration);
      if (onPress) {
        onPress();
      }
    } else {
      BaseSoundPlayer.instance.pause();
    }
  };

  render() {
    const {type, title, duration, thumbnail, player} = this.props;
    return <SoundPlayerComponent
      type={type}
      title={player.title || title}
      thumbnail={thumbnail}
      playing={player.playing}
      togglePlay={this.toggle}
      duration={player.duration || duration}
      currentTime={player.currentTime}/>;
  }
}

SoundPlayer.propTypes = {
  type: PropTypes.oneOf([
    SOUND_PLAYER_BOX_MESSAGE,
    SOUND_PLAYER_BOX_TOOLBAR,
  ]).isRequired,
  uri: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  thumbnail: PropTypes.string,
  player: PropTypes.object,
  onPress: PropTypes.func,
};

const mapStateToProps = () => {
  return (state, props) => {
    return {
      player: !props.uri || state.soundPlayer.uri === props.uri ? state.soundPlayer : {},
    };
  };
};

export default connect(mapStateToProps)(SoundPlayer);