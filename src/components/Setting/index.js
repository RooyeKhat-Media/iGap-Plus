import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import {Toolbar} from '../BaseUI/index';
import i18n from '../../i18n/index';
import {goSettingPrivacy} from '../../navigators/PrimaryNavigator';

class SettingComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {intl, goBack} = this.props;

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
          centerElement={intl.formatMessage(i18n.settingSetting)}/>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.TitleText}> {intl.formatMessage(i18n.settingGeneralSettings)} </Text>
          <Text style={styles.itemText}>Notification and Sound</Text>
          <Text style={styles.itemText}
            onPress={() => goSettingPrivacy()}>{intl.formatMessage(i18n.privacyPrivacy)}</Text>
          <Text style={styles.itemText}>Language</Text>

          <Text style={styles.TitleText}> iGap Support </Text>
          <Text style={styles.itemText}>iGap Official Home</Text>
          <Text style={styles.itemText}>iGap Official Blog</Text>
          <Text style={styles.itemText}>Support Request</Text>
          <Text style={styles.subItemText}>igap plus android client v 0.3.3</Text>
        </ScrollView>
      </View>
    );
  }
}

SettingComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SettingComponent);
