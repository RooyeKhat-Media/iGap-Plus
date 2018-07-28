import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, ScrollView, Text, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {ListItem, ListItem as BaseListItem, MCIcon, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl} from 'react-intl';
import UserListItem from '../../../containers/Unit/UserListItem';
import Avatar from '../../../containers/Unit/Avatar';
import {goCall} from '../../../navigators/SecondaryNavigator';
import {Proto} from '../../../modules/Proto/index';
import ReturnToCall from '../../Call/ReturnToCall';
import {appTheme} from '../../../themes/default/index';
import {getUserId} from '../../../utils/app';

class NewComponent extends PureComponent {

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
    const {intl, contactList, goContactNew, goGroupCreate, goChannelCreate, onUserPress} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          centerElement={intl.formatMessage(i18n.newPlus)}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
        <ReturnToCall/>
        <ScrollView style={styles.scroll}>

          <View style={styles.sectionTop}>
            <ListItem
              leftElement={<MCIcon name="account-multiple" size={24} color={appTheme.icon}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewGroup),
              }}
              onPress={goGroupCreate}
              style={styles.listItem}
            />
            <ListItem
              leftElement={<MCIcon name="bullhorn" size={24} color={appTheme.icon}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newNewChannel),
              }}
              onPress={goChannelCreate}
              style={styles.listItem}
            />
            {/*<ListItem*/}
            {/*leftElement={<MCIcon name="lock" size={24}/>}*/}
            {/*centerElement={{*/}
            {/*primaryText: intl.formatMessage(i18n.newNewSecretP2PChat),*/}
            {/*}}*/}
            {/*onPress={this.newSecretP2pChat}*/}
            {/*style={styles.listItem}*/}
            {/*/>*/}
            {/*<ListItem*/}
            {/*leftElement={<MCIcon name="credit-card" size={24}/>}*/}
            {/*centerElement={{*/}
            {/*primaryText: intl.formatMessage(i18n.newNewCreateInvoice),*/}
            {/*}}*/}
            {/*onPress={this.newCreateInvoice}*/}
            {/*style={styles.listItem}*/}
            {/*/>*/}

            <ListItem
              leftElement={<MCIcon name="cloud" size={20} color={appTheme.icon}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newMyCloud),
              }}
              onPress={() => {
                onUserPress(getUserId());
              }}
              style={styles.listItem}
            />

            <View style={[styles.rowField, {marginTop: 15, marginBottom: 7}]}>
              <Text style={styles.titleText}>{intl.formatMessage(i18n.newContacts)}</Text>
              <View style={styles.divider}/>
            </View>


            <ListItem
              leftElement={<MCIcon name="plus" size={28} color={appTheme.icon}/>}
              centerElement={{
                primaryText: intl.formatMessage(i18n.newAddContacts),
              }}
              onPress={goContactNew}
              style={styles.listItem}
            />

          </View>

          {contactList.length ? <FlatList
            data={contactList}
            keyExtractor={this.userKeyExtractor}
            extraData={this.props.callAction}
            renderItem={this.renderUserItem}
          /> : null}

        </ScrollView>
      </View>
    );
  }

  userKeyExtractor = (item, index) => ('contact-' + item.id);
  renderUserItem = ({item}) => (
    <UserListItem userId={item.id} divider={item.divider} render={(props) => this.renderItem(props)}/>);

  renderItem = (userProps) => {
    const {divider, user} = userProps;
    const {onUserPress, callAction} = this.props;
    const isNotMyUser = user.id !== getUserId(true);

    const styles = this.getStyles();
    return (
      <View>
        {divider ? (<Text style={styles.dividerHeader}>{divider}</Text>) : null}
        <BaseListItem
          leftElement={<Avatar userId={user.id} size={52}/>}
          centerElement={{primaryText: user.displayName, secondaryText: user.phone.toString()}}
          rightElement={
            <View style={styles.iconsLayout}>
              <MCIcon name="message-text" size={28} style={styles.icon} onPress={() => onUserPress(user.id)}
                color={appTheme.icon}/>
              {(callAction.voice && isNotMyUser) &&
              <MCIcon name="phone" size={28} style={styles.icon} color={appTheme.icon}
                onPress={() => goCall(user.id.toString(), false, Proto.SignalingOffer.Type.VOICE_CALLING)}/>
              }
              {(callAction.video && isNotMyUser) &&
              <MCIcon name="video" size={28} style={styles.icon} color={appTheme.icon}
                onPress={() => goCall(user.id.toString(), false, Proto.SignalingOffer.Type.VIDEO_CALLING)}/>
              }
            </View>}
        />
      </View>
    );
  }
}

NewComponent.propTypes = {
  goContactNew: PropTypes.func.isRequired,
  goGroupCreate: PropTypes.func.isRequired,
  goChannelCreate: PropTypes.func.isRequired,
  callAction: PropTypes.object.isRequired,
};

export default injectIntl(NewComponent);