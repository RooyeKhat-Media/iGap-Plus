import {uniqueId} from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {Text, View} from 'react-native';
import Form from '../../../BaseUI/Form/index';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

const _uniqueId = uniqueId();

class UserTwoStepRecoveryByQuestionComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, formRules, handleFormData, errorQuestion1, errorQuestion2, question1, question2, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.wrapper}
        layoutStyle={styles.layout}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          showAuthenticating={false}
          centerElement={intl.formatMessage(i18n.twoStepRecoveryByQuestionTitle)}
        />
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

          <View>
            <Button raised primary text={intl.formatMessage(i18n.twoStepRecoveryByQuestionSubmitFormBtnTitle)}
              onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data, this.form.setError);
                } finally {
                  this.form.loadingOff();
                }
              }}/>
          </View>
        </Form>

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