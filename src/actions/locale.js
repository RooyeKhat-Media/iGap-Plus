import {updateIntl} from 'react-intl-redux';
import * as _ from 'lodash';
import {LOCALE_EN, LOCALE_FA} from '../constants/locale';
import messagesEn from '../i18n/en';
import messagesFa from '../i18n/fa';

export function localeChange(locale) {
  switch (locale) {
    case LOCALE_EN:
      return updateIntl({
        locale,
        messages: messagesEn,
      });
    case LOCALE_FA:
      const messages = {...messagesEn};
      _.merge(messages, messagesFa);
      return updateIntl({
        locale,
        messages: messages,
      });
    default:
      throw new Error(`Locale ${locale} is invalid`);
  }
}

