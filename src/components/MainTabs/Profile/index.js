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

class ProfileComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPayment: false,
    };
  }

  paymentClick = () => {
    this.setState({isPayment: true});
  };

  showListClick = () => {
    this.setState({isPayment: false});
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  menuClick = () => {
    goSetting();
  };

  downClick = () => {
    alert('downClick');
  };

  render() {
    const {intl, onContactPress, editProfileBtn, currentUser, contactList} = this.props;
    const styles = this.getStyles();


    return (
      <View style={styles.root}>

        <Toolbar
          leftElement={<MCIcon name="chevron-down" color="#000" size={30} onPress={this.downClick}/>}
          rightElement={<MCIcon name="dots-vertical" color="#000" size={30} onPress={this.menuClick}/>}
          centerElement={<Text numberOfLines={1}
            style={textTitleStyle}>{(currentUser && currentUser.phone && currentUser.phone.toString())}</Text>}
        />

        <ScrollView style={styles.scroll}>

          <View style={styles.sectionTop}>

            <View style={styles.avatar}>
              {currentUser && <Avatar userId={currentUser.id} size={80}/>}
            </View>

            <View style={styles.sectionTopSub1}>
              <View style={styles.sectionTopSub1_1}>
                <Text style={styles.text}>
                  <FormattedMessage {...i18n.userProfileIgapBalance}/>
                </Text>
                <Text style={styles.detatil}>
                  <FormattedMessage {...i18n.userProfileDetailLabel}/>
                </Text>
              </View>
              <View style={styles.sectionTopSub1_1}>
                <Text style={styles.text}> {'0000 Rials'} </Text>
                <Text style={styles.balance}>
                  <FormattedMessage {...i18n.userProfileAvailableBalance}/>
                </Text>
              </View>

              <Button
                upperCase={false} style={styles.button}
                onPress={editProfileBtn}
                text={intl.formatMessage(i18n.editProfileEditProfile)}/>

            </View>
          </View>
          <Text style={styles.name}> {currentUser && currentUser.displayName} </Text>
          <Text style={styles.userName}> @{currentUser && currentUser.username} </Text>


          <View style={styles.bottomNavigation}>
            <BottomNavigation.Action
              style={!this.state.isPayment ? styles.activeBottomNavigationAction : styles.notactiveBottomNavigationAction}
              key="list"
              icon="people-outline"
              onPress={this.showListClick}
            />

            <BottomNavigation.Action
              style={this.state.isPayment ? styles.activeBottomNavigationAction : styles.notactiveBottomNavigationAction}
              key="payment"
              icon="credit-card"
              onPress={this.paymentClick}
            />
          </View>

          {this.state.isPayment ? <Text style={{alignSelf: 'center', marginBottom: 50}}> payment</Text> :

            <FlatList
              data={contactList}
              keyExtractor={(item, index) => ('contact-' + item.id)}
              renderItem={({item}) => <UserListItem userId={item.id} onPress={onContactPress} divider={item.divider}/>}
            />}

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