/**
 * @flow
 */

import React, {Component} from 'react';
import UserRegisterComponent from '../../components/User/Register';
import {integerValidator, regexValidator, requiredValidator} from '../../utils/validator';
import countries from '../../constants/country/index';
import {LOCALES} from '../../constants/locale';
import {Text} from 'react-native';
import {keys} from 'lodash';
import {ListItem} from '../../components/BaseUI/index';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../i18n/index';
import Api from '../../modules/Api/index';
import {INFO_COUNTRY, INFO_LOCATION, USER_REGISTER} from '../../constants/methods/index';
import {InfoCountry, InfoLocation, UserRegister} from '../../modules/Proto/index';
import {goPrivacyPolicy, goUserQrCodeLoginScreen, goUserVerifyScreen} from '../../navigators/AppNavigator';
import {setAuthorHash, setUserId} from '../../utils/app';
import {changeLocale, getUserLocale} from '../../utils/locale';
import {errorId} from '../../modules/Error/index';
import {
  ERROR_USER_REGISTER_BAD_PAYLOAD,
  ERROR_USER_REGISTER_BLOCKED_USER,
  ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR,
  ERROR_USER_REGISTER_MAX_SEND_LOCK,
  ERROR_USER_REGISTER_MAX_TRY_LOCK,
} from '../../modules/Api/errors/index';
import {IRANSans_Medium} from '../../constants/fonts/index';
import {appTheme} from '../../themes/default/index';
import {qrMode} from './UserQrCodeLoginScreen';

const rules = {
  phoneNumber: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};
let phoneNumberRegexValidate;

export function getLocalList(localesList) {
  keys(LOCALES).map((locale) => {
    localesList.push({
      key: locale,
      value: LOCALES[locale].en,
      element: (<ListItem
        centerElement={{primaryText: LOCALES[locale].native || LOCALES[locale].en}}
        style={{container: {backgroundColor: 'transparent', paddingLeft: 0}, primaryText: {...IRANSans_Medium}}}
      />),
      filter: locale,
    });
  });
}

class UserRegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      callingCode: '',
      phoneNumber: '',
      localesList: [],
      countryList: [],
    };
  }

  componentDidMount() {
    const {intl} = this.props;
    const {localesList, countryList} = this.state;

    getLocalList(localesList);

    countries.map((country) => {
      let id = 'country' + country[0];
      let countryName = intl.formatMessage(i18n[id]);
      let countryCode = country.slice(1).join();
      countryList.push({
        key: country[0],
        value: countryName,
        element: (<ListItem
          centerElement={{primaryText: countryName}}
          rightElement={<Text style={{color: appTheme.primaryText}}>{countryCode}</Text>}
          style={{container: {backgroundColor: 'transparent', paddingLeft: 0}, primaryText: {...IRANSans_Medium}}}
        />),
        filter: countryName.toLowerCase() + ',' + countryCode,
      });
    });

    let infoLocation = new InfoLocation();
    Api.invoke(INFO_LOCATION, infoLocation)
      .then((response) => {
        this.setState((prevState) => {
          if (!prevState.countryCode) {
            phoneNumberRegexValidate = {
              validate: regexValidator, options: {
                pattern: response.getRegex(),
              },
            };
            return {
              countryCode: response.getIsoCode(),
              callingCode: '+' + response.getCallingCode(),
            };
          }
          return prevState;
        });
      });
  }

  onSelectCountry = (key) => {
    const country = countries.find(function(country) {
      return key === country[0];
    });
    if (country) {
      this.setState({
        countryCode: country[0],
        callingCode: country[1],
      }, this._onCountryCodeChange);
    }
  };

  onChangeCallingCode = (code) => {
    this.setState({callingCode: code}, function() {
      const country = countries.find(function(country) {
        return code === country[1];
      });
      if (country) {
        this.setState({
          countryCode: country[0],
        }, this._onCountryCodeChange);
      }
    });
  };

  _onCountryCodeChange = async () => {
    const {countryCode} = this.state;

    const infoCountry = new InfoCountry();
    infoCountry.setIsoCode(countryCode);

    try {
      const response = await Api.invoke(INFO_COUNTRY, infoCountry);
      phoneNumberRegexValidate = {
        validate: regexValidator, options: {
          pattern: response.getRegex(),
        },
      };
    } catch (e) {

    }
  };

  handleFormData = async (formData, setError) => {
    const {countryCode, callingCode} = this.state;
    const data = {
      phoneNumber: formData.phoneNumber,
      countryCode,
    };

    if (phoneNumberRegexValidate) {
      try {
        await phoneNumberRegexValidate.validate(formData.phoneNumber, phoneNumberRegexValidate.options);
      } catch (e) {
        setError('phoneNumber', e);
        return;
      }
    }

    const userRegister = new UserRegister();
    userRegister.setPhoneNumber(parseInt(data.phoneNumber, 10));
    userRegister.setCountryCode(data.countryCode);
    const response = await Api.invokeMapError(
      USER_REGISTER,
      userRegister,
      setError,
      {
        [errorId(ERROR_USER_REGISTER_BAD_PAYLOAD, 1)]: 'phoneNumber',
        [errorId(ERROR_USER_REGISTER_BAD_PAYLOAD, 2)]: 'phoneNumber',
        [errorId(ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR)]: 'phoneNumber',
        [errorId(ERROR_USER_REGISTER_BLOCKED_USER)]: 'phoneNumber',
        [errorId(ERROR_USER_REGISTER_MAX_TRY_LOCK)]: 'phoneNumber',
        [errorId(ERROR_USER_REGISTER_MAX_SEND_LOCK)]: 'phoneNumber',
      }
    );

    await setUserId(response.getUserId());
    await setAuthorHash(response.getAuthorHash());
    goUserVerifyScreen(
      callingCode + ' ' + data.phoneNumber,
      response.getUsername(),
      response.getMethod(),
      response.getResendDelay(),
      response.getSmsNumberList(),
      response.getVerifyCodeRegex(),
      response.getVerifyCodeDigitCount(),
      data);
  };

  selectNewLocale = (locale) => {
    changeLocale(locale);
  };

  render() {
    const {phoneNumber, callingCode, countryCode, localesList, countryList} = this.state;
    const formData = {phoneNumber, callingCode, countryCode};

    const defaultLocale = getUserLocale();
    return (
      <UserRegisterComponent
        formRules={rules}
        formData={formData}
        countryList={countryList}
        handleFormData={this.handleFormData}
        onSelectCountry={this.onSelectCountry}
        onChangeCallingCode={this.onChangeCallingCode}
        localesList={localesList}
        selectNewLocale={this.selectNewLocale}
        defaultLocale={defaultLocale}
        goPrivacyPolicy={goPrivacyPolicy}
        goUserQrCodeLoginScreen={() => goUserQrCodeLoginScreen(qrMode.LOGIN)}
      />
    );
  }
}

UserRegisterScreen.propTypes = {
  intl: intlShape.isRequired,
};
const RegisterIntl = injectIntl(UserRegisterScreen);
RegisterIntl.navigationOptions = {
  header: null,
};
export default RegisterIntl;