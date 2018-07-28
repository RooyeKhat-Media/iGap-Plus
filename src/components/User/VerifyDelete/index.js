import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Toolbar} from '../../BaseUI/index';
import {Text, View} from 'react-native';
import styleSheet from '../Verify/index.styles';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class UserVerifyDeleteComponent extends Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, resendDelay, formRules, handleFormData, resendCode, defaultValue, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <Form control={(form) => {
        this.form = form;
      }}>

        <Toolbar
          leftElement={arrowBackIcon(goBack)}
        />

        <View style={[{margin: 20}]}>
          <Text style={styles.verifyTitle}><FormattedMessage {...i18n.userVerifyDeleteVerifyDeleteAccount}/></Text>
          <Text style={styles.verifySubTitle}><FormattedMessage {...i18n.userVerifyDeleteSubTitle}/></Text>
          <View style={styles.codeRow}>
            <TextInputField
              isField={true}
              rules={formRules.verifyToken}
              name="verifyCode"
              defaultValue={defaultValue.length > 0 ? defaultValue : ''}
              underlineColorAndroid="#eee"
              label={intl.formatMessage(i18n.userVerifyDeleteCode)}
              placeholder={intl.formatMessage(i18n.userVerifyDeleteEnterCode)}
            />
          </View>

          <View style={styles.resendWrap}>
            {resendDelay ? (<Text style={styles.resendTxt}><FormattedMessage {...i18n.verifyResendCodeTimer}
              values={{time: resendDelay}}/></Text>) : null}

            <Button accent={false} raised primary text={intl.formatMessage(i18n.verifyCodeBtnTitle)}
              onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data.verifyCode, this.form.setError);
                } finally {
                  this.form.loadingOff();
                }
              }} style={styles.verifyBtn}/>

            {!resendDelay ?
              (<Button upperCase={false} primary style={styles.resendBtn}
                onPress={() => {
                  resendCode(this.form.setError);
                }}
                text={intl.formatMessage(i18n.verifyResendCodeBtnTitle)}/>) : null}
          </View>
        </View>
      </Form>
    );
  }
}

UserVerifyDeleteComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
  resendCode: PropTypes.func.isRequired,
  resendDelay: PropTypes.number.isRequired,
  defaultValue: PropTypes.string.optional,
  goBack: PropTypes.func.isRequired,
};
export default injectIntl(responsive(UserVerifyDeleteComponent));