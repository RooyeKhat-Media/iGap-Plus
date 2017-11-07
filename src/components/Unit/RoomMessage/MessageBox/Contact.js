import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../BaseUI';
import {black600, primary} from '../../../../themes/default/index';


export default class Contact extends React.Component {
  render() {
    const {contact} = this.props;

    return ( <TouchableOpacity style={styles.container}>
      <Icon name="person" size={55} color={primary} style={{marginRight: 10, borderColor: primary}}/>
      <View style={{marginTop: 4}}>
        <Text style={styles.allText}>{contact.getFirstName() + ' ' + contact.getLastName()}</Text>
        {
          contact.getPhoneList().map((phone, index) => (
            <View key={'phone' + index} style={styles.rowField}>
              <Icon name="phone" size={20} color={black600} style={{marginRight: 6}}/>
              <Text style={styles.allText}>{phone}</Text>
            </View>
          ))
        }
        {
          contact.getEmailList().map((email, index) => (
            <View key={'email' + index} style={styles.rowField}>
              <Icon name="email" size={20} color={black600} style={{marginRight: 6}}/>
              <Text style={styles.emailText}>{email}</Text>
            </View>
          ))
        }
      </View>
    </TouchableOpacity>);
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minWidth: 350,
    margin: 5,
  },
  allText: {
    color: black600,
  },
  rowField: {
    flexDirection: 'row',
  },
  emailText: {
    color: black600,
    overflow: 'visible',
    paddingRight: 210,    // todo nejati why email text need padding right ?
  },
});