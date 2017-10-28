import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from '../../../BaseUI';
import {black600, primary} from '../../../../themes/default/index';

export default ({contact}) => {

  return ( <TouchableOpacity style={styles.container}>
    <Icon name="person" size={55} color={primary}  style={styles.iconWrap}  />
    <View style={{marginTop:4}}>
      <Text  style={styles.allText}>{contact.firstName + ' ' + contact.lastName}</Text>
      <View    style={styles.rowField} >
        <Icon name="phone" size={20}  color={black600} style={styles.phoneIcon}/>
        <Text  style={styles.allText}>{contact.phone}</Text>
      </View>
      {contact.email && contact.email.toString().length > 0 && ( <View    style={styles.rowField} >
        <Icon name="email" size={20}  color={black600} style={styles.phoneIcon}/>
        <Text   style={styles.emailText} >{contact.email}</Text>
      </View>)}
    </View>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  container :{
    flexDirection : 'row',
    minWidth:350,
    margin:5,
  },
  message: {
    color: black600,
  },
  iconWrap: {
    marginRight:10,
    borderColor:primary,

  },
  allText: {
    color: black600,
  },
  phoneIcon: {
    marginRight:6,
  },
  rowField: {
    flexDirection : 'row',
  },
  emailText: {
    color: black600,
    overflow:'visible',
    paddingRight:210,    // todo nejati why email text need padding right ?
  },
});