import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BottomNavigation, Button, FlatList, MCIcon, Toolbar} from '../../BaseUI/index';
import {ScrollView, Text, View} from 'react-native';
import i18n from '../../../i18n/index';
import styleSheet from './index.styles';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive/index';
import Avatar from '../../../containers/Unit/Avatar';
import UserListItem from '../../../containers/Unit/UserListItem';
import {goSetting} from '../../../navigators/PrimaryNavigator';
import {textTitleStyle} from '../../../themes/default/index';
import ReturnToCall from '../../Call/ReturnToCall';
import {goAvatarList} from '../../../navigators/SecondaryNavigator';
import {getUserId} from '../../../utils/app';

class ProfileComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectionMenu: 1,
    };
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  menuClick = () => {
    goSetting();
  };


  render() {
    const {intl, onContactPress, editProfileBtn, currentUser, contactList} = this.props;
    const styles = this.getStyles();


    return (
      <View style={styles.root}>

        <Toolbar
          rightElement={<MCIcon name="dots-vertical" color="#000" size={30} onPress={this.menuClick}/>}
          centerElement={<Text numberOfLines={1}
            style={textTitleStyle}>{(currentUser && currentUser.phone && currentUser.phone.toString())}</Text>}/>

        <ReturnToCall/>
        <ScrollView style={styles.scroll}>

          <View style={styles.sectionTop}>

            <View style={styles.avatar}>
              {currentUser &&
              <Avatar userId={currentUser.id} size={80} onPress={() => goAvatarList(null, getUserId(true))}/>}
            </View>

            <View style={styles.sectionTopSub1}>

              <Text style={styles.name}> {currentUser && currentUser.displayName} </Text>
              <Text style={styles.userName}> @{currentUser && currentUser.username} </Text>

              {currentUser && <Button
                upperCase={false} style={styles.button}
                onPress={editProfileBtn}
                text={intl.formatMessage(i18n.editProfileEditProfile)}/>}

            </View>
          </View>

          <View style={styles.bottomNavigation}>
            <BottomNavigation.Action
              style={this.state.selectionMenu === 1 ? styles.activeBottomNavigationAction : styles.notactiveBottomNavigationAction}
              key="list"
              icon="people-outline"
            />
          </View>

          <FlatList
            data={contactList}
            keyExtractor={(item, index) => ('contact-' + item.id)}
            renderItem={({item}) => <UserListItem userId={item.id} onPress={onContactPress} divider={item.divider}/>}
          />

        </ScrollView>
      </View>
    );
  }
}

ProfileComponent.propTypes = {
  intl: intlShape.isRequired,
  currentUser: PropTypes.object,
  onContactPress: PropTypes.func,
  editProfileBtn: PropTypes.func,
};

export default injectIntl(ProfileComponent);