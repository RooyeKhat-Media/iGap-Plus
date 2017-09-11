import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {View} from 'react-native';

const uniqueId = _.uniqueId();

class UserTwoStepForgetComponent extends Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet(this.context.uiTheme.UserTwoStepForget));
  };

  render() {
    const {intl, goBack, hasConfirmedEmail, recoveryByEmail, recoveryByQuestionAndAnswer} = this.props;
    const styles = this.getStyles();

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