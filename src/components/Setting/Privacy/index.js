import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import {BasePicker, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {Proto} from '../../../modules/Proto/index';

class SettingPrivacyComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  hasRuleLevel(privacyType) {
    const {rules} = this.props;
    return rules[privacyType] != null;
  }

  render() {
    const styles = this.getStyles();
    const {intl, goBack, privacySetRule, rules} = this.props;
    const privacyType = Proto.PrivacyType;
    const privacyLevel = Proto.PrivacyLevel;

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.privacyPrivacy)}/>
        <ScrollView style={styles.scrollView}>
          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanSeeMyAvatar)}</Text>
            {this.hasRuleLevel(Proto.PrivacyType.AVATAR) ? <BasePicker
              style={styles.piker}
              mode="dropdown"
              selectedValue={rules[Proto.PrivacyType.AVATAR]}
              onValueChange={(itemValue) => privacySetRule(privacyType.AVATAR, itemValue)}>
              <BasePicker.Item label={intl.formatMessage(i18n.privacyEveryBody)} value={privacyLevel.ALLOW_ALL}/>
              <BasePicker.Item label={intl.formatMessage(i18n.privacyMyContacts)} value={privacyLevel.ALLOW_CONTACTS}/>
              <BasePicker.Item label={intl.formatMessage(i18n.privacyNobody)} value={privacyLevel.DENY_ALL}/>
            </BasePicker> : <Text style={styles.textLoading}>{intl.formatMessage(i18n.loading)} </Text>}
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanInviteMeToChannels)}</Text>
            {this.hasRuleLevel(Proto.PrivacyType.CHANNEL_INVITE) ? <BasePicker
              style={styles.piker}
              mode="dropdown"
              selectedValue={rules[Proto.PrivacyType.CHANNEL_INVITE]}
              onValueChange={(itemValue) => privacySetRule(privacyType.CHANNEL_INVITE, itemValue)}>
              <BasePicker.Item label="EveryBody" value={privacyLevel.ALLOW_ALL}/>
              <BasePicker.Item label="My Contacts" value={privacyLevel.ALLOW_CONTACTS}/>
              <BasePicker.Item label="Nobody" value={privacyLevel.DENY_ALL}/>
            </BasePicker> : <Text style={styles.textLoading}>{intl.formatMessage(i18n.loading)} </Text>}
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanInviteMeToGroups)}</Text>
            {this.hasRuleLevel(Proto.PrivacyType.GROUP_INVITE) ? <BasePicker
              style={styles.piker}
              mode="dropdown"
              selectedValue={rules[Proto.PrivacyType.GROUP_INVITE]}
              onValueChange={(itemValue) => privacySetRule(privacyType.GROUP_INVITE, itemValue)}>
              <BasePicker.Item label="EveryBody" value={privacyLevel.ALLOW_ALL}/>
              <BasePicker.Item label="My Contacts" value={privacyLevel.ALLOW_CONTACTS}/>
              <BasePicker.Item label="Nobody" value={privacyLevel.DENY_ALL}/>
            </BasePicker> : <Text style={styles.textLoading}>{intl.formatMessage(i18n.loading)} </Text>}
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanCallMe)}</Text>
            {this.hasRuleLevel(Proto.PrivacyType.VOICE_CALLING) ? <BasePicker
              style={styles.piker}
              mode="dropdown"
              selectedValue={rules[Proto.PrivacyType.VOICE_CALLING]}
              onValueChange={(itemValue) => privacySetRule(privacyType.VOICE_CALLING, itemValue)}>
              <BasePicker.Item label="EveryBody" value={privacyLevel.ALLOW_ALL}/>
              <BasePicker.Item label="My Contacts" value={privacyLevel.ALLOW_CONTACTS}/>
              <BasePicker.Item label="Nobody" value={privacyLevel.DENY_ALL}/>
            </BasePicker> : <Text style={styles.textLoading}>{intl.formatMessage(i18n.loading)} </Text>}
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyLastSeen)}</Text>
            {this.hasRuleLevel(Proto.PrivacyType.USER_STATUS) ? <BasePicker
              style={styles.piker}
              mode="dropdown"
              selectedValue={rules[Proto.PrivacyType.USER_STATUS]}
              onValueChange={(itemValue) => privacySetRule(privacyType.USER_STATUS, itemValue)}>
              <BasePicker.Item label="EveryBody" value={privacyLevel.ALLOW_ALL}/>
              <BasePicker.Item label="My Contacts" value={privacyLevel.ALLOW_CONTACTS}/>
              <BasePicker.Item label="Nobody" value={privacyLevel.DENY_ALL}/>
            </BasePicker> : <Text style={styles.textLoading}>{intl.formatMessage(i18n.loading)} </Text>}
          </View>
        </ScrollView>
      </View>
    );
  }
}

SettingPrivacyComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  privacySetRule: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
};

export default injectIntl(SettingPrivacyComponent);