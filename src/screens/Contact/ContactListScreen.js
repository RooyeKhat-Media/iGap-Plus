import React, {Component} from 'react';
import ContactListComponent from '../../components/Contact/List';
import {connect} from 'react-redux';
import {USER_CONTACTS_GET_LIST} from '../../constants/methods/index';
import {UserContactsGetList} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';

class ContactListScreen extends Component {
  state = {
    loading: true,
  }
  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    await Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
    this.setState({loading: false});
  }

  render() {
    const {contactList} = this.props;
    const {loading} = this.state;
    return (
      <ContactListComponent goBack={this.props.navigation.goBack} loading={loading} contactList={contactList}/>
    );
  }
}


const mapStateToProps = state => {
  return {
    contactList: state.methods.contactsList,
  };
};
export default connect(
  mapStateToProps,
)(ContactListScreen);