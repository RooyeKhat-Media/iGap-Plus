import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Form, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

class UserTwoStepSetPasswordComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, currentState, formData, formRules, onSubmit, goBack} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.twoStepSetPasswordTitle)}
          rightElement="check"
          onRightElementPress={async () => {
            const data = await this.form.submit();
            await onSubmit(data, this.form);
          }}
        />
        <Form submitLock={currentState === 5} style={styles.body} control={(form) => {
          this.form = form;
        }}>

          {currentState === 0 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordPasswordLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.password}
              name="password"
              defaultValue={formData.password}
              secureTextEntry={true}
              label={intl.formatMessage(i18n.twoStepSetPasswordPasswordHint)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordPasswordHint)}
            />
          </View>)}
          {currentState === 1 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordConfirmPasswordLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.confirmPassword}
              name="confirmPassword"
              defaultValue={formData.confirmPassword}
              secureTextEntry={true}
              label={intl.formatMessage(i18n.twoStepSetPasswordConfirmPasswordHint)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordConfirmPasswordHint)}
            />
          </View>)}
          {currentState === 2 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordHintLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.hint}
              name="hint"
              defaultValue={formData.hint}
              label={intl.formatMessage(i18n.twoStepSetPasswordHintLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordHintLabel)}
            />
          </View>)}
          {currentState === 3 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordQuestionOneLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.question_one}
              name="question_one"
              defaultValue={formData.question_one}
              label={intl.formatMessage(i18n.twoStepSetPasswordQuestionOneLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordQuestionOneLabel)}
            />
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordAnswerOneLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.answer_one}
              name="answer_one"
              defaultValue={formData.answer_one}
              label={intl.formatMessage(i18n.twoStepSetPasswordAnswerOneLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordAnswerOneLabel)}
            />
          </View>)}
          {currentState === 4 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordQuestionTwoLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.question_two}
              name="question_two"
              defaultValue={formData.question_two}
              label={intl.formatMessage(i18n.twoStepSetPasswordQuestionTwoLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordQuestionTwoLabel)}
            />
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordAnswerTwoLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.answer_two}
              name="answer_two"
              defaultValue={formData.answer_two}
              label={intl.formatMessage(i18n.twoStepSetPasswordAnswerTwoLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordAnswerTwoLabel)}
            />
          </View>)}
          {currentState === 5 && (<View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordEmailLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.recovery_email}
              name="recovery_email"
              defaultValue={formData.recovery_email}
              label={intl.formatMessage(i18n.twoStepSetPasswordEmailLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordEmailLabel)}
            />
          </View>)}

        </Form>
      </View>
    );
  }
}

UserTwoStepSetPasswordComponent.propTypes = {
  intl: intlShape.isRequired,
  currentState: PropTypes.number.isRequired,
  formData: PropTypes.object.isRequired,
  formRules: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepSetPasswordComponent);