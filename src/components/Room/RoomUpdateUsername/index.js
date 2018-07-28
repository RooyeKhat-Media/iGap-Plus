import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {RadioButton, Spinner, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {arrowBackIcon} from '../../BaseUI/Utile/index';

class RoomUpdateUsernameComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, isPublic, username, formRules, inviteLink, onSelectRadioBtn, handleFormData, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View>
        <Toolbar
          leftElement={arrowBackIcon(goBack)}
          onLeftElementPress={goBack}
          onRightElementPress={async () => {
            try {
              this.form.loadingOn();
              let data;
              if (isPublic) {
                data = await this.form.submit();
              }
              await handleFormData(data, this.form.setError);
            } finally {
              this.form.loadingOff();
            }
          }}
          centerElement={intl.formatMessage(i18n.roomUpdateUsernameToolbarTitle)}/>

        <ScrollView style={styles.scroll}>
          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>

            <View style={styles.radioWrap}>
              <RadioButton
                value={0}
                checked={!isPublic}
                onSelect={onSelectRadioBtn}
                label={intl.formatMessage(i18n.roomUpdateUsernameRadioBtnPrivate)}
                style={styles.radioLabel}
              />
              <RadioButton
                value={1}
                checked={isPublic}
                onSelect={onSelectRadioBtn}
                label={intl.formatMessage(i18n.roomUpdateUsernameRadioBtnPublic)}
                style={styles.radioLabel}
              />
            </View>

            {isPublic ? (<View style={styles.usernameWrap}>
              <TextInputField
                isField={true}
                rules={formRules.username}
                name="username"
                defaultValue={username}
                label={intl.formatMessage(i18n.roomUpdateUsernameTitle)}
                placeholder={intl.formatMessage(i18n.roomUpdateUsernameTitle)}
              />
              <Text style={styles.textPublic}>
                <FormattedMessage {...i18n.roomUpdateUsernameDescription} />
              </Text>
            </View>) : null}

            {(!!inviteLink && !isPublic) &&
            (<View style={styles.LinkWrap}>
              <Text style={styles.inviteLinkLabel}>
                <FormattedMessage {...i18n.roomUpdateUsernameInviteLinkLabel} />
              </Text>
              <View style={styles.inviteLinkWrap}>
                <Text style={styles.inviteLink}>
                  {inviteLink}
                </Text>
              </View>
            </View>)}

            <Spinner control={(loading) => {
              this.loading = loading;
            }}/>

          </Form>
        </ScrollView>
      </View>
    );
  }
}

RoomUpdateUsernameComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
  inviteLink: PropTypes.string,
};

export default injectIntl(RoomUpdateUsernameComponent);
