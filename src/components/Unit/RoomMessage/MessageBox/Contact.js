import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {uniqueId} from 'lodash';
import {Icon} from '../../../BaseUI';
import {appTheme} from '../../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';


export default class Contact extends React.Component {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {contact} = this.props;
    const styles = this.getStyles();
    return ( <TouchableOpacity style={styles.container}>
      <Icon name="person" size={55} color={appTheme.primary} style={{marginRight: 10, borderColor: appTheme.primary}}/>
      <View style={{marginTop: 4}}>
        <Text style={styles.allText}>{contact.getFirstName() + ' ' + contact.getLastName()}</Text>
        {
          contact.getPhoneList().map((phone, index) => (
            <View key={'phone' + index} style={styles.rowField}>
              <Icon name="phone" size={20} color={appTheme.titleText} style={{marginRight: 6}}/>
              <Text style={styles.allText}>{phone}</Text>
            </View>
          ))
        }
        {
          contact.getEmailList().map((email, index) => (
            <View key={'email' + index} style={styles.rowField}>
              <Icon name="email" size={20} color={appTheme.titleText} style={{marginRight: 6}}/>
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

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        container: {
          flexDirection: 'row',
          minWidth: 350,
          margin: 5,
        },
        allText: {
          color: appTheme.primaryText,
        },
        rowField: {
          flexDirection: 'row',
        },
        emailText: {
          color: appTheme.primaryText,
          overflow: 'visible',
          paddingRight: 210,    // todo nejati why email text need padding right ?
        },
      },
    },
  ],
  true,
];