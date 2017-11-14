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


class UserVerifyDeleteScreen extends Component {

  constructor(props) {
    super(props);
    const {token} = this.props.navigation.state.params;
    this.state = {
      resendDelay: token.getResendDelay(),
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
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleFormData = async (formData, setError) => {

    const userDelete = new UserDelete();
    userDelete.setToken(formData.verifyCode);
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
      />
    );
  }
}

UserVerifyDeleteScreen.propTypes = {};

export default UserVerifyDeleteScreen;