import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {MCIcon, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl} from 'react-intl';
import UserListItem from '../../../containers/Unit/UserListItem';

class NewComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  newSecretP2pChat = () => {
    alert('newSecretP2pChat');
  };

  newCreateInvoice = () => {
    alert('newCreateInvoice');
  };

  render() {
    const {intl, contactList, onUserPress, goContactNew, goGroupCreate, goChannelCreate} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement={<Text style={styles.titleText}>{intl.formatMessage(i18n.newPlus)}</Text>}
          rightElement="more-vert"
          onRightElementPress={() => alert('menu')}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
        <ScrollView>

          <View style={styles.sectionTop}>
            <TouchableOpacity style={styles.rowField} onPress={goGroupCreate}>
              <MCIcon name="account-multiple" style={styles.iconFeild} size={24}/>
              <Text style={styles.textitem}>{intl.formatMessage(i18n.newNewGroup)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowField} onPress={goChannelCreate}>
              <MCIcon name="bullhorn" style={styles.iconFeild} size={24}/>
              <Text style={styles.textitem}>{intl.formatMessage(i18n.newNewChannel)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowField} onPress={this.newSecretP2pChat}>
              <MCIcon name="lock" style={styles.iconFeild} size={24}/>
              <Text style={styles.textitem}>{intl.formatMessage(i18n.newNewSecretP2PChat)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowField} onPress={this.newCreateInvoice}>
              <MCIcon name="credit-card" style={styles.iconFeild} size={24}/>
              <Text style={styles.textitem}>{intl.formatMessage(i18n.newNewCreateInvoice)}</Text>
            </TouchableOpacity>

            <View style={[styles.rowField, {marginTop: 15, marginBottom: 7}]}>
              <Text style={styles.titleText}>{intl.formatMessage(i18n.newContacts)}</Text>
              <View style={styles.divider}/>
            </View>

            <TouchableOpacity style={[styles.rowField, {marginLeft: 10}]} onPress={goContactNew}>
              <MCIcon name="plus" style={styles.iconFeild} size={28}/>
              <Text style={styles.textitem}>{intl.formatMessage(i18n.newAddContacts)}</Text>
            </TouchableOpacity>
          </View>

          {contactList.length ? <FlatList
            data={contactList}
            keyExtractor={(item, index) => ('contact-' + item.id)}
            renderItem={({item}) => <UserListItem userId={item.id} onPress={onUserPress} divider={item.divider}/>}
          /> : null}

        </ScrollView>
      </View>
    );
  }
}

NewComponent.propTypes = {
  goContactNew: PropTypes.func.isRequired,
  goGroupCreate: PropTypes.func.isRequired,
  goChannelCreate: PropTypes.func.isRequired,
};

export default injectIntl(NewComponent);