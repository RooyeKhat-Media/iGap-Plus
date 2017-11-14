import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.style';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {DialogModal, Toolbar} from '../BaseUI/index';
import i18n from '../../i18n/index';
import {goActiveSession, goBlockList, goSettingPrivacy} from '../../navigators/PrimaryNavigator';

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
          centerElement={intl.formatMessage(i18n.settingSetting)}/>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingGeneralSettings)} </Text>
          <Text style={styles.itemText}>Notification and Sound</Text>
          <Text style={styles.itemText}
            onPress={() => goSettingPrivacy()}>{intl.formatMessage(i18n.privacyPrivacy)}</Text>
          <Text style={styles.itemText} onPress={() => goBlockList()}>{intl.formatMessage(i18n.settingBlockList)}</Text>
          <Text style={styles.itemText}
            onPress={() => goActiveSession()}>{intl.formatMessage(i18n.activeSessionActiveSession)}</Text>
          <Text style={styles.itemText}>Language</Text>

          <Text style={styles.TitleText}> iGap Support </Text>
          <Text style={styles.itemText}>iGap Official Home</Text>
          <Text style={styles.itemText}>iGap Official Blog</Text>
          <Text style={styles.itemText}>Support Request</Text>
          <Text style={styles.subItemText}>igap plus android client v 0.3.3</Text>
        </ScrollView>


        <DialogModal control={(dialog) => {
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

        <DialogModal control={(dialog) => {
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
