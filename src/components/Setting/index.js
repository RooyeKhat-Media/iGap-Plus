import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.style';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {DialogModal, ListItem, Toolbar} from '../BaseUI/index';
import i18n from '../../i18n/index';
import {goActiveSession, goBlockList, goSettingPrivacy} from '../../navigators/PrimaryNavigator';
import Linking from '../../modules/Linking/index';
import {textTitleStyle} from '../../themes/default/index';
import {APP_VERSION} from '../../constants/configs';
import {APP_MODAL_ID_PRIMARY} from '../../constants/app';

class SettingComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  menuClick = (index) => {

    switch (index) {
      case 0:
        this.dialogLogOut.open();
        break;
      case 1:
        this.dialogDeleteAcount.open();
        break;
    }
  };

  render() {
    const styles = this.getStyles();

    const {intl, goBack, logOut, deleteAccount} = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement={{
            menu: {
              icon: 'more-vert',
              labels: [
                intl.formatMessage(i18n.settingLogout),
                intl.formatMessage(i18n.settingDeleteAccount),
              ],
            },
          }}
          onRightElementPress={(result) => this.menuClick(result.index)}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.settingSetting)}</Text>}
        />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingGeneralSettings)} </Text>
          <ListItem
            centerElement={{primaryText: intl.formatMessage(i18n.settingNotificationAndSound)}}
            onPress={null}
            style={styles.listItem}
          />
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
            centerElement={{primaryText: intl.formatMessage(i18n.settingLanguage)}}
            onPress={null}
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


        <DialogModal type={APP_MODAL_ID_PRIMARY} control={(dialog) => {
          this.dialogLogOut = dialog;
        }}
        title={<FormattedMessage {...i18n.settingLogout}/>}
        content={<FormattedMessage {...i18n.settingLogOutSubTitle} />}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              logOut();
            },
          },
          {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          },
        ]}/>

        <DialogModal type={APP_MODAL_ID_PRIMARY} control={(dialog) => {
          this.dialogDeleteAcount = dialog;
        }}
        title={<FormattedMessage {...i18n.settingDeleteAccount}/>}
        content={<FormattedMessage {...i18n.settingDeleteAccountSubTitle} />}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              deleteAccount();
            },
          },
          {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          },
        ]}/>


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
