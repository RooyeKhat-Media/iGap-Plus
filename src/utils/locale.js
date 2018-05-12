import MetaData from '../models/MetaData';
import {LOCALE_EN} from '../constants/locale';
import {METADATA_USER_LOCALE} from '../models/MetaData/constant';
import {localeChange} from '../actions/locale';
import store from '../configureStore';

const LOCALE_DEFAULT = LOCALE_EN;

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
  if (_userLocale !== locale) {
    _userLocale = locale;
    await setUserLocale(locale);
  }
  // store.dispatch(localeChange(locale));
}