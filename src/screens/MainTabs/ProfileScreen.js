import React, {Component} from 'react';
import ProfileComponent from '../../components/Profile/index';
import {connect} from 'react-redux';
import {USER_CONTACTS_GET_LIST} from '../../constants/methods/index';
import {UserContactsGetList} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {makeGetContactList} from '../../selector/methods/user/contacts/getList';
import {getCurrentUser} from '../../selector/entities/registeredUser';
import {goEditProfile} from '../../navigators/PrimaryNavigator';
import putState from '../../modules/Entities/RegisteredUsers/index';
import {getUserId} from '../../utils/app';

class ProfileScreen extends Component {

  async componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    await Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
    await putState(getUserId(true));
  }

  render() {
    const {currentUser, contactList} = this.props;
    return (
      <ProfileComponent
        currentUser={currentUser}
        contactList={contactList}
        editProfileBtn={goEditProfile}
      />
    );
  }
}

const makeMapStateToProps = () => {
  const getContactList = makeGetContactList();
  return (state, props) => {
    return {
      currentUser: getCurrentUser(state),
      contactList: getContactList(state),
    };
  };
};

export default connect(makeMapStateToProps)(ProfileScreen);