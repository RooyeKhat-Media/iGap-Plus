/**
 * @flow
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import {AppState, BackHandler, Platform, View} from 'react-native';
import {uniqueId} from 'lodash';
import {AppModal, SnackBar, StatusBar} from '../components/BaseUI';
import firebase from 'react-native-firebase';
import AppNavigator, {goIntroScreen, goMainScreen, goUserRegisterScreen} from '../navigators/AppNavigator';
import Api from '../modules/Api';
import {migrate} from '../modules/Migration';
import {appStateChange, loadAuthorHash, loadUserId, loadUserToken, registerDevice, setAppState} from '../utils/app';
import {changeLocale, getUserLocale, loadUserLocale, LOCALE_DEFAULT} from '../utils/locale';
import ThemeProvider from '../modules/ThemeProvider';
import {loadAppThemeName} from '../themes/index';
import {APP_MODAL_ID_MAIN, APP_STATE_ACTIVE, APP_STATE_BACKGROUND, APP_STATE_INACTIVE} from '../constants/app';
import {KeyboardAvoidingView} from '../components/BaseUI/index';
import MemoizeResponsiveStyleSheet from '../modules/Responsive/MemoizeResponsiveStyleSheet';
import uiTheme from '../themes/default/ui-theme';

const addListener = createReduxBoundAddListener('app');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {ready: false};
  }

  registerFireBase = async () => {
    if (firebase.messaging().hasPermission()) {
      firebase.messaging().getToken().then(registerDevice);
      this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(registerDevice);
    } else {
      await firebase.messaging().requestPermission();
      firebase.messaging().getToken().then(registerDevice);
      this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(registerDevice);
    }
  };

  async componentDidMount() {
    migrate().catch(function(error) {
      console.log('Migration failed', error);
    }).then(() => {
      Api.instance;
    }).then(() => {
      this.registerFireBase();
      return Promise.all([
        loadUserId(),
        loadAuthorHash(),
        loadUserLocale().then((locale) => {
          if (locale !== LOCALE_DEFAULT) {
            return changeLocale(getUserLocale());
          }
        }),
        loadAppThemeName(),
        loadUserToken().then((token) => {
          if (token) {
            goMainScreen();
            AppState.addEventListener('change', this._handleAppStateChange);
          } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
            goIntroScreen();
          } else {
            goUserRegisterScreen();
          }
        }),
      ]);
    });
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    AppState.removeEventListener('change', this._handleAppStateChange);
    if (this.onTokenRefreshListener) {
      this.onTokenRefreshListener();
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      setAppState(APP_STATE_ACTIVE);
    } else if (nextAppState === 'background') {
      setAppState(APP_STATE_BACKGROUND);
    } else {
      setAppState(APP_STATE_INACTIVE);
    }
    appStateChange();
  };

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {dispatch, nav, app} = this.props;

    if (!app.isEnable) {
      return null;
    }

    return (
      <ThemeProvider uiTheme={uiTheme()}>
        <View style={styles.root}>
          <View style={styles.content}>
            <KeyboardAvoidingView>
              <View style={styles.contentKeyboard}>
                <StatusBar/>
                <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav, addListener})}/>
              </View>
            </KeyboardAvoidingView>
          </View>
          <AppModal id={APP_MODAL_ID_MAIN}/>
          <SnackBar/>
        </View>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
  app: state.app,
});

export default connect(mapStateToProps)(App);

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
        },
        content: {
          flex: 1,
          zIndex: 2,
        },
        contentKeyboard: {
          flex: 1,
          minWidth: 200,
          minHeight: 200,
        },
      },
    },
  ],
  true,
];