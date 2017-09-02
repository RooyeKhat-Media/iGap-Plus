import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {Button, DialogModal, Toolbar} from '../../BaseUI/index';
import {View} from 'react-native';
import styles from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class UserNewProfileComponent extends Component {

  render() {
    const {intl, handleFormData, formRules, nickNameError} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.newProfileTitle)}/>

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.inputRow}>
            <TextInputField
              isField={true}
              rules={formRules.nickName}
              name="nickName"
              defaultValue=""
              defaultError={nickNameError}
              underlineColorAndroid="#eee"
              label={intl.formatMessage(i18n.newProfileNicknameLabel)}
              placeholder={intl.formatMessage(i18n.newProfileNicknameLabel)}
            />
          </View>

          <View style={styles.inputRow}>
            <Button accent={false} raised primary text={intl.formatMessage(i18n.newProfileBtnTitle)}
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
        title={<FormattedMessage {...i18n.newProfileInfoTitle} />}
        content={<FormattedMessage {...i18n.newProfileInfoContent} />}/>

      </DimensionLimiter>
    );
  }
}

UserNewProfileComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
  nickNameError: PropTypes.string,
};
export default injectIntl(UserNewProfileComponent);