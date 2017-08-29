import Base from '../Base';

export default class Register extends Base {
  handle() {
    console.log('User Register response',
      this._response.getUsername(),
      this._response.getUserId(),
      this._response.getAuthorHash(),
      this._response.getMethod(),
      this._response.getResendDelay(),
      this._response.getVerifyCodeRegex(),
      this._response.getVerifyCodeDigitCount());
    return true;
  }
}