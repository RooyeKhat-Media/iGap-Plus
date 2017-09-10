/**
 * @flow
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler, Platform, StatusBar, View} from 'react-native';

import {AppModal} from '../components/BaseUI';
import AppNavigator, {goIntroScreen, goMainScreen, goUserRegisterScreen} from '../navigators/AppNavigator';
import Api from '../modules/Api';
import {migrate} from '../modules/Migration';
import {loadAuthorHash, loadUserId, loadUserToken} from '../utils/app';
import {changeLocale, getUserLocale, loadUserLocale} from '../utils/locale';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {ready: false};
  }

  async componentDidMount() {
    migrate().catch(function() {
      console.log('Migration failed');
    }).then(() => {
      Api.instance;
      return Promise.all([
        loadUserId,
        loadAuthorHash,
      ]);
    }).then(() => {
      return loadUserLocale();
    }).then(() => {
      return changeLocale(getUserLocale());
    }).then(() => {
      return loadUserToken();
    }).then((token) => {
      if (token) {
        goMainScreen();
      } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
        goIntroScreen();
      } else {
        goUserRegisterScreen();
      }
    });
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const {dispatch, nav} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, zIndex: 2}}>
          <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content"/>
          <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
        </View>
        <AppModal/>
      </View>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);