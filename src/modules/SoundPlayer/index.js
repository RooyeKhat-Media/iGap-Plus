import Sound from 'react-native-sound';
import store from '../../configureStore';
import {soundPlayerPlaying} from '../../actions/soundPlayer';

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
      this.whoosh = new Sound(this.uri, Sound.MAIN_BUNDLE, (error) => {
        if (!error) {
          this.currentTime = 0;
          this.duration = this.whoosh.getDuration();
          return resolve();
        }
        return reject();
      });
    });
  }

  async play(uri) {
    if (this.uri !== uri) {
      this.stop();
      await this.load(uri);
    }
    if (!this.playing) {
      this.tick();
      this.playing = true;
      this.whoosh.play(this.stop);
      this.timerInterval = setInterval(() => this.tick(), 1000);
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
      clearInterval(this.timerInterval);
    }
  }

  stop() {
    if (this.whoosh) {
      this.whoosh.stop();
    }
    this.playing = false;
    clearInterval(this.timerInterval);
  }
}

export default SoundPlayer;