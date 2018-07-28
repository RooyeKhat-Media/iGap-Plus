import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Button, Spinner, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import Clipboard from '../../../modules/Clipboard/index';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomInviteLinkComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };
  copyClipboard = () => {
    const {inviteLink} = this.props;
    if (Clipboard.isSetSupported) {
      Clipboard.setString(inviteLink);
    }
  };
  onRevokeLinkBtnPress = async () => {
    const {revokeInviteLink} = this.props;
    this.loading.on();
    await revokeInviteLink();
    this.loading.off();
  };

  render() {
    const {intl, inviteLink, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          centerElement={intl.formatMessage(i18n.roomInviteLinkToolbarTitle)}
        />

        <ScrollView style={styles.scroll}>

          <View style={styles.LinkWrap}>
            <Text style={styles.inviteLinkLabel}>
              <FormattedMessage {...i18n.roomInviteLinkInviteLinkLabel} />
            </Text>
            <View style={styles.inviteLinkWrap}>
              <Text style={styles.inviteLink}>
                {inviteLink}
              </Text>
              <View style={styles.revokeWrap}>
                <Button raised
                  text={intl.formatMessage(i18n.roomInviteLinkCopyClipboardBtn)}
                  onPress={this.copyClipboard}/>
                <Button raised primary
                  style={styles.revokeBtn}
                  text={intl.formatMessage(i18n.roomInviteLinkRevokeLinkBtn)}
                  onPress={this.onRevokeLinkBtnPress}/>
              </View>
            </View>
          </View>

          <Spinner control={(loading) => {
            this.loading = loading;
          }}/>

        </ScrollView>
      </View>
    );
  }
}

RoomInviteLinkComponent.propTypes = {
  intl: intlShape.isRequired,
  inviteLink: PropTypes.string.isRequired,
  revokeInviteLink: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default injectIntl(RoomInviteLinkComponent);
