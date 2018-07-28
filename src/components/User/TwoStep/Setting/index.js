import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {ActivityIndicator, Button, Confirm, Form, ListItem, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import styleSheet from './index.styles';
import {APP_MODAL_ID_PRIMARY} from '../../../../constants/app';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

class UserTwoStepSettingComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  checkPassword = async () => {
    const {checkPassword} = this.props;
    if (this.form) {
      try {
        this.form.loadingOn();
        const data = await this.form.submit();
        await checkPassword(data, this.form.setError);
      } finally {
        this.form.loadingOff();
      }
    }
  };

  render() {
    const styles = this.getStyles();
    const {
      intl, SETTING_STATE,
      currentState,
      passwordDetail,
      formRules,
      geTwoStepSetPassword,
      geTwoStepChangePassword,
      geTwoStepChangeEmail,
      geTwoStepChangeHint,
      goChangeRecoveryQuestion,
      goVerifyEmail,
      deleteTwoStep,
      goForgetScreen,
      goBack,
    } = this.props;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.twoStepSettingTitle)}
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
            <View style={styles.forgetWrper}>
              <Button
                primary
                style={styles.forgetBtn}
                onPress={goForgetScreen} text={intl.formatMessage(i18n.twoStepVerificationForgetBtnTitle)}/>
            </View>
          </View>
        </Form>)}

        {currentState === SETTING_STATE.SETTING_MENU &&
        (<View style={styles.body}>
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangePasswordBtn),
            }}
            onPress={geTwoStepChangePassword}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeEmailBtn),
            }}
            onPress={geTwoStepChangeEmail}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeHintBtn),
            }}
            onPress={geTwoStepChangeHint}
          />
          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingChangeRecoveryQuestionsBtn),
            }}
            onPress={goChangeRecoveryQuestion}
          />

          {(passwordDetail.unconfirmed_email_pattern !== '') &&
          (<ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingVerifyEmailBtn),
            }}
            onPress={goVerifyEmail}
          />)}

          <ListItem
            divider
            centerElement={{
              primaryText: intl.formatMessage(i18n.twoStepSettingDeleteTwoStepBtn),
            }}
            onPress={() => {
              this.confirm.open(
                i18n.twoStepSettingSettingUnsetPassowrdTitle,
                i18n.twoStepSettingSettingUnsetPassowrdDescription,
                deleteTwoStep);
            }}
          />
          {/*<Text style={styles.textHelp}>*/}
          {/*<FormattedMessage {...i18n.twoStepSettingSettingHelp} />*/}
          {/*</Text>*/}
        </View>)}

        <Confirm control={(dialog) => {
          this.confirm = dialog;
        }} type={APP_MODAL_ID_PRIMARY}/>

      </View>
    );
  }
}

UserTwoStepSettingComponent.propTypes = {
  intl: intlShape.isRequired,
  SETTING_STATE: PropTypes.object.isRequired,
  currentState: PropTypes.string.isRequired,
  passwordDetail: PropTypes.object,
  formRules: PropTypes.object.isRequired,
  geTwoStepSetPassword: PropTypes.func.isRequired,
  geTwoStepChangePassword: PropTypes.func.isRequired,
  geTwoStepChangeEmail: PropTypes.func.isRequired,
  geTwoStepChangeHint: PropTypes.func.isRequired,
  goChangeRecoveryQuestion: PropTypes.func.isRequired,
  goVerifyEmail: PropTypes.func.isRequired,
  deleteTwoStep: PropTypes.func.isRequired,
  goForgetScreen: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepSettingComponent);