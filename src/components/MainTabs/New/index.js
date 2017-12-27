import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, ScrollView, Text, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {ListItem, MCIcon, Toolbar} from '../../BaseUI/index';
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
            <ListItem
              leftElement={<MCIcon name="account-multiple" size={24}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewGroup),
              }}
              onPress={goGroupCreate}
              style={styles.listItem}
            />
            <ListItem
              leftElement={<MCIcon name="bullhorn" size={24}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewChannel),
              }}
              onPress={goChannelCreate}
              style={styles.listItem}
            />
            <ListItem
              leftElement={<MCIcon name="lock" size={24}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewSecretP2PChat),
              }}
              onPress={this.newSecretP2pChat}
              style={styles.listItem}
            />
            <ListItem
              leftElement={<MCIcon name="credit-card" size={24}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewCreateInvoice),
              }}
              onPress={this.newCreateInvoice}
              style={styles.listItem}
            />


            <View style={[styles.rowField, {marginTop: 15, marginBottom: 7}]}>
              <Text style={styles.titleText}>{intl.formatMessage(i18n.newContacts)}</Text>
              <View style={styles.divider}/>
            </View>


            <ListItem
              leftElement={<MCIcon name="plus" size={28}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newAddContacts),
              }}
              onPress={goContactNew}
              style={styles.listItem}
            />

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