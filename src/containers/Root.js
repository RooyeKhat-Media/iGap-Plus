/**
 * @flow
 */

import React, {Component} from 'react';
import { Text } from 'react-native';
import {Provider} from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import store from '../configureStore';
import App from './App';

import { addLocaleData } from 'react-intl';
import fa from 'react-intl/locale-data/fa';
addLocaleData([...fa]);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider textComponent={Text}>
          <App />
        </IntlProvider>
      </Provider>
    );
  }
}