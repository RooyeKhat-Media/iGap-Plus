import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import {Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {Proto} from '../../../modules/Proto/index';
import PopupMenu from '../../BaseUI/PopupMenu/index';

class SettingPrivacyComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  hasRuleLevel(privacyType) {
    const {rules} = this.props;
    return rules[privacyType] != null;
  }

  getStringFromValue(value) {
    const {intl} = this.props;
    let result = intl.formatMessage(i18n.loading);
    switch (value) {
      case Proto.PrivacyLevel.ALLOW_ALL:
        result = intl.formatMessage(i18n.privacyEveryBody);
        break;
      case Proto.PrivacyLevel.DENY_ALL:
        result = intl.formatMessage(i18n.privacyNobody);
        break;
      case Proto.PrivacyLevel.ALLOW_CONTACTS:
        result = intl.formatMessage(i18n.privacyMyContacts);
        break;
    }
    return result;
  }

  callBackMenu(privacyType, value) {
    const {privacySetRule} = this.props;
    switch (value) {
      case 0:
        privacySetRule(privacyType, Proto.PrivacyLevel.ALLOW_ALL);
        break;
      case 1:
        privacySetRule(privacyType, Proto.PrivacyLevel.DENY_ALL);
        break;
      case 2:
        privacySetRule(privacyType, Proto.PrivacyLevel.ALLOW_CONTACTS);
        break;
    }
  }

  render() {
    const styles = this.getStyles();
    const {intl, goBack, rules} = this.props;
    const itemList = [intl.formatMessage(i18n.privacyEveryBody), intl.formatMessage(i18n.privacyNobody), intl.formatMessage(i18n.privacyMyContacts)];

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={intl.formatMessage(i18n.privacyPrivacy)}/>
        <ScrollView style={styles.scrollView}>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanSeeMyAvatar)}</Text>
            <PopupMenu
              actionList={itemList}
              onPress={(action) => this.callBackMenu(Proto.PrivacyType.AVATAR, action)}
              button={<Text
                style={styles.textLoading}>{this.getStringFromValue(rules[Proto.PrivacyType.AVATAR])} </Text>}
            />
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanInviteMeToChannels)}</Text>
            <PopupMenu
              actionList={itemList}
              onPress={(action) => this.callBackMenu(Proto.PrivacyType.CHANNEL_INVITE, action)}
              button={<Text
                style={styles.textLoading}>{this.getStringFromValue(rules[Proto.PrivacyType.CHANNEL_INVITE])} </Text>}
            />
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanInviteMeToGroups)}</Text>
            <PopupMenu
              actionList={itemList}
              onPress={(action) => this.callBackMenu(Proto.PrivacyType.GROUP_INVITE, action)}
              button={<Text
                style={styles.textLoading}>{this.getStringFromValue(rules[Proto.PrivacyType.GROUP_INVITE])} </Text>}
            />
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyWhoCanCallMe)}</Text>
            <PopupMenu
              actionList={itemList}
              onPress={(action) => this.callBackMenu(Proto.PrivacyType.VOICE_CALLING, action)}
              button={<Text
                style={styles.textLoading}>{this.getStringFromValue(rules[Proto.PrivacyType.VOICE_CALLING])} </Text>}
            />
          </View>

          <View style={styles.rowField}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyLastSeen)}</Text>
            <PopupMenu
              actionList={itemList}
              onPress={(action) => this.callBackMenu(Proto.PrivacyType.USER_STATUS, action)}
              button={<Text
                style={styles.textLoading}>{this.getStringFromValue(rules[Proto.PrivacyType.USER_STATUS])} </Text>}
            />
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