import React, {Component} from 'react';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {Toolbar} from '../../BaseUI/index';
import styles from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {injectIntl, intlShape} from 'react-intl';

const uniqueId = _.uniqueId();

class TwoStepVerificationComponent extends Component {

  render() {
    const {intl} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepVerificationTitle)}/>

      </DimensionLimiter>

    );
  }
}

TwoStepVerificationComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(TwoStepVerificationComponent);