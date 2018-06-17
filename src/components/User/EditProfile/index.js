import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import {injectIntl, intlShape} from 'react-intl';
import {Form, LoadingDots, PickerField, TextInputField, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import Avatar from '../../../containers/Unit/Avatar';
import {goAvatarList} from '../../../navigators/SecondaryNavigator';
import {getUserId} from '../../../utils/app';

class UserEditProfile extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  handleFormData = async () => {
    const {handleFormData} = this.props;
    try {
      this.form.loadingOn();
      const data = await this.form.submit();
      await handleFormData(data, this.form.setError);
    } finally {
      this.form.loadingOff();
    }
  };

  render() {
    const styles = this.getStyles();
    const {intl, uploading, currentUser, formRules, nickName, email, gender, bio, selectPhoto, goBack} = this.props;

    if (!currentUser) {
      return null;
    }
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="close"
          rightElement="check"
          onLeftElementPress={goBack}
          onRightElementPress={this.handleFormData}
          centerElement={intl.formatMessage(i18n.editProfileEditProfile)}
        />

        <ScrollView style={styles.scroll}>

          <View style={styles.avatar}>
            {(currentUser && !uploading) &&
            <Avatar userId={currentUser.id} size={110} onPress={() => goAvatarList(null, getUserId(true))}/>}
            {(uploading) && <LoadingDots style={styles.loaderStyle}/>}
          </View>

          {!uploading && (<Text style={styles.text_changePhoto} onPress={selectPhoto}>
            {intl.formatMessage(i18n.editProfileChangePhoto)}
          </Text>)}


          <Form style={styles.form} control={(form) => {
            this.form = form;
          }}>
            <Text style={styles.text}>{intl.formatMessage(i18n.editProfileName)}</Text>
            <TextInputField
              style={styles.textInputField}
              isField={true}
              defaultValue={nickName}
              rules={formRules.nickName}
              name="nickName"
              label={intl.formatMessage(i18n.editProfileName)}
              placeholder={intl.formatMessage(i18n.editProfileName)}/>

            <Text style={styles.text}>{intl.formatMessage(i18n.editProfileUserName)}</Text>
            <TextInputField
              style={styles.textInputField}
              isField={true}
              rules={formRules.userName}
              defaultValue={currentUser ? currentUser.username : ''}
              name="userName"
              label={intl.formatMessage(i18n.editProfileUserName)}
              placeholder={intl.formatMessage(i18n.editProfileUserName)}/>

            <Text style={styles.text}>{intl.formatMessage(i18n.editProfilePhoneNumber)}</Text>
            <Text style={styles.textPhone}>{currentUser ? currentUser.phone.toString() : ''}</Text>

            <Text style={styles.text}>{intl.formatMessage(i18n.editProfileBio)}</Text>
            <TextInputField
              style={styles.textInputField}
              isField={true}
              rules={formRules.bio}
              defaultValue={bio}
              name="bio"
              label={intl.formatMessage(i18n.editProfileBio)}
              placeholder={intl.formatMessage(i18n.editProfileBio)}/>

            <Text style={styles.text}>{intl.formatMessage(i18n.editProfileGender)}</Text>
            <PickerField
              isField={true}
              rules={[]}
              name="gender"
              label="gender"
              style={styles.PickerField}
              defaultValue={gender}
              options={[
                {value: 0, label: intl.formatMessage(i18n.editProfileNotSpecified)},
                {value: 1, label: intl.formatMessage(i18n.editProfileMale)},
                {value: 2, label: intl.formatMessage(i18n.editProfileFemale)},
              ]}/>

            <Text style={styles.text}>{intl.formatMessage(i18n.editProfileEmail)}</Text>
            <TextInputField
              style={styles.textInputField}
              isField={true}
              rules={formRules.email}
              defaultValue={email}
              name="email"
              keyboardType="email-address"
              label={intl.formatMessage(i18n.editProfileEmail)}
              placeholder={intl.formatMessage(i18n.editProfileEmail)}
            />
          </Form>

        </ScrollView>
      </View>
    );
  }
}

UserEditProfile.propTypes = {
  goBack: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  formRules: PropTypes.object,
  nickName: PropTypes.string,
  currentUser: PropTypes.object,
  bio: PropTypes.string,
  gender: PropTypes.number,
  email: PropTypes.string,
};

export default injectIntl(UserEditProfile);