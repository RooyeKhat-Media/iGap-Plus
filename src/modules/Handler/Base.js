import store from '../../configureStore';

export default class {
  constructor(response, request) {
    this._response = response;
    this._request = request;
  }

  handle() {
    console.error('Not implemented yet', this);
  }

  /**
   * @param {object} action
   */
  dispatch(action) {
    store.dispatch(action);
  }
}