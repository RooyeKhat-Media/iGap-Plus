import React, {Component} from 'react';
import {BackHandler, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import PrimaryNavigator from '../navigators/PrimaryNavigator';
import SecondaryNavigator from '../navigators/SecondaryNavigator';
import {primaryNavigatorBack, secondaryNavigatorBack} from '../actions/navigator';
import {MAIN_SCREEN, PRIMARY_DRAWER_NAVIGATION} from '../constants/navigators';

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav, navSecondary, navPrimary} = this.props;

    if (nav.routes[nav.index] && nav.routes[nav.index].routeName === MAIN_SCREEN) {
      if (navSecondary.index > 0) {
        dispatch(secondaryNavigatorBack());
      } else if (navPrimary.index > 0 || (
        navPrimary.routes[navPrimary.index] &&
        navPrimary.routes[navPrimary.index].routeName === PRIMARY_DRAWER_NAVIGATION &&
          navPrimary.routes[navPrimary.index].routes[
            navPrimary.routes[navPrimary.index].index
          ].routeName === 'DrawerOpen'
      )) {
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

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <PrimaryNavigator navigation={addNavigationHelpers({dispatch, state: navPrimary})}/>
        </View>
        <View style={{flex: 1}}>
          <SecondaryNavigator navigation={addNavigationHelpers({dispatch, state: navSecondary})}/>
        </View>
      </View>
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

export default connect(mapStateToProps)(MainScreen);