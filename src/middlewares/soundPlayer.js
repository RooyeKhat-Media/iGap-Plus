import {SOUND_PLAYER_PAUSE, SOUND_PLAYER_PLAY, SOUND_PLAYER_STOP} from '../actions/soundPlayer';
import SoundPlayer from '../modules/SoundPlayer/index';

export default ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case SOUND_PLAYER_PLAY:
      SoundPlayer.instance.play(action.uri);
      break;
    case SOUND_PLAYER_PAUSE:
      SoundPlayer.instance.pause();
      break;
    case SOUND_PLAYER_STOP:
      SoundPlayer.instance.stop();
      break;
  }
  return next(action);
};