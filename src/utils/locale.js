import MetaData from '../models/MetaData';
import {LOCALE_EN, LOCALES} from '../constants/locale';
import {METADATA_USER_LOCALE} from '../models/MetaData/constant';
import {localeChange} from '../actions/locale';
import store from '../configureStore';
import {reloadApp} from './app';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {isEmpty} from 'lodash';

export const LOCALE_DEFAULT = LOCALE_EN;

let _userLocale;

export function getUserLocale() {
  return _userLocale || LOCALE_DEFAULT;
}

async function setUserLocale(locale) {
  _userLocale = locale;
  return MetaData.save(METADATA_USER_LOCALE, locale);
}

export async function loadUserLocale() {
  return _userLocale = await MetaData.load(METADATA_USER_LOCALE);
}

export async function changeLocale(locale) {

  if (isEmpty(locale)) {
    return;
  }

  if (_userLocale !== locale) {
    _userLocale = locale;
    await setUserLocale(locale);
    I18nManager.forceRTL(LOCALES[locale].rtl);
    RNRestart.Restart();
  } else {
    if (I18nManager.isRTL !== LOCALES[locale].rtl) {
      I18nManager.forceRTL(LOCALES[locale].rtl);
      RNRestart.Restart();
    }
  }
  store.dispatch(localeChange(locale));
  reloadApp();
}