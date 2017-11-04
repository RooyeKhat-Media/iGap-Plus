import React, {Component} from 'react';
import ContactFormComponent from '../../components/Contact/Form';
import Api from '../../modules/Api/index';
import {integerValidator, requiredValidator, stringValidator} from '../../utils/validator';
import {injectIntl, intlShape} from 'react-intl';
import countries from '../../constants/country/index';
import {ListItem} from '../../components/BaseUI/index';
import {Text} from 'react-native';
import i18n from '../../i18n/index';
import {InfoLocation, UserContactsImport} from '../../modules/Proto/index';
import {INFO_LOCATION, USER_CONTACTS_IMPORT} from '../../constants/methods/index';
import {
  ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD,
  ERROR_USER_CONTACTS_IMPORT_INTERNAL_SERVER_ERROR,
} from '../../modules/Api/errors/index';
import {errorId} from '../../modules/Error/index';

const formRules = {
  firstName: [
    {validate: requiredValidator},
    {validate: stringValidator},
  ],
  lastName: [],
  phone: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
  callingCode: [
    {validate: requiredValidator},
    {validate: integerValidator},
  ],
};

class ContactNewScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      callingCode: '',
    };
  }

  componentDidMount() {
    let infoLocation = new InfoLocation();
    Api.invoke(INFO_LOCATION, infoLocation)
      .then((response) => {
        this.setState((prevState) => {
          if (!prevState.countryCode) {
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
      });
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
        });
      }
    });
  };


  handleFormData = async (formData, setError) => {
    const {callingCode} = this.state;

    /**
     * @type ProtoUserContactsImport_Contact
     */
    const contact = new UserContactsImport.Contact();
    contact.setFirstName(formData.firstName);
    contact.setLastName(formData.lastName);
    contact.setPhone(callingCode + formData.phone);

    const userContactImport = new UserContactsImport();
    userContactImport.setContactsList([contact]);
    userContactImport.setForce(true);

    await Api.invokeMapError(
      USER_CONTACTS_IMPORT,
      userContactImport,
      setError,
      {
        [errorId(ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 1)]: 'phone',
        [errorId(ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 2)]: 'firstName',
        [errorId(ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 3)]: 'lastName',
        [errorId(ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 4)]: 'phone',
        [errorId(ERROR_USER_CONTACTS_IMPORT_INTERNAL_SERVER_ERROR)]: 'phone',
      }
    );
    this.props.navigation.goBack();

  };

  render() {
    const {intl} = this.props;
    const {callingCode, countryCode} = this.state;

    const formData = {callingCode, countryCode};
    const countryList = [];

    countries.map((country) => {
      let id = 'country' + country[0];
      let countryName = intl.formatMessage(i18n[id]);
      let countryCode = country.slice(1).join();
      countryList.push({
        key: country[0],
        value: countryName,
        element: (<ListItem centerElement={{primaryText: countryName}} rightElement={<Text>{countryCode}</Text>}
          style={{container: {backgroundColor: 'transparent', paddingLeft: 0}}}/>),
        filter: countryName.toLowerCase() + ',' + countryCode,
      });
    });

    return (
      <ContactFormComponent
        handleFormData={this.handleFormData}
        formRules={formRules} formData={formData}
        onChangeCallingCode={this.onChangeCallingCode}
        onSelectCountry={this.onSelectCountry}
        countryList={countryList}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}


ContactNewScreen.propTypes = {
  intl: intlShape.isRequired,
};
const RegisterIntl = injectIntl(ContactNewScreen);
RegisterIntl.navigationOptions = {
  header: null,
};
export default RegisterIntl;