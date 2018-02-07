export const SOUND_PLAYER_PLAY = 'SOUND_PLAYER_PLAY';
export const SOUND_PLAYER_PLAYING = 'SOUND_PLAYER_PLAYING';
export const SOUND_PLAYER_PAUSE = 'SOUND_PLAYER_PAUSE';
export const SOUND_PLAYER_STOP = 'SOUND_PLAYER_STOP';

export function soundPlayerPlay(uri, title, duration, currentTime) {
  return {
    type: SOUND_PLAYER_PLAY,
    uri,
    title,
    duration,
    currentTime,
  };
}

export function soundPlayerPlaying(currentTime) {
  return {
    type: SOUND_PLAYER_PLAYING,
    currentTime,
  };
}

export function soundPlayerPause() {
  return {
    type: SOUND_PLAYER_PAUSE,
  };
}

export function soundPlayerStop() {
  return {
    type: SOUND_PLAYER_STOP,
  };
}