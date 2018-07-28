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
import {arrowBackIcon} from '../../BaseUI/Utile/index';

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

  callBackSelfRemove(value) {
    const {setSelfRemove} = this.props;
    let result = 12;
    switch (value) {
      case 0:
        result = 1;
        break;
      case 1:
        result = 3;
        break;
      case 2:
        result = 6;
        break;
      case 3:
        result = 12;
        break;
    }
    setSelfRemove(result);
  }

  getStringFromSelfRemoveValue(value) {
    const {intl} = this.props;
    let result = intl.formatMessage(i18n.loading);
    switch (value) {
      case 1:
      case 3:
      case 6:
        result = intl.formatMessage(i18n.privacyMonth, {value});
        break;
      case 12:
        result = intl.formatMessage(i18n.privacyYear, {value: 1});
        break;
    }
    return result;
  }

  render() {
    const styles = this.getStyles();
    const {intl, goBack, rules, selfRemove} = this.props;
    const itemList = [
      intl.formatMessage(i18n.privacyEveryBody),
      intl.formatMessage(i18n.privacyNobody),
      intl.formatMessage(i18n.privacyMyContacts)];
    const itemListSelfRemove = [
      intl.formatMessage(i18n.privacyMonth, {value: 1}),
      intl.formatMessage(i18n.privacyMonth, {value: 3}),
      intl.formatMessage(i18n.privacyMonth, {value: 6}),
      intl.formatMessage(i18n.privacyYear, {value: 1})];

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.privacyPrivacy)}
        />
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

          <Text style={styles.textSelfRemove}> {intl.formatMessage(i18n.privacyAccountSelfDestruct)}</Text>
          <View style={styles.rowFieldSelfRemove}>
            <Text style={styles.itemText}> {intl.formatMessage(i18n.privacyAwayFor)}</Text>
            <PopupMenu
              actionList={itemListSelfRemove}
              onPress={(action) => this.callBackSelfRemove(action)}
              button={<Text style={styles.textLoading}>{this.getStringFromSelfRemoveValue(selfRemove)} </Text>}
            />
          </View>
          <Text style={styles.textSelfRemoveComment}> {intl.formatMessage(i18n.privacySelfRemoveComment)}</Text>
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
  setSelfRemove: PropTypes.func.isRequired,
  selfRemove: PropTypes.number.isRequired,
};

export default injectIntl(SettingPrivacyComponent);