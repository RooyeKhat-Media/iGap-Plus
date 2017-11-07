import React, {Component} from 'react';
import SettingPrivacyComponent from '../../../components/Setting/Privacy/index';
import Api from '../../../modules/Api/index';
import {Proto, UserPrivacyGetRule, UserPrivacySetRule} from '../../../modules/Proto/index';
import {USER_PRIVACY_GET_RULE, USER_PRIVACY_SET_RULE} from '../../../constants/methods/index';
import {connect} from 'react-redux';
import {unSetRule} from '../../../actions/methods/user/privacy/rule';

class SettingPrivacyScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const userPrivacyGetRuleAvatar = new UserPrivacyGetRule();
    userPrivacyGetRuleAvatar.setType(Proto.PrivacyType.AVATAR);
    Api.invoke(USER_PRIVACY_GET_RULE, userPrivacyGetRuleAvatar);

    const userPrivacyGetRuleChannel = new UserPrivacyGetRule();
    userPrivacyGetRuleChannel.setType(Proto.PrivacyType.CHANNEL_INVITE);
    Api.invoke(USER_PRIVACY_GET_RULE, userPrivacyGetRuleChannel);

    const userPrivacyGetRuleGroup = new UserPrivacyGetRule();
    userPrivacyGetRuleGroup.setType(Proto.PrivacyType.GROUP_INVITE);
    Api.invoke(USER_PRIVACY_GET_RULE, userPrivacyGetRuleGroup);

    const userPrivacyGetRuleVoiceCall = new UserPrivacyGetRule();
    userPrivacyGetRuleVoiceCall.setType(Proto.PrivacyType.VOICE_CALLING);
    Api.invoke(USER_PRIVACY_GET_RULE, userPrivacyGetRuleVoiceCall);

    const userPrivacyGetRuleUserStatus = new UserPrivacyGetRule();
    userPrivacyGetRuleUserStatus.setType(Proto.PrivacyType.USER_STATUS);
    Api.invoke(USER_PRIVACY_GET_RULE, userPrivacyGetRuleUserStatus);
  }

  privacySetRule = (privacyType, privacyLevel) => {
    const {unSetRuleUpdate} = this.props;
    unSetRuleUpdate(privacyType);

    const userPrivacySetRule = new UserPrivacySetRule();
    userPrivacySetRule.setType(privacyType);
    userPrivacySetRule.setLevel(privacyLevel);
    Api.invoke(USER_PRIVACY_SET_RULE, userPrivacySetRule);
  };

  render() {
    const {rules} = this.props;
    return (
      <SettingPrivacyComponent
        goBack={this.props.navigation.goBack}
        privacySetRule={this.privacySetRule}
        rules={rules}
      />
    );
  }
}

SettingPrivacyScreen.propTypes = {};

const mapStateToProps = state => {
  return {
    rules: state.methods.rule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unSetRuleUpdate: (privacyType) => {
      return dispatch(unSetRule(privacyType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingPrivacyScreen);