import {updateIntl} from 'react-intl-redux';

import {LOCALE_EN, LOCALE_FA} from '../constants/locale';
import messagesEn from '../i18n/compiled/en';
import messagesFa from '../i18n/compiled/fa';

export function localeChange(locale) {
  switch (locale) {
    case LOCALE_EN:
      return updateIntl({
        locale,
        messages: messagesEn,
      });
    case LOCALE_FA:
      return updateIntl({
        locale,
        messages: messagesFa,
      });
    default:
      throw new Error(`Locale ${locale} is invalid`);
  }
}

