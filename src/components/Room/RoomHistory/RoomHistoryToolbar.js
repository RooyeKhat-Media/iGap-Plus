import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {PopupMenu, Toolbar} from '../../BaseUI/index';
import {injectIntl, intlShape} from 'react-intl';
import i18n from '../../../i18n/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.styles';
import {APP_MODAL_ID_SECONDARY} from '../../../constants/app';
import Verify from '../../../assets/images/verify';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomHistoryToolbar extends PureComponent {

  constructor(args) {
    super(args);
    const {intl} = this.props;
    this.actionListMenu = [intl.formatMessage(i18n.roomHistoryActionReport), intl.formatMessage(i18n.roomHistoryQrLink)];
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {roomTitle, verified, clientUpdating, goRoomInfoBtn, onRoomHistoryMorePress, goBack, intl} = this.props;
    const styles = this.getStyles();
    return (
      <Toolbar
        leftElement={arrowBackIcon(goBack)}
        centerElement={
          clientUpdating ?
            <View style={styles.rowTitle}>
              <Text numberOfLines={1} style={styles.titleText}>{intl.formatMessage(i18n.clientUpdating)}</Text>
            </View>
            :
            <View style={styles.rowTitle}>
              <Text numberOfLines={1} style={styles.titleText}>{roomTitle}</Text>
              {verified && <Verify style={styles.verifyStyle}/>}
            </View>
        }
        rightElement={(
          <PopupMenu actionList={this.actionListMenu} type={APP_MODAL_ID_SECONDARY}
            onPress={onRoomHistoryMorePress}/>)}
        onPress={goRoomInfoBtn}
      />
    );
  }
}

RoomHistoryToolbar.propTypes = {
  intl: intlShape.isRequired,
  verified: PropTypes.bool,
  roomTitle: PropTypes.string.isRequired,
  clientUpdating: PropTypes.bool.isRequired,
  goRoomInfoBtn: PropTypes.func.isRequired,
  onRoomHistoryMorePress: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomHistoryToolbar);
