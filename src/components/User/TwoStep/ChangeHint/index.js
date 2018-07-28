import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Form, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

class UserTwoStepChangeHintComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, formRules, onSubmit, goBack} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.twoStepChangeHintTitle)}
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
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordHintLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.hint}
              name="hint"
              label={intl.formatMessage(i18n.twoStepSetPasswordHintLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordHintLabel)}
            />
          </View>

        </Form>
      </View>
    );
  }
}

UserTwoStepChangeHintComponent.propTypes = {
  intl: intlShape.isRequired,
  formRules: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepChangeHintComponent);