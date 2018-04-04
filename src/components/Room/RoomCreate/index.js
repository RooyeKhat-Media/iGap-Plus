import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Form from '../../BaseUI/Form/index';
import TextInputField from '../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import AvatarPicker from '../../../containers/Unit/AvatarPicker';
import {textTitleStyle} from '../../../themes/default/index';

class RoomCreateComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {intl, handleFormData, selectPhoto, formRules, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.root}>
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
          centerElement={<Text style={textTitleStyle}>{intl.formatMessage(i18n.roomCreateToolbarTitle)}</Text>}
        />

        <ScrollView style={styles.scroll}>
          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>
            <AvatarPicker selectPhoto={selectPhoto}/>

            <TextInputField
              isField={true}
              rules={formRules.name}
              name="name"
              label={intl.formatMessage(i18n.roomCreateFieldName)}
              placeholder={intl.formatMessage(i18n.roomCreateFieldName)}
            />

            <TextInputField
              isField={true}
              rules={formRules.description}
              name="description"
              label={intl.formatMessage(i18n.roomCreateFieldDescription)}
              placeholder={intl.formatMessage(i18n.roomCreateFieldDescription)}
            />
          </Form>
        </ScrollView>
      </View>
    );
  }
}

RoomCreateComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  selectPhoto: PropTypes.func.isRequired,
  formRules: PropTypes.object.isRequired,
};

export default injectIntl(RoomCreateComponent);
