import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Button, Spinner, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {textTitleStyle} from '../../../themes/default/index';

class RoomInviteLinkComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
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
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.roomInviteLinkToolbarTitle)}</Text>}
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
                <Button raised primary
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
