import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';
import {Confirm, ListItem, PopupMenu, Toolbar} from '../BaseUI/index';
import i18n from '../../i18n/index';
import {goActiveSession, goBlockList, goQrCode, goSettingPrivacy} from '../../navigators/PrimaryNavigator';
import Linking from '../../modules/Linking/index';
import {textTitleStyle} from '../../themes/default/index';
import {APP_VERSION} from '../../constants/configs';
import {APP_MODAL_ID_PRIMARY} from '../../constants/app';
import Picker from '../BaseUI/Picker/index';
import {getLocalList} from '../../screens/User/UserRegisterScreen';
import {changeLocale} from '../../utils/locale';

class SettingComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.state = {
      localesList: [],
    };
    getLocalList(this.state.localesList);
  }

  menuClick = (index) => {
    const {logOut, deleteAccount} = this.props;
    switch (index) {
      case 0:
        this.confirm.open(i18n.settingLogout, i18n.settingLogOutSubTitle, logOut);
        break;
      case 1:
        this.confirm.open(i18n.settingDeleteAccount, i18n.settingDeleteAccountSubTitle, deleteAccount);
        break;
    }
  };

  render() {
    const styles = this.getStyles();

    const {intl, goTowStepSetting, goBack} = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement={(<PopupMenu actionList={[
            intl.formatMessage(i18n.settingLogout),
            intl.formatMessage(i18n.settingDeleteAccount),
          ]} type={APP_MODAL_ID_PRIMARY} onPress={(result) => this.menuClick(result)}/>)}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.settingSetting)}</Text>}
        />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingGeneralSettings)} </Text>
          {/*<ListItem*/}
          {/*centerElement={{primaryText: intl.formatMessage(i18n.settingNotificationAndSound)}}*/}
          {/*onPress={null}*/}
          {/*style={styles.listItem}*/}
          {/*/>*/}
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.privacyPrivacy)}}
            onPress={() => goSettingPrivacy()}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingBlockList)}}
            onPress={() => goBlockList()}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.activeSessionActiveSession)}}
            onPress={() => goActiveSession()}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingTwoStepVerification)}}
            onPress={goTowStepSetting}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingLoginWithQrCode)}}
            onPress={() => goQrCode()}
            style={styles.listItem}
          />

          <ListItem
            onPress={() => this.languagePicker.modal.open(true)}
            centerElement={{primaryText: intl.formatMessage(i18n.settingLanguage)}}
            rightElement={
              <Picker ref={(ref) => {
                this.languagePicker = ref;
              }}
              headerTitle={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
              options={this.state.localesList}
              onItemSelect={(locale) => changeLocale(locale)}
              placeHolder={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
              style={{wrapper:{display:'none'}}}/>}
            style={styles.listItem}
          />
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingIgapSupport)} </Text>
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingIgapOfficialHome)}}
            onPress={() => Linking.openURL('https://www.igap.net')}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingIgapOfficialBlog)}}
            onPress={() => Linking.openURL('https://blog.igap.net')}
            style={styles.listItem}
          />
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingSupportRequest)}}
            onPress={() => Linking.openURL('https://support.igap.net')}
            style={styles.listItem}
          />
          <Text style={styles.subItemText}>{intl.formatMessage(i18n.settingIgapVersion, {
            platform: Platform.OS,
            appVersion: APP_VERSION,
          })}</Text>

        </ScrollView>

        <Confirm control={(dialog) => {
          this.confirm = dialog;
        }} type={APP_MODAL_ID_PRIMARY}/>

      </View>
    );
  }
}

SettingComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default injectIntl(SettingComponent);
