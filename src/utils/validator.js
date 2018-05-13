import i18n from '../i18n/index';
import {has} from 'lodash';

function _messageSelector(optionMessage, defaultMessage) {
  if (optionMessage) {
    return optionMessage;
  }
  return defaultMessage;
}

export const requiredValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (value === '' || value === null || value === undefined) {
      reject(_messageSelector(options.message, i18n.errorRequired));
    } else {
      resolve();
    }
  });
};
export const integerValidator = function(value, options = {}) {
  return regexValidator(value, {pattern: /^\d+$/});
};

export const emailValidator = function(value, options = {}) {
  if (!value && options.optional) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  } else {
    return regexValidator(value, {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    });
  }
};

export const stringValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (typeof value !== 'string') {
      reject(_messageSelector(options.message, i18n.errorTypeString));

    } else if (has(options, 'min') && value.length < options.min) {
      reject(_messageSelector(options.errorStringLengthMin, {
        ...i18n.errorStringLengthMin,
        values: {min: options.min},
      }));

    } else if (has(options, 'max') && value.length > options.max) {
      reject(_messageSelector(options.errorStringLengthMax, {
        ...i18n.errorStringLengthMax,
        values: {max: options.max},
      }));

    } else {
      resolve();
    }
  });
};

export const regexValidator = function(value, options = {}) {
  return new Promise(function(resolve, reject) {
    if (options.pattern && typeof value && !value.match(options.pattern)) {
      reject(_messageSelector(options.message, i18n.errorRegexInvalid));
    } else {
      resolve();
    }
  });
};