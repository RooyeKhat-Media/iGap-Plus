import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Form, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

class UserTwoStepChangeRecoveryQuestionComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, passwordDetail, formRules, onSubmit, goBack} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.twoStepChangeRecoveryQuestionTitle)}
          rightElement="check"
          onRightElementPress={async () => {
            const data = await this.form.submit();
            this.form.loadingOn();
            await onSubmit(data, this.form.setError);
            this.form.loadingOff();
          }}
        />
        <Form style={styles.body} control={(form) => {
          this.form = form;
        }}>
          <View style={styles.inputRow}>
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordQuestionOneLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.question_one}
              name="question_one"
              defaultValue={passwordDetail.question_one}
              label={intl.formatMessage(i18n.twoStepSetPasswordQuestionOneLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordQuestionOneLabel)}
            />
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordAnswerOneLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.answer_one}
              name="answer_one"
              label={intl.formatMessage(i18n.twoStepSetPasswordAnswerOneLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordAnswerOneLabel)}
            />
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordQuestionTwoLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.question_two}
              name="question_two"
              defaultValue={passwordDetail.question_two}
              label={intl.formatMessage(i18n.twoStepSetPasswordQuestionTwoLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordQuestionTwoLabel)}
            />
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordAnswerTwoLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.answer_two}
              name="answer_two"
              label={intl.formatMessage(i18n.twoStepSetPasswordAnswerTwoLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordAnswerTwoLabel)}
            />
          </View>
        </Form>
      </View>
    );
  }
}

UserTwoStepChangeRecoveryQuestionComponent.propTypes = {
  intl: intlShape.isRequired,
  passwordDetail: PropTypes.object.isRequired,
  formRules: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepChangeRecoveryQuestionComponent);