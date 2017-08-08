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

/**
 * Start Intl Polyfill
 */
const areIntlLocalesSupported = require('intl-locales-supported');
const localesMyAppSupports = [
  /* list locales here */
  'en', 'fa',
];
let requireLocalesPolyfill = false;

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and replace the constructors with need with the polyfill's.
    const IntlPolyfill = require('intl');
    global.Intl.NumberFormat   = IntlPolyfill.NumberFormat;
    global.Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    requireLocalesPolyfill = true;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl');
  requireLocalesPolyfill = true;
}

if (requireLocalesPolyfill) {
  const en = require('intl/locale-data/jsonp/en');
  const fa = require('intl/locale-data/jsonp/fa');
  addLocaleData([...en, ...fa]);
}
/**
 * End  Intl Polyfill
 */

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