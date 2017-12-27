import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import {primaryNavigatorBack, secondaryNavigatorBack} from '../actions/navigator';
import {MAIN_SCREEN} from '../constants/navigators';
import MainComponent from '../components/Main';
import PrimaryNavigator from '../navigators/PrimaryNavigator';
import SecondaryNavigator from '../navigators/SecondaryNavigator';

import Device from '../modules/Responsive/Device';
import {NORMAL_HEIGHT} from '../constants/screenBreakPoints';
import {responsive} from '../modules/Responsive';
import putState from '../modules/Entities/RegisteredUsers/index';
import {getUserId} from '../utils/app';


class MainScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    putState(getUserId(true));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

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

  render() {
    const {dispatch, navSecondary, navPrimary} = this.props;
    const {width} = Device.dimensions.window;
    const primaryNavigator = (<PrimaryNavigator navigation={addNavigationHelpers({dispatch, state: navPrimary})}/>);
    const secondaryNavigator = (
      <SecondaryNavigator navigation={addNavigationHelpers({dispatch, state: navSecondary})}/>);
    const isSecondaryActive = (navSecondary.index > 0) || (width > NORMAL_HEIGHT);
    return (
      <MainComponent isSecondaryActive={isSecondaryActive} PrimaryNavigator={primaryNavigator}
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