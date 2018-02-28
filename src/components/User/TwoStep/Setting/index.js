import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {ActivityIndicator, Form, ListItem, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import {textTitleStyle} from '../../../../themes/default/index';
import styles from './index.styles';

class UserTwoStepSettingComponent extends Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };

  checkPassword = async () => {
    const {checkPassword} = this.props;
    if (this.form) {
      const data = await this.form.submit();
      await checkPassword(data, this.form.setError);
    }
  };

  render() {
    const {intl, SETTING_STATE, currentState, passwordDetail, formRules, geTwoStepSetPassword, goBack} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.twoStepSettingTitle)}</Text>}
          rightElement={(currentState === SETTING_STATE.CHECK_PASSWORD ? 'check' : null)}
          onRightElementPress={this.checkPassword}
        />

        {currentState === SETTING_STATE.LOADING &&
        (<View style={[styles.paddingBody, styles.centerBody]}><ActivityIndicator size="large"/></View>)}

        {currentState === SETTING_STATE.SET_PASSWORD &&
        (<View style={styles.body}>
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingSetAdditionalPasswordBtn),
            }}
            onPress={geTwoStepSetPassword}
          />
          <Text style={styles.textHelp}>
            <FormattedMessage {...i18n.twoStepSettingSetAdditionalPasswordHelp} />
          </Text>
        </View>)}

        {currentState === SETTING_STATE.CHECK_PASSWORD &&
        (<Form style={styles.paddingBody} control={(form) => {
          this.form = form;
        }}>
          <View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordPasswordLabel} /></Text>
            <TextInputField
              isField={true}
              name="password"
              defaultValue=""
              secureTextEntry={true}
              rules={formRules.password}
              label={intl.formatMessage(i18n.twoStepSetPasswordPasswordHint)}
              placeholder={passwordDetail.hint}/>
          </View>
        </Form>)}

        {currentState === SETTING_STATE.SETTING_MENU &&
        (<View style={styles.body}>
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangePasswordBtn),
            }}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeEmailBtn),
            }}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeHintBtn),
            }}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeRecoveryQuestionsBtn),
            }}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingVerifyEmailBtn),
            }}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingDeleteTwoStepBtn),
            }}
          />
          <Text style={styles.textHelp}>
            <FormattedMessage {...i18n.twoStepSettingSettingHelp} />
          </Text>
        </View>)}

      </View>
    );
  }
}

UserTwoStepSettingComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(UserTwoStepSettingComponent);