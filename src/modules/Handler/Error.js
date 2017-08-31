import Base from './Base';
import {goUserTwoStepVerificationScreen} from '../../navigators/AppNavigator';

export default class Error extends Base {
  handle() {
    console.log('Error', this._response.getMajorCode(), this._response.getMinorCode());
    switch (this._response.getMajorCode()) {
      case 184:
        goUserTwoStepVerificationScreen();
        break;
    }
  }
}