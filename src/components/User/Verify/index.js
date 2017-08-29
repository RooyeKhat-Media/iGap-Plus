import React, {Component} from 'react';
import DimensionLimiter from '../../BaseUI/DimensionLimiter/index';
import {DialogModal, Toolbar} from '../../BaseUI/index';
import {View} from 'react-native';
import styles from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';

const uniqueId = _.uniqueId();

class UserVerifyComponent extends Component {
  render() {
    const {intl} = this.props;

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <View>
          <Toolbar
            leftElement="info"
            onLeftElementPress={() => {
              this.dialog.open();
            }}
            centerElement={intl.formatMessage(i18n.verifyToolbarTitle)}/>

          <DialogModal control={(dialog) => {
            this.dialog = dialog;
          }}
          title={<FormattedMessage {...i18n.registerInfoTitle} />}
          content={<FormattedMessage {...i18n.registerInfoContent} />}/>
        </View>
      </DimensionLimiter>
    );
  }
}

UserVerifyComponent.propTypes = {
  intl: intlShape.isRequired,

};
export default injectIntl(UserVerifyComponent);