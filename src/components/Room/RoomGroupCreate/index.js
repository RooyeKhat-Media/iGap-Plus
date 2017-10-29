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

class RoomGroupCreateComponent extends Component {

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
            centerElement={intl.formatMessage(i18n.roomGroupCreateNewGroup)}/>

          <ScrollView   style={styles.scroll}>
            <Form style={styles.form} control={(form) => {
              this.form = form;
            }}>
              <TouchableOpacity style={styles.avatarWrap} onPress={ () => alert('seletct picture ')}>
                <Avatar text="+" size={120} style={styles.avatar}   />
              </TouchableOpacity>

              <TextInputField
                isField={true}
                rules={formRules.groupName}
                name="groupName"
                label={intl.formatMessage(i18n.roomGroupCreateGroupName)}
                placeholder={intl.formatMessage(i18n.roomGroupCreateGroupName)}
              />

              <TextInputField
                isField={true}
                rules={formRules.groupDescription}
                name="groupDescription"
                label={intl.formatMessage(i18n.roomGroupCreateGroupDescription)}
                placeholder={intl.formatMessage(i18n.roomGroupCreateGroupDescription)}
              />
              <View style={{height:100}}/>
            </Form>
          </ScrollView>
        </View>
      );
    }
}

RoomGroupCreateComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
};

export default injectIntl(RoomGroupCreateComponent);
