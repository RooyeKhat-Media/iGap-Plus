import React, {Component} from 'react';
import {BackHandler, Linking} from 'react-native';
import PropTypes from 'prop-types';
import {floor} from 'lodash';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import firebase from 'react-native-firebase';

import {primaryNavigatorBack, secondaryNavigatorBack} from '../actions/navigator';
import {MAIN_SCREEN} from '../constants/navigators';
import MainComponent from '../components/Main';
import PrimaryNavigator from '../navigators/PrimaryNavigator';
import SecondaryNavigator, {goRoomHistory} from '../navigators/SecondaryNavigator';

import Device from '../modules/Responsive/Device';
import {NORMAL_HEIGHT} from '../constants/screenBreakPoints';
import {responsive} from '../modules/Responsive';
import putState from '../modules/Entities/RegisteredUsers/index';
import {getUserId} from '../utils/app';
import {layoutChangeSecondaryWidth} from '../actions/layout';
import {getSecondaryWidth} from '../modules/DimensionCalculator/index';
import SimpleMarkdown from 'simple-markdown';
import rules from '../modules/RichTextView/rules';
import {parse} from '../modules/RichTextView/util';

const addPrimaryListener = createReduxBoundAddListener('primary');
const addSecondaryListener = createReduxBoundAddListener('secondary');

class MainScreen extends Component {

  constructor(props, context) {
    super(props, context);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    this.secondaryWidth = floor(getSecondaryWidth());
  }

  async componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
    Linking.getInitialURL().then(url => url && this._handleOpenURL({url}));
    putState(getUserId(true));

    if (firebase.messaging().hasPermission()) {
      firebase.notifications().getInitialNotification().then(this.notificationOpened);
      this.notificationOpenedListener = firebase.notifications().onNotificationOpened(this.notificationOpened);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    Linking.removeEventListener('url', this._handleOpenURL);
    if (this.notificationOpenedListener) {
      this.notificationOpenedListener();
    }
  }

  _handleOpenURL(event) {
    try {
      const markdown = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))(parse(event.url));
      markdown[0].props.children[0].props.onPress();
    } catch (e) {
      console.warn('_handleOpenURL error ', e);
    }
  }

  notificationOpened = (notificationOpen) => {
    if (notificationOpen) {
      const notificationId = notificationOpen.action;
      firebase.notifications().removeDeliveredNotification(notificationId);
      goRoomHistory(notificationId);
    }
  };

  onBackPress = () => {
    const {dispatch, nav, navSecondary, navPrimary} = this.props;

    if (nav.routes[nav.index] && nav.routes[nav.index].routeName === MAIN_SCREEN) {
      if (navSecondary.index > 0) {
        dispatch(secondaryNavigatorBack());
      } else if (navPrimary.index > 0) {
        dispatch(primaryNavigatorBack());
      } else {
        return false;
      }
      return true;
    }
    return false;
  };

  onSecondaryLayout = () => {
    const {dispatch} = this.props;
    const secWidth = floor(getSecondaryWidth());
    if (this.secondaryWidth !== secWidth) {
      this.secondaryWidth = secWidth;
      dispatch(layoutChangeSecondaryWidth(this.secondaryWidth));
    }
  };

  render() {
    const {dispatch, navSecondary, navPrimary} = this.props;
    const {width} = Device.dimensions.window;
    const primaryNavigator = (<PrimaryNavigator
      navigation={addNavigationHelpers({dispatch, state: navPrimary, addListener: addPrimaryListener})}/>);
    const secondaryNavigator = (
      <SecondaryNavigator
        navigation={addNavigationHelpers({dispatch, state: navSecondary, addListener: addSecondaryListener})}/>);
    const isSecondaryActive = (navSecondary.index > 0) || (width > NORMAL_HEIGHT);
    return (
      <MainComponent onSecondaryLayout={this.onSecondaryLayout} isSecondaryActive={isSecondaryActive}
        PrimaryNavigator={primaryNavigator}
        SecondaryNavigator={secondaryNavigator}/>
    );
  }
}

MainScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
  navSecondary: PropTypes.object.isRequired,
  navPrimary: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
  navSecondary: state.navSecondary,
  navPrimary: state.navPrimary,
});

const ResponsiveMainScreen = responsive(MainScreen);
ResponsiveMainScreen.navigationOptions = {
  header: null,
};

export default connect(mapStateToProps)(ResponsiveMainScreen);