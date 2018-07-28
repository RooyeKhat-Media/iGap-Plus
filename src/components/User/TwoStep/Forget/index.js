import React, {Component} from 'react';
import {uniqueId} from 'lodash';
import {Button, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';
import {View} from 'react-native';
import {arrowBackIcon} from '../../../BaseUI/Utile/index';

const _uniqueId = uniqueId();

class UserTwoStepForgetComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, goBack, hasConfirmedEmail, recoveryByEmail, recoveryByQuestionAndAnswer} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={_uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.wrapper}
        layoutStyle={styles.layout}>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          showAuthenticating={false}
          centerElement={intl.formatMessage(i18n.twoStepForgetTitle)}
        />
        <View style={styles.recoveryBtnWrap}>
          <View style={styles.recoveryBtn}>
            <Button disabled={!hasConfirmedEmail} raised primary
              onPress={recoveryByEmail}
              text={intl.formatMessage(i18n.twoStepForgetRecoveryByEmailBtn)}/>
          </View>
          <View style={styles.recoveryBtn}>
            <Button raised primary
              onPress={recoveryByQuestionAndAnswer}
              text={intl.formatMessage(i18n.twoStepForgetRecoveryByQuestionBtn)}/>
          </View>
        </View>
      </DimensionLimiter>
    );
  }
}

UserTwoStepForgetComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(UserTwoStepForgetComponent);