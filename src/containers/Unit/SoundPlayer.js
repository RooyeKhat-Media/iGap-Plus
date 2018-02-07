import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {soundPlayerPause, soundPlayerPlay, soundPlayerStop} from '../../actions/soundPlayer';
import SoundPlayerComponent from '../../components/Unit/SoundPlayer/index';
import {SOUND_PLAYER_BOX_MESSAGE, SOUND_PLAYER_BOX_TOOLBAR} from '../../constants/app';

class SoundPlayer extends React.PureComponent {

  toggle = () => {
    const {player, play, pause, stop, uri, title, duration} = this.props;
    if (!uri) {
      stop();
    } else if (!player || !player.playing) {
      play(uri, title, duration);
    } else {
      pause();
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
};

const mapStateToProps = () => {
  return (state, props) => {
    return {
      player: !props.uri || state.soundPlayer.uri === props.uri ? state.soundPlayer : {},
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: function(uri, title, duration) {
      dispatch(soundPlayerPlay(uri, title, duration));
    },
    pause: function() {
      dispatch(soundPlayerPause());
    },
    stop: function() {
      dispatch(soundPlayerStop());
    },
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(SoundPlayer);