import React, {Component} from 'react';
import ContactListComponent from '../../components/Contact/List';

class ContactListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ContactListComponent goBack={this.props.navigation.goBack}/>
    );
  }
}

export default ContactListScreen;