import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {Button, Toolbar} from '../../BaseUI/index';
import {View} from 'react-native';
import styleSheet from './index.styles';
import {uniqueId} from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {injectIntl, intlShape} from 'react-intl';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import AvatarPicker from '../../../containers/Unit/AvatarPicker';

const _uniqueId = uniqueId();

class UserNewProfileComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, handleFormData, formRules, selectPhoto} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          centerElement={intl.formatMessage(i18n.newProfileTitle)}
        />

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <AvatarPicker selectPhoto={selectPhoto}/>

          <TextInputField
            isField={true}
            rules={formRules.nickName}
            name="nickName"
            defaultValue=""
            underlineColorAndroid="#eee"
            label={intl.formatMessage(i18n.newProfileNicknameLabel)}
            placeholder={intl.formatMessage(i18n.newProfileNicknameLabel)}
          />

          <View style={styles.btnRow}>
            <Button accent={false} raised primary text={intl.formatMessage(i18n.newProfileBtnTitle)}
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

UserNewProfileComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
};
export default injectIntl(responsive(UserNewProfileComponent));