import {SOUND_PLAYER_PAUSE, SOUND_PLAYER_PLAY, SOUND_PLAYER_PLAYING, SOUND_PLAYER_STOP} from '../actions/soundPlayer';

const defaultPlayer = {
  uri: null,
  title: null,
  playing: false,
  duration: 0,
  currentTime: 0,
};

export function soundPlayer(state = defaultPlayer, action) {
  let player = {...state};
  switch (action.type) {
    case SOUND_PLAYER_PLAY:
      if (player.uri !== action.uri) {
        player = {
          uri: action.uri,
          title: action.title,
          playing: action.playing,
          duration: action.duration,
          currentTime: action.currentTime,
        };
      } else {
        player.duration = action.duration ? action.duration : player.duration;
        player.currentTime = action.currentTime ? action.currentTime : player.currentTime;
      }
      player.playing = true;
      return player;

    case SOUND_PLAYER_PLAYING:
      player.currentTime = action.currentTime;
      return player;

    case SOUND_PLAYER_PAUSE:
      player.playing = false;
      return player;

    case SOUND_PLAYER_STOP:
      player = {...defaultPlayer};
      return player;
    default:
      return state;
  }
}