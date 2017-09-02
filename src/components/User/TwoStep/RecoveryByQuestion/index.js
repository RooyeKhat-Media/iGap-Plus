import * as _ from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {Text, View} from 'react-native';
import Form from '../../../BaseUI/Form/index';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class UserTwoStepRecoveryByQuestionComponent extends Component {
  render() {
    const {intl, formRules, handleFormData, errorQuestion1, errorQuestion2, question1, question2, goBack} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepRecoveryByQuestionTitle)}/>
        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <Text style={styles.label}>
            <FormattedMessage {...i18n.twoStepRecoveryByQuestionQuestionOne}/>
            {question1}
          </Text>
          <View style={styles.formGroup}>
            <TextInputField
              isField={true}
              rules={formRules.question1}
              name="question1"
              label={intl.formatMessage(i18n.twoStepRecoveryByQuestionQuestionOne)}
              defaultValue=""
              defaultError={errorQuestion1}
              underlineColorAndroid="#eee"
              placeholder={intl.formatMessage(i18n.twoStepRecoveryByQuestionAnswerOnePlaceholder)}
            />
          </View>

          <Text style={styles.label}>
            <FormattedMessage {...i18n.twoStepRecoveryByQuestionQuestionTwo}/>
            {question2}
          </Text>
          <View style={styles.formGroup}>
            <TextInputField
              isField={true}
              rules={formRules.question2}
              name="question2"
              label={intl.formatMessage(i18n.twoStepRecoveryByQuestionQuestionTwo)}
              defaultValue=""
              defaultError={errorQuestion2}
              underlineColorAndroid="#eee"
              placeholder={intl.formatMessage(i18n.twoStepRecoveryByQuestionAnswerTwoPlaceholder)}
            />
          </View>

          <View style={styles.formGroup}>
            <Button raised primary text={intl.formatMessage(i18n.twoStepRecoveryByQuestionSubmitFormBtnTitle)}
              onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data);
                } finally {
                  this.form.loadingOff();
                }
              }}/>
          </View>
        </Form>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.twoStepRecoveryByQuestionInfoTitle} />}
        content={<FormattedMessage {...i18n.twoStepRecoveryByQuestionInfoContent} />}/>

      </DimensionLimiter>
    );
  }
}

UserTwoStepRecoveryByQuestionComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  question1: PropTypes.string.isRequired,
  question2: PropTypes.string.isRequired,
  errorQuestion1: PropTypes.string,
  errorQuestion2: PropTypes.string,
};
export default injectIntl(UserTwoStepRecoveryByQuestionComponent);