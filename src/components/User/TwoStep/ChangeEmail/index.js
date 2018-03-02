import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Form, TextInputField, Toolbar} from '../../../BaseUI/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import i18n from '../../../../i18n/index';
import {textTitleStyle} from '../../../../themes/default/index';
import styles from './index.styles';

class UserTwoStepChangeEmailComponent extends Component {

  render() {
    const {intl, formRules, onSubmit, goBack} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.twoStepChangeEmailTitle)}</Text>}
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
            <Text style={styles.inputTitle}><FormattedMessage {...i18n.twoStepSetPasswordEmailLabel} /></Text>
            <TextInputField
              isField={true}
              rules={formRules.email}
              name="email"
              label={intl.formatMessage(i18n.twoStepSetPasswordEmailLabel)}
              placeholder={intl.formatMessage(i18n.twoStepSetPasswordEmailLabel)}
            />
          </View>

        </Form>
      </View>
    );
  }
}

UserTwoStepChangeEmailComponent.propTypes = {
  intl: intlShape.isRequired,
  formRules: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(UserTwoStepChangeEmailComponent);