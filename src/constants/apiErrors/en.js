/**
 * @flow
 */

import {errorI18nId, errorI18nKey} from '../../modules/Error/index';
import {ERROR_USER_REGISTER_BAD_PAYLOAD} from '../../modules/Api/errors/index';

export default {
  eDefault: {
    id: 'e.default',
    defaultMessage: 'Error {majorCode}_{minorCode} {message}',
    description: 'Default API Error message',
  },
  [errorI18nKey(ERROR_USER_REGISTER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(ERROR_USER_REGISTER_BAD_PAYLOAD, 1),
    defaultMessage: 'No service for selected country',
    description: 'API Error message',
  },
  [errorI18nKey(ERROR_USER_REGISTER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(ERROR_USER_REGISTER_BAD_PAYLOAD, 2),
    defaultMessage: 'Invalid phone number',
    description: 'API Error message',
  },
};