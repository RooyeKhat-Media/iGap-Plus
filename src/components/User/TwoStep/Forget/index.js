import * as _ from 'lodash';
import React, {Component} from 'react';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {View} from 'react-native';

const uniqueId = _.uniqueId();

class UserTwoStepForgetComponent extends Component {
  render() {
    const {intl, goBack, hasConfirmedEmail, recoveryByEmail, recoveryByQuestionAndAnswer} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepForgetTitle)}/>

        <View style={styles.recoveryBtnWrap}>
          <View style={styles.recoveryBtn}>
            <Button disabled={!hasConfirmedEmail} raised accent
              onPress={recoveryByEmail}
              text={intl.formatMessage(i18n.twoStepForgetRecoveryByEmailBtn)}/>
          </View>
          <View style={styles.recoveryBtn}>
            <Button raised accent
              onPress={recoveryByQuestionAndAnswer}
              text={intl.formatMessage(i18n.twoStepForgetRecoveryByQuestionBtn)}/>
          </View>
        </View>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.twoStepForgetInfoTitle} />}
        content={<FormattedMessage {...i18n.twoStepForgetInfoContent} />}/>

      </DimensionLimiter>
    );
  }
}

UserTwoStepForgetComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(UserTwoStepForgetComponent);