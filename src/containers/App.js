/**
 * @flow
 */

import React, {Component} from 'react';
import Api from '../modules/Api';
import Intro from './Intro';
import {ThemeProvider} from 'react-native-material-ui';
import defaultTheme from '../theme/default';

class App extends Component {
  componentDidMount() {
    Api.instance;
  }

  render() {
    return (
      <ThemeProvider uiTheme={defaultTheme}>
        <Intro/>
      </ThemeProvider>
    );
  }
}

export default App;