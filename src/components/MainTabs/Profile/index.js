import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FlatList, IconToggle, Toolbar} from '../../BaseUI/index';
import {ScrollView, Text, View} from 'react-native';
import i18n from '../../../i18n/index';
import styleSheet from './index.styles';
import {injectIntl, intlShape} from 'react-intl';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive/index';
import Avatar from '../../../containers/Unit/Avatar';
import UserListItem from '../../../containers/Unit/UserListItem';
import {goSetting} from '../../../navigators/PrimaryNavigator';
import ReturnToCall from '../../Call/ReturnToCall';
import {goAvatarList} from '../../../navigators/SecondaryNavigator';
import {getUserId} from '../../../utils/app';
import {appTheme} from '../../../themes/default/index';

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
          rightElement={<IconToggle onPress={this.menuClick} name="settings" color={appTheme.toolbarIcon}/>}
          centerElement={(currentUser && currentUser.phone && currentUser.phone.toString())}/>

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

          {/*<View style={styles.bottomNavigation}>*/}
          {/*<BottomNavigation.Action*/}
          {/*style={this.state.selectionMenu === 1 ? styles.activeBottomNavigationAction : styles.notactiveBottomNavigationAction}*/}
          {/*key="list"*/}
          {/*icon="people-outline"*/}
          {/*/>*/}
          {/*</View>*/}

          <FlatList
            data={contactList}
            keyExtractor={this.userKeyExtractor}
            renderItem={this.renderUserItem}
          />

        </ScrollView>
      </View>
    );
  }
  userKeyExtractor = (item, index) => ('contact-' + item.id);
  renderUserItem = ({item}) => {
    const {onContactPress} = this.props;
    return (<UserListItem userId={item.id} onPress={onContactPress} divider={item.divider}/>);
  };
}

ProfileComponent.propTypes = {
  intl: intlShape.isRequired,
  currentUser: PropTypes.object,
  onContactPress: PropTypes.func,
  editProfileBtn: PropTypes.func,
};

export default injectIntl(ProfileComponent);