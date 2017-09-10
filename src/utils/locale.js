import MetaData from '../models/MetaData';
import {LOCALE_EN} from '../constants/locale';

const LOCALE_DEFAULT = LOCALE_EN;
const META_USER_LOCALE = 'userLocale';

let _userLocale;

export function getUserLocale() {
  return _userLocale || LOCALE_DEFAULT;
}

async function setUserLocale(locale) {
  _userLocale = locale;
  return MetaData.save(META_USER_LOCALE, locale);
}

export async function loadUserLocale() {
  return _userLocale = await MetaData.load(META_USER_LOCALE);
}

export async function changeLocale(locale) {
  if (_userLocale !== locale) {
    _userLocale = locale;
    await setUserLocale(locale);
  }
  // store.dispatch(localeChange(locale));//todo locale uncomment dispatch change local
}