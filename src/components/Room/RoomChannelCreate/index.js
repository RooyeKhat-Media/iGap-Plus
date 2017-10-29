import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Avatar, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class RoomChannelCreateComponent extends Component {

    getStyles = () => {
      return MemoizeResponsiveStyleSheet(styleSheet);
    };

    render() {
      const {intl, handleFormData, formRules, goBack} = this.props;
      const styles = this.getStyles();

      return (
        <View>
          <Toolbar
            leftElement="arrow-back"
            rightElement="check"
            onLeftElementPress={goBack}
            onRightElementPress={async () => {
              try {
                this.form.loadingOn();
                const data = await this.form.submit();
                await handleFormData(data, this.form.setError);
              } finally {
                this.form.loadingOff();
              }
            }}
            centerElement={intl.formatMessage(i18n.roomChannelCreateNewChannel)}/>

          <ScrollView   style={styles.scroll}>
            <Form style={styles.form} control={(form) => {
              this.form = form;
            }}>
              <TouchableOpacity style={styles.avatarWrap} onPress={ () => alert('seletct picture ')}>
                <Avatar text="+" size={120} style={styles.avatar}   />
              </TouchableOpacity>

              <TextInputField
                isField={true}
                rules={formRules.channelName}
                name="channelName"
                label={intl.formatMessage(i18n.roomChannelCreateChannelName)}
                placeholder={intl.formatMessage(i18n.roomChannelCreateChannelName)}
              />

              <TextInputField
                isField={true}
                rules={formRules.ChannelDescription}
                name="channelDescription"
                label={intl.formatMessage(i18n.roomChannelCreateChannelDescription)}
                placeholder={intl.formatMessage(i18n.roomChannelCreateChannelDescription)}
              />
              <View style={{height:100}}/>
            </Form>
          </ScrollView>
        </View>
      );
    }
}

RoomChannelCreateComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
};

export default injectIntl(RoomChannelCreateComponent);
