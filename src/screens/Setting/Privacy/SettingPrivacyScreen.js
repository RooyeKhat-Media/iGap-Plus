import React, {Component} from 'react';
import SettingPrivacyComponent from '../../../components/Setting/Privacy/index';
import Api from '../../../modules/Api/index';
import {
  Proto,
  UserPrivacyGetRule,
  UserPrivacySetRule,
  UserProfileGetSelfRemove,
  UserProfileSetSelfRemove,
} from '../../../modules/Proto/index';
import {
  USER_PRIVACY_GET_RULE,
  USER_PRIVACY_SET_RULE,
  USER_PROFILE_GET_SELF_REMOVE,
  USER_PROFILE_SET_SELF_REMOVE,
} from '../../../constants/methods/index';
import {connect} from 'react-redux';
import {unSetRule} from '../../../actions/methods/user/privacy/rule';
import {selfRemove} from '../../../actions/methods/user/profile/selfRemove';

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

    Api.invoke(USER_PROFILE_GET_SELF_REMOVE, new UserProfileGetSelfRemove());

  }

  privacySetRule = (privacyType, privacyLevel) => {
    const {unSetRuleUpdate} = this.props;
    unSetRuleUpdate(privacyType);
    const userPrivacySetRule = new UserPrivacySetRule();
    userPrivacySetRule.setType(privacyType);
    userPrivacySetRule.setLevel(privacyLevel);
    Api.invoke(USER_PRIVACY_SET_RULE, userPrivacySetRule);
  };

  setSelfRemove = (selfRemoveMonth) => {
    const {setSelfRemoveLoading} = this.props;
    setSelfRemoveLoading();
    const userProfileSetSelfRemove = new UserProfileSetSelfRemove();
    userProfileSetSelfRemove.setSelfRemove(selfRemoveMonth);
    Api.invoke(USER_PROFILE_SET_SELF_REMOVE, userProfileSetSelfRemove);
  };

  render() {
    const {rules, selfRemove} = this.props;
    return (
      <SettingPrivacyComponent
        goBack={this.props.navigation.goBack}
        privacySetRule={this.privacySetRule}
        rules={rules}
        setSelfRemove={this.setSelfRemove}
        selfRemove={selfRemove}
      />
    );
  }
}

SettingPrivacyScreen.propTypes = {};

const mapStateToProps = state => {
  return {
    rules: state.methods.rule,
    selfRemove: state.methods.selfRemove,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unSetRuleUpdate: (privacyType) => {
      return dispatch(unSetRule(privacyType));
    },
    setSelfRemoveLoading: () => {
      return dispatch(selfRemove(0));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingPrivacyScreen);