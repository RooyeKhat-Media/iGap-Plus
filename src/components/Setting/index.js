import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {forIn} from 'lodash';
import {Platform, ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.style';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Confirm, ListItem, MCIcon, PopupMenu, Toolbar} from '../BaseUI/index';
import i18n from '../../i18n/index';
import {
  goActiveSession,
  goBlockList,
  goChatBackGround,
  goQrCode,
  goSettingPrivacy,
} from '../../navigators/PrimaryNavigator';
import Linking from '../../modules/Linking/index';
import {APP_VERSION} from '../../constants/configs';
import {APP_MODAL_ID_PRIMARY} from '../../constants/app';
import Picker from '../BaseUI/Picker/index';
import {getLocalList} from '../../screens/User/UserRegisterScreen';
import {changeLocale} from '../../utils/locale';
import {IRANSans_Medium} from '../../constants/fonts/index';
import {changeAppTheme, setAppThemeName, themes} from '../../themes/index';
import {appTheme} from '../../themes/default/index';
import {arrowBackIcon} from '../BaseUI/Utile/index';

class SettingComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    const styles = this.getStyles();
    this.state = {
      currentTheme: null,
    };
    this.localesList = [];
    this.themesList = [];
    forIn(themes, (theme, key) => {
      this.themesList.push({
        key,
        value: theme.name,
        element: (<ListItem
          centerElement={{primaryText: theme.name}}
          rightElement={<View style={styles.themeColorWrap}>{
            theme.colors.map((color, i) => <View key={i} style={[styles.themeColor, {backgroundColor: color}]}/>)
          }</View>}
          style={{container: {backgroundColor: 'transparent', paddingLeft: 0}, primaryText: {...IRANSans_Medium}}}
        />),
        filter: theme.name,
      });
    });
    getLocalList(this.localesList);
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

  changeLocaleTheme = async (local) => {
    changeLocale(local);
  };
  changeTheme = async (idx) => {
    if (themes[idx]) {
      await setAppThemeName(idx);
      changeAppTheme(idx);
    }
  };

  render() {
    const styles = this.getStyles();

    const {intl, goTowStepSetting, goBack} = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          rightElement={(<PopupMenu actionList={[
            intl.formatMessage(i18n.settingLogout),
            intl.formatMessage(i18n.settingDeleteAccount),
          ]} type={APP_MODAL_ID_PRIMARY} onPress={(result) => this.menuClick(result)}/>)}
          centerElement={intl.formatMessage(i18n.settingSetting)}
        />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingGeneralSettings)} </Text>
          {/*<ListItem*/}
          {/*centerElement={{primaryText: intl.formatMessage(i18n.settingNotificationAndSound)}}*/}
          {/*onPress={null}*/}
          {/*style={styles.listItem}*/}
          {/*/>*/}
          <ListItem
            leftElement={<MCIcon name="lock" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.privacyPrivacy)}}
            onPress={() => goSettingPrivacy()}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="block-helper" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingBlockList)}}
            onPress={() => goBlockList()}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="cellphone-link" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.activeSessionActiveSession)}}
            onPress={() => goActiveSession()}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="security" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingTwoStepVerification)}}
            onPress={goTowStepSetting}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="qrcode-scan" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingLoginWithQrCode)}}
            onPress={() => goQrCode()}
            style={styles.listItem}
          />

          <ListItem
            leftElement={<MCIcon name="translate" size={22} color={appTheme.icon}/>}
            onPress={() => this.languagePicker.modal.open(true)}
            centerElement={{primaryText: intl.formatMessage(i18n.settingLanguage)}}
            rightElement={
              <Picker ref={(ref) => {
                this.languagePicker = ref;
              }}
              headerTitle={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
              options={this.localesList}
              onItemSelect={this.changeLocaleTheme}
              placeHolder={<FormattedMessage {...i18n.registerChangeLanguagePlaceholder} />}
              style={{wrapper: {display: 'none'}}}/>}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="palette" size={22} color={appTheme.icon}/>}
            onPress={() => this.themesPicker.modal.open(true)}
            centerElement={{primaryText: intl.formatMessage(i18n.settingThemesPickerTitle)}}
            rightElement={<Picker
              ref={(ref) => {
                this.themesPicker = ref;
              }}
              headerTitle={<FormattedMessage {...i18n.settingThemesPickerPlaceHolder} />}
              placeHolder={<FormattedMessage {...i18n.settingThemesPickerPlaceHolder} />}
              options={this.themesList}
              onItemSelect={this.changeTheme}
              style={{wrapper: {display: 'none'}}}/>}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="box-shadow" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingChatBackground)}}
            onPress={() => goChatBackGround()}
            style={styles.listItem}
          />
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingIgapSupport)} </Text>
          <ListItem
            leftElement={<MCIcon name="home" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingIgapOfficialHome)}}
            onPress={() => Linking.openURL('https://www.igap.net')}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="web" size={22} color={appTheme.icon}/>}
            centerElement={{primaryText: intl.formatMessage(i18n.settingIgapOfficialBlog)}}
            onPress={() => Linking.openURL('https://blog.igap.net')}
            style={styles.listItem}
          />
          <ListItem
            leftElement={<MCIcon name="headset" size={22} color={appTheme.icon}/>}
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
