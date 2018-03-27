/**
 * @flow
 */

import React, {Component} from 'react';
import {integerValidator, requiredValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import UserVerifyComponent from '../../components/User/Verify/index';
import {UserRegister, UserVerify} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {USER_REGISTER, USER_VERIFY} from '../../constants/methods/index';
import {login, setUserToken} from '../../utils/app';
import {goMainScreen, goUserNewProfileScreen} from '../../navigators/AppNavigator';
import {
  ERROR_USER_REGISTER_BAD_PAYLOAD,
  ERROR_USER_REGISTER_BLOCKED_USER,
  ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR,
  ERROR_USER_REGISTER_MAX_SEND_LOCK,
  ERROR_USER_REGISTER_MAX_TRY_LOCK,
  ERROR_USER_VERIFY_BAD_PAYLOAD,
  ERROR_USER_VERIFY_BLOCKED_USER,
  ERROR_USER_VERIFY_EXPIRED_CODE,
  ERROR_USER_VERIFY_INTERNAL_SERVER_ERROR,
  ERROR_USER_VERIFY_INVALID_CODE,
  ERROR_USER_VERIFY_MAX_TRY_LOCK,
  ERROR_USER_VERIFY_USER_NOT_FOUND,
} from '../../modules/Api/errors/index';
import {errorId} from '../../modules/Error/index';
import SmsListener from '../../modules/SmsListener';
import Permission, {PERMISSION_RECEIVE_SMS} from '../../modules/Permission/index';
import i18n from '../../i18n/index';

const rules = {
  code: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};

class UserVerifyScreen extends Component {

  constructor(props) {
    super(props);
    const {resendDelay} = props.navigation.state.params;
    this.state = {
      resendDelay: resendDelay,
      defaultValue: '',
    };
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.resendDelay === 0) {
        clearInterval(this.interval);
        return prevState;
      } else {
        return {
          resendDelay: prevState.resendDelay - 1,
        };
      }
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.registerSmsListener();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    if (this.smsListener) {
      SmsListener.removeListener(this.smsListener);
    }
  }

  registerSmsListener = async () => {
    const {intl} = this.props;
    await Permission.grant(PERMISSION_RECEIVE_SMS, intl.formatMessage(i18n.verifySmsPermissionTitle), intl.formatMessage(i18n.verifySmsPermissionContent));

    const {smsNumber, verifyCodeRegex} = this.props.navigation.state.params;
    this.smsListener = SmsListener.addListener((message, originatingAddress) => {
      if (originatingAddress) {
        smsNumber.forEach((number) => {
          const no = number.toString();
          if (originatingAddress.endsWith(no)) {
            let matches = message.match(verifyCodeRegex);
            if (matches) {
              this.setState({defaultValue: matches[1] || matches[0]});
            }
          }
        });
      }
    });
  };


  handleFormData = async (verifyCode, setError) => {
    const {username} = this.props.navigation.state.params;


    const userVerify = new UserVerify();
    userVerify.setUsername(username);
    userVerify.setCode(parseInt(verifyCode, 10));


    const response = await Api.invokeMapError(
      USER_VERIFY,
      userVerify,
      setError,
      {
        [errorId(ERROR_USER_VERIFY_BAD_PAYLOAD, 1)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_BAD_PAYLOAD, 2)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_INTERNAL_SERVER_ERROR)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_USER_NOT_FOUND)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_BLOCKED_USER)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_INVALID_CODE)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_EXPIRED_CODE)]: 'verifyCode',
        [errorId(ERROR_USER_VERIFY_MAX_TRY_LOCK)]: 'verifyCode',
      }
    );
    await setUserToken(response.getToken());
    await login();

    if (response.getNewUser()) {
      goUserNewProfileScreen();
    } else {
      goMainScreen();
    }

  };

  resendCode = async (setError) => {
    const {resendParams} = this.props.navigation.state.params;

    const userRegister = new UserRegister();
    userRegister.setPhoneNumber(parseInt(resendParams.phoneNumber, 10));
    userRegister.setCountryCode(resendParams.countryCode);
    const response = await Api.invokeMapError(
      USER_REGISTER,
      userRegister,
      setError,
      {
        [errorId(ERROR_USER_REGISTER_BAD_PAYLOAD, 1)]: 'verifyCode',
        [errorId(ERROR_USER_REGISTER_BAD_PAYLOAD, 2)]: 'verifyCode',
        [errorId(ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR)]: 'verifyCode',
        [errorId(ERROR_USER_REGISTER_BLOCKED_USER)]: 'verifyCode',
        [errorId(ERROR_USER_REGISTER_MAX_TRY_LOCK)]: 'verifyCode',
        [errorId(ERROR_USER_REGISTER_MAX_SEND_LOCK)]: 'verifyCode',
      }
    );
    this.setState({
      resendDelay: response.getResendDelay(),
    });
    this.interval = setInterval(() => this.tick(), 1000);

  };

  render() {
    const {phoneNumber, method} = this.props.navigation.state.params;
    const {resendDelay, defaultValue} = this.state;
    return (
      <UserVerifyComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        phoneNumber={phoneNumber}
        method={method}
        resendDelay={resendDelay}
        resendCode={this.resendCode}
        defaultValue={defaultValue}
      />
    );
  }
}


UserVerifyScreen.propTypes = {
  intl: intlShape.isRequired,
};
const UserVerifyScreenIntl = injectIntl(UserVerifyScreen);
UserVerifyScreenIntl.navigationOptions = {
  header: null,
};
export default UserVerifyScreenIntl;