import React, {Component} from 'react';
import PrivacyPolicyComponent from '../components/PrivacyPolicy';
import {InfoPage} from '../modules/Proto/index';
import {CLIENT_INFO_PAGE_TOS} from '../constants/configs';
import Api from '../modules/Api/index';
import {INFO_PAGE} from '../constants/methods/index';

class PrivacyPolicyScreen extends Component {

  state = {
    privacyPolicy: null,
  };

  async componentDidMount() {
    const infoPage = new InfoPage();
    infoPage.setId(CLIENT_INFO_PAGE_TOS);
    const infoResponse = await Api.invoke(INFO_PAGE, infoPage);
    this.setState({privacyPolicy: infoResponse.getBody()});
  }

  render() {
    const {privacyPolicy} = this.state;
    return (
      <PrivacyPolicyComponent
        privacyPolicy={privacyPolicy}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

PrivacyPolicyScreen.propTypes = {
};

PrivacyPolicyScreen.navigationOptions = {
  header: null,
};

export default PrivacyPolicyScreen;