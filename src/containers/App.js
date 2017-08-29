/**
 * @flow
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler, View} from 'react-native';

import {ActivityIndicator, AppModal} from '../components/BaseUI';
import AppNavigator from '../navigators/AppNavigator';
import Api from '../modules/Api';
import {migrate} from '../modules/Migration';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {ready: false};
  }

  componentDidMount() {
    migrate().catch(function() {
      console.log('Migration failed');
    }).then(() => {
      Api.instance;
      this.setState({ready: true});
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
    if (!this.state.ready) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }

    const {dispatch, nav} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, zIndex: 2}}>
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