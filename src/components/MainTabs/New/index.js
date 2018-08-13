import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import {ActivityIndicator, ListItem as BaseListItem, ListItem, MCIcon, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl} from 'react-intl';
import UserListItem from '../../../containers/Unit/UserListItem';
import Avatar from '../../../containers/Unit/Avatar';
import {goCall, goRoomHistory} from '../../../navigators/SecondaryNavigator';
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
    const {intl, contactList, goContactNew, goGroupCreate, goChannelCreate, onUserPress, onFilter, clientSearchUserName, showIndicator, isInSearch} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          centerElement={intl.formatMessage(i18n.newPlus)}
          searchable={{
            autoFocus: true,
            placeholder: intl.formatMessage(i18n.newSearch),
            onChangeText: onFilter,
            onSearchClosed: () => onFilter(''),
          }}
          style={styles.toolbar}
        />
        <ReturnToCall/>
        <ScrollView style={styles.scroll}>
          {
            !isInSearch && <View style={styles.sectionTop}>
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
          }
          {contactList.length > 0 &&
          <View>
            {isInSearch &&
            <View style={[styles.rowField, {marginTop: 15, marginBottom: 7}]}>
              <Text style={styles.titleText}>{intl.formatMessage(i18n.newContacts)}</Text>
              <View style={styles.divider}/>
            </View>
            }
            <FlatList
              data={contactList}
              keyExtractor={(item, index) => ('contact-' + item.id)}
              extraData={this.props.callAction}
              renderItem={this.renderUserItem}
            />
          </View>
          }
          {showIndicator && <ActivityIndicator size="large" color="#3298ee" style={styles.indicator}/>}
          {clientSearchUserName.length > 0 &&
          <View>
            <View style={[styles.rowField, {marginTop: 15, marginBottom: 7}]}>
              <Text style={styles.titleText}>{intl.formatMessage(i18n.newGlobal)}</Text>
              <View style={styles.divider}/>
            </View>
            <FlatList style={styles.flatListSearch}
              data={clientSearchUserName}
              keyExtractor={(item, index) => ('search-' + index)}
              renderItem={this.renderSearchList}
            />
          </View>
          }
        </ScrollView>
      </View>
    );
  }


  renderSearchList = (items) => {
    const item = items.item;
    const isRoom = item.type === 1;
    const styles = this.getStyles();
    return <TouchableOpacity style={styles.searchItem} onPress={async () => {
      if (isRoom) {
        goRoomHistory(item.room.id.toString());
      } else {
        const {onUserPress} = this.props;
        onUserPress(item.user.id.toString(), true);
      }
    }}>
      <View style={styles.avatar}>
        {isRoom ?
          <Avatar roomId={item.room.id.toString()} size={52}/> :
          <Avatar userId={item.user.id.toString()} size={52}/>
        }
      </View>
      <View style={styles.searchContent}>
        <Text style={styles.primaryText}>{isRoom ? item.room.title : item.user.displayName}</Text>
        <Text style={styles.secondary}>
          {isRoom ?
            item.room.channelRoomExtra ? item.room.channelRoomExtra.publicExtra.username : item.room.groupRoomExtra.publicExtra.username
            : item.user.username}
        </Text>
      </View>
    </TouchableOpacity>;
  };


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
  clientSearchUserName: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  showIndicator: PropTypes.bool.isRequired,
  isInSearch: PropTypes.bool.isRequired,
};

export default injectIntl(NewComponent);