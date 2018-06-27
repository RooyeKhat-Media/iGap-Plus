import Sound from 'react-native-sound';
import store from '../../configureStore';
import {soundPlayerPause, soundPlayerPlay, soundPlayerPlaying, soundPlayerStop} from '../../actions/soundPlayer';

const singletonEnforcer = Symbol();

class SoundPlayer {

  /**
   * @type {string}
   */
  uri;

  /**
   * @type {string}
   */
  duration;

  /**
   * @type {boolean}
   */
  playing;

  /**
   * @type {int}
   */
  currentTime;

  /**
   * @type {Sound}
   */
  whoosh;

  /**
   * @type {setInterval}
   */
  timerInterval;

  /**
   * construct soundPlayer
   * @param enforcer
   */
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  /**
   * Get SoundPlayer instance
   * @returns {SoundPlayer}
   */
  static get instance() {
    if (!this[singletonEnforcer]) {
      this[singletonEnforcer] = new SoundPlayer(singletonEnforcer);
    }
    return this[singletonEnforcer];
  }

  /**
   * load music
   * @return {Promise}
   */
  load(uri) {
    this.uri = uri;
    return new Promise((resolve, reject) => {
      this.whoosh = new Sound(this.uri, null, (error) => {
        if (!error) {
          this.currentTime = 0;
          this.duration = this.whoosh.getDuration();
          return resolve();
        }
        return reject(error);
      });
    });
  }

  async play(uri, title, duration) {
    if (this.uri !== uri) {
      if (this.uri) {
        this.stop();
      }
      await this.load(uri);
    }
    if (!this.playing) {
      this.tick();
      this.playing = true;
      this.whoosh.play((success) => {
        this.stop();
      });
      this.timerInterval = setInterval(() => this.tick(), 1000);
      store.dispatch(soundPlayerPlay(uri, title, duration));
    }
  }

  tick() {
    this.whoosh.getCurrentTime((sec) => {
      this.currentTime = sec;
      store.dispatch(soundPlayerPlaying(sec));
    });
  }

  pause() {
    if (this.playing) {
      if (this.whoosh) {
        this.whoosh.pause();
        this.playing = false;
      }
      store.dispatch(soundPlayerPause());
      clearInterval(this.timerInterval);
    }
  }

  stop() {
    if (this.whoosh) {
      this.whoosh.stop();
    }
    this.uri = null;
    this.playing = false;
    this.whoosh.setCurrentTime(0);
    store.dispatch(soundPlayerStop());
    clearInterval(this.timerInterval);
  }
}

export default SoundPlayer;