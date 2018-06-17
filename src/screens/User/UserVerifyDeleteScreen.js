import React, {Component} from 'react';
import {stringValidator} from '../../utils/validator';
import UserVerifyDeleteComponent from '../../components/User/VerifyDelete/index';
import Api from '../../modules/Api/index';
import {USER_DELETE, USER_GET_DELETE_TOKEN} from '../../constants/methods/index';
import {Proto, UserDelete, UserGetDeleteToken} from '../../modules/Proto/index';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_USER_DELETE_BAD_PAYLOAD,
  ERROR_USER_DELETE_EXPIRED_TOKEN,
  ERROR_USER_DELETE_INTERNAL_SERVER_ERROR,
  ERROR_USER_DELETE_INVALID_TOKEN,
  ERROR_USER_DELETE_MAX_TRY_LOCK,
} from '../../modules/Api/errors/index';
import {goUserRegisterScreen} from '../../navigators/AppNavigator';
import SmsListener from '../../modules/SmsListener';
import Permission, {PERMISSION_RECEIVE_SMS} from '../../modules/Permission/index';
import i18n from '../../i18n/index';
import {injectIntl, intlShape} from 'react-intl';
import {Platform} from 'react-native';


class UserVerifyDeleteScreen extends Component {

  constructor(props) {
    super(props);
    const {token} = this.props.navigation.state.params;
    this.state = {
      resendDelay: token.getResendDelay(),
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
    if (Platform.OS === 'android') {
      this.registerSmsListener();
    }
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

    const {token} = this.props.navigation.state.params;
    this.smsListener = SmsListener.addListener((message, originatingAddress) => {
      if (originatingAddress) {
        token.getSmsNumberList().forEach((number) => {
          const no = number.toString();
          if (originatingAddress.endsWith(no)) {
            let matches = message.match(token.getTokenRegex());
            if (matches) {
              this.setState({defaultValue: matches[1] || matches[0]});
            }
          }
        });
      }
    });
  };

  handleFormData = async (verifyCode, setError) => {

    const userDelete = new UserDelete();
    userDelete.setToken(verifyCode);
    userDelete.setReason(Proto.UserDelete.prototype.Reason.OTHER);

    await Api.invokeMapError(
      USER_DELETE,
      userDelete,
      setError,
      {
        [errorId(ERROR_USER_DELETE_BAD_PAYLOAD)]: 'verifyCode',
        [errorId(ERROR_USER_DELETE_INTERNAL_SERVER_ERROR)]: 'verifyCode',
        [errorId(ERROR_USER_DELETE_INVALID_TOKEN)]: 'verifyCode',
        [errorId(ERROR_USER_DELETE_EXPIRED_TOKEN)]: 'verifyCode',
        [errorId(ERROR_USER_DELETE_MAX_TRY_LOCK)]: 'verifyCode',
      }
    );
    goUserRegisterScreen();
    // TODO [NEJATI] - 11/13/2017 9:46 AM -  clean db , state , cached variable like author hash , usrId , token and ...
  };

  resendCode = async () => {
    const tokenResend = await Api.invoke(USER_GET_DELETE_TOKEN, new UserGetDeleteToken());

    this.setState({
      resendDelay: tokenResend.getResendDelay(),
    });
    this.interval = setInterval(() => this.tick(), 1000);
  };

  render() {
    const {token} = this.props.navigation.state.params;
    const rules = {
      verifyToken: [
        {validate: stringValidator, options: {max: token.getTokenLength()}},
      ],
    };

    return (
      <UserVerifyDeleteComponent
        formRules={rules}
        handleFormData={this.handleFormData}
        resendDelay={this.state.resendDelay}
        resendCode={this.resendCode}
        defaultValue={this.state.defaultValue}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

UserVerifyDeleteScreen.propTypes = {
  intl: intlShape.isRequired,
};

const UserVerifyDeleteScreenIntl = injectIntl(UserVerifyDeleteScreen);
UserVerifyDeleteScreenIntl.navigationOptions = {
  header: null,
};
export default UserVerifyDeleteScreenIntl;