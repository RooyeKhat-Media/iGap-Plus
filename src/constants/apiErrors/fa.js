/**
 * @flow
 */

import {errorI18nId, errorI18nKey} from '../../modules/Error/index';
import * as errorCode from '../../modules/Api/errors/index';

const description = 'API Error message';

export default {
  eDefault: {
    id: 'e.default',
    defaultMessage: 'Error {majorCode}_{minorCode} {message}',
    description: 'Default API Error message',
  },

  // System errors xx

  [errorI18nKey(errorCode.ERROR_BAD_REQUEST)]: {
    id: errorI18nId(errorCode.ERROR_BAD_REQUEST),
    defaultMessage: 'The request is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_LOGIN_REQUIRED)]: {
    id: errorI18nId(errorCode.ERROR_LOGIN_REQUIRED),
    defaultMessage: 'You have to log in first, then ask for performing this action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_NEW_CLIENT_IN_SESSION)]: {
    id: errorI18nId(errorCode.ERROR_NEW_CLIENT_IN_SESSION),
    defaultMessage: 'New client just connected to this session, you are not allowed to continue',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_FORBIDDEN),
    defaultMessage: 'This operation is not permitted',
    description,
  },
  [errorI18nKey(errorCode.ERROR_TIMEOUT)]: {
    id: errorI18nId(errorCode.ERROR_TIMEOUT),
    defaultMessage: 'Getting response from the server has been timed out',
    description,
  },
  [errorI18nKey(errorCode.ERROR_RELATION_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_RELATION_ERROR),
    defaultMessage: 'For related requests; if one gets error, RELATION_ERROR will be sent to the others',
    description,
  },
  [errorI18nKey(errorCode.ERROR_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error is occurred',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SESSION_IS_TERMINATED)]: {
    id: errorI18nId(errorCode.ERROR_SESSION_IS_TERMINATED),
    defaultMessage: 'Your session has been terminated by another device',
    description,
  },
  [errorI18nKey(errorCode.ERROR_NICKNAME_REQUIRED)]: {
    id: errorI18nId(errorCode.ERROR_NICKNAME_REQUIRED),
    defaultMessage: 'Nickname is required to be set before continue to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FLOOD_REQUEST)]: {
    id: errorI18nId(errorCode.ERROR_FLOOD_REQUEST),
    defaultMessage: 'You have exceeded the number of requests allowed',
    description,
  },

  // User errors 1xx , 101xx

  [errorI18nKey(errorCode.ERROR_USER_REGISTER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_BAD_PAYLOAD, 1),
    defaultMessage: 'Country code is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REGISTER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_BAD_PAYLOAD, 2),
    defaultMessage: 'Phone number is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error ',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REGISTER_BLOCKED_USER)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_BLOCKED_USER),
    defaultMessage: 'Your user account is blocked',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REGISTER_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_MAX_TRY_LOCK),
    defaultMessage: 'The verification code was entered incorrectly too many times. Please try again later',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REGISTER_MAX_SEND_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_REGISTER_MAX_SEND_LOCK),
    defaultMessage: 'You have requested the verification code exceedingly',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_VERIFY_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_BAD_PAYLOAD, 1),
    defaultMessage: 'Verification code is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_BAD_PAYLOAD, 2),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_USER_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_USER_NOT_FOUND),
    defaultMessage: 'There is no registered user with this given username',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_BLOCKED_USER)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_BLOCKED_USER),
    defaultMessage: 'Your user account is blocked, you cannot verify the user',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_INVALID_CODE)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_INVALID_CODE),
    defaultMessage: 'Verification code is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_EXPIRED_CODE)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_EXPIRED_CODE),
    defaultMessage: 'The Verification Code you entered has expired',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_MAX_TRY_LOCK),
    defaultMessage: 'The Verification Code is locked now due to many tries',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_TWO_STEP_VERIFICATION_ENABLED)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_TWO_STEP_VERIFICATION_ENABLED),
    defaultMessage: 'Two-step Verification is activated',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 2),
    defaultMessage: 'App Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 3),
    defaultMessage: 'App ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 4),
    defaultMessage: 'App Build Version is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 5),
    defaultMessage: 'App Version is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 6),
    defaultMessage: 'Platform is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 7),
    defaultMessage: 'Device is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 8),
    defaultMessage: 'Device Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_BAD_PAYLOAD, 9),
    defaultMessage: 'Language is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_LOGIN_FAILED)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_FAILED),
    defaultMessage: 'Login failed',
    description,
  }, [errorI18nKey(errorCode.ERROR_USER_LOGIN_FAILED, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_LOGIN_FAILED, 4),
    defaultMessage: 'Your account is blocked',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_NICKNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Nickname is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_NICKNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_NICKNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_EMAIL_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_EMAIL_BAD_PAYLOAD, 1),
    defaultMessage: 'Email address in not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_EMAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_EMAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_GENDER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_GENDER_BAD_PAYLOAD, 1),
    defaultMessage: 'Gender is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_GENDER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_GENDER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 1),
    defaultMessage: 'Phone Number is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 2),
    defaultMessage: 'First Name is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 3),
    defaultMessage: 'Last Name is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_IMPORT_BAD_PAYLOAD, 4),
    defaultMessage: 'Force is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_IMPORT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_IMPORT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_GET_LIST_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_GET_LIST_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_GET_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_GET_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Phone Number is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 1),
    defaultMessage: 'Phone Number is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 2),
    defaultMessage: 'First Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 3),
    defaultMessage: 'Last Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_EDIT_BAD_PAYLOAD, 4),
    defaultMessage: 'It\'s required to enter first name or last name',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_EDIT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_EDIT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_NICKNAME_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_NICKNAME_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_NICKNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_NICKNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_EMAIL_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_EMAIL_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_EMAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_EMAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_GENDER_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_GENDER_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_GENDER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_GENDER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_AVATAR_ADD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_ADD_BAD_PAYLOAD, 1),
    defaultMessage: 'Attachment is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_ADD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_ADD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_ADD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_ADD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_AVATAR_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Avatar_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_AVATAR_GET_LIST_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_GET_LIST_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_AVATAR_GET_LIST_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_AVATAR_GET_LIST_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_INFO_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_INFO_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_INFO_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_INFO_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_INFO_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_INFO_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_GET_DELETE_TOKEN_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_GET_DELETE_TOKEN_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_GET_DELETE_TOKEN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_GET_DELETE_TOKEN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_GET_DELETE_TOKEN_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_GET_DELETE_TOKEN_MAX_TRY_LOCK),
    defaultMessage: 'Destruction Code for deleting user account has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_GET_DELETE_TOKEN_MAX_SEND_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_GET_DELETE_TOKEN_MAX_SEND_LOCK),
    defaultMessage: 'Destruction Code for deleting user account has been requested too many times',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Account destruction token is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_DELETE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_BAD_PAYLOAD, 2),
    defaultMessage: 'Account destruction reason is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_DELETE_INVALID_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_INVALID_TOKEN),
    defaultMessage: 'Account destruction token is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_DELETE_EXPIRED_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_EXPIRED_TOKEN),
    defaultMessage: 'Account destruction token you entered has expired',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_DELETE_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_DELETE_MAX_TRY_LOCK),
    defaultMessage: 'Destruction Code for deleting user account has been entered incorrectly too many times',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_SELF_REMOVE_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_SELF_REMOVE_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_SELF_REMOVE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_SELF_REMOVE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_SELF_REMOVE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_SELF_REMOVE_BAD_PAYLOAD, 1),
    defaultMessage: 'Self_Remove is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_SELF_REMOVE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_SELF_REMOVE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_CHECK_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_CHECK_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD, 2),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_BAD_PAYLOAD, 3),
    defaultMessage: 'This username has already been taken',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_UPDATE_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_UPDATE_USERNAME_UPDATE_LOCK),
    defaultMessage: 'The username has been recently updated; please keep waiting until you can renew it or choose the latest one again',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_UPDATE_STATUS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_UPDATE_STATUS_BAD_PAYLOAD, 1),
    defaultMessage: 'Status is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_UPDATE_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_UPDATE_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_SESSION_GET_ACTIVE_LIST_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_GET_ACTIVE_LIST_BAD_PAYLOAD),
    defaultMessage: 'Bad payload ',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_SESSION_GET_ACTIVE_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_GET_ACTIVE_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_SESSION_TERMINATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_TERMINATE_BAD_PAYLOAD, 1),
    defaultMessage: 'Session_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_SESSION_TERMINATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_TERMINATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_SESSION_TERMINATE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_TERMINATE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_SESSION_LOGOUT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_LOGOUT_BAD_PAYLOAD, 1),
    defaultMessage: 'Session_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_SESSION_LOGOUT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_SESSION_LOGOUT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_BLOCK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_BLOCK_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_BLOCK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_BLOCK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_BLOCK_USER_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_BLOCK_USER_NOT_FOUND),
    defaultMessage: 'There is no user with this UserID',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_UNBLOCK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_UNBLOCK_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_UNBLOCK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_UNBLOCK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_UNBLOCK_ALREADY_UNBLOCKED)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_UNBLOCK_ALREADY_UNBLOCKED),
    defaultMessage: 'This user has already been unblocked',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_GET_BLOCKED_LIST_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_GET_BLOCKED_LIST_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_CONTACTS_GET_BLOCKED_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_CONTACTS_GET_BLOCKED_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action ',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL_NO_PASSWORD),
    defaultMessage: 'You have not activated Two-step Verification yet',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD_INVALID_PASSWORD),
    defaultMessage: 'Password is incorrect',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 1),
    defaultMessage: 'Old Password is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 2),
    defaultMessage: 'New Password is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 3),
    defaultMessage: 'Recovery E-mail is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 4),
    defaultMessage: 'Recovery E-mail is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 5),
    defaultMessage: 'The first recovery question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 6),
    defaultMessage: 'Answer of the first recovery question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 7),
    defaultMessage: 'The second recovery question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 8),
    defaultMessage: 'Answer of the second recovery question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_BAD_PAYLOAD, 9),
    defaultMessage: 'Password hint is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_INVALID_OLD_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_SET_PASSWORD_INVALID_OLD_PASSWORD),
    defaultMessage: 'The old password in not correct',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_UNSET_PASSWORD_INVALID_PASSWORD),
    defaultMessage: 'Password is not valid',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is not correct',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_INVALID_PASSWORD),
    defaultMessage: 'Password is not correct',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times ',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHECK_PASSWORD_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_MAX_TRY_LOCK),
    defaultMessage: 'The code to verify the recovery E-mail has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_EXPIRED_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_EXPIRED_TOKEN),
    defaultMessage: 'The code to verify and authenticate recovery E-mail has expired',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INVALID_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_VERIFY_RECOVERY_EMAIL_INVALID_TOKEN),
    defaultMessage: 'The verification code you entered for E-mail recovery is incorrect',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 2),
    defaultMessage: 'Recovery E-mail is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_BAD_PAYLOAD, 3),
    defaultMessage: 'Recovery E-mail is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_MAX_TRY_LOCK),
    defaultMessage: 'The code to verify the recovery E-mail has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_INVALID_PASSWORD),
    defaultMessage: 'Password is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_CONFIRMED_BEFORE)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_EMAIL_CONFIRMED_BEFORE),
    defaultMessage: 'Recovery E-mail has already been confirmed',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_NO_RECOVERY_EMAIL)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_NO_RECOVERY_EMAIL),
    defaultMessage: 'No E-mail has been set to recover password',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_MAX_TRY_LOCK),
    defaultMessage: 'Password recovery token has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_MAX_TRY_LOCK),
    defaultMessage: 'Password recovery token has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_EXPIRED_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_EXPIRED_TOKEN),
    defaultMessage: 'Password recovery token has expired',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INVALID_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_INVALID_TOKEN),
    defaultMessage: 'Password recovery token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD, 1),
    defaultMessage: 'The first answer is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_BAD_PAYLOAD, 2),
    defaultMessage: 'The second answer is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INVALID_ANSWERS)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_INVALID_ANSWERS),
    defaultMessage: 'At least one of the answers is not valid for',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 2),
    defaultMessage: 'The first question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 3),
    defaultMessage: 'Answer of the first question is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 4),
    defaultMessage: 'The second question is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_BAD_PAYLOAD, 5),
    defaultMessage: 'Answer of the second question is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_RECOVERY_QUESTION_INVALID_PASSWORD),
    defaultMessage: 'Password is incorrect',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD, 1),
    defaultMessage: 'Password is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_BAD_PAYLOAD, 1),
    defaultMessage: 'Password hint is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_MAX_TRY_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_MAX_TRY_LOCK),
    defaultMessage: 'Password has been entered incorrectly too many times',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INVALID_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_CHANGE_HINT_INVALID_PASSWORD),
    defaultMessage: 'Password is incorrect',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_NO_PASSWORD)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_NO_PASSWORD),
    defaultMessage: 'Password has not been set yet',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_NO_UNCONFIRMED_RECOVERY_EMAIL)]: {
    id: errorI18nId(errorCode.ERROR_USER_TWO_STEP_VERIFICATION_RESEND_VERIFY_EMAIL_NO_UNCONFIRMED_RECOVERY_EMAIL),
    defaultMessage: 'There is no confirmed E-mail to be sent the verification token',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PRIVACY_GET_RULE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PRIVACY_GET_RULE_BAD_PAYLOAD, 1),
    defaultMessage: 'Type is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PRIVACY_GET_RULE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PRIVACY_GET_RULE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PRIVACY_SET_RULE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PRIVACY_SET_RULE_BAD_PAYLOAD, 1),
    defaultMessage: 'Type is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PRIVACY_SET_RULE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_PRIVACY_SET_RULE_BAD_PAYLOAD, 2),
    defaultMessage: 'Level is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PRIVACY_SET_RULE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PRIVACY_SET_RULE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_INVALID_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_INVALID_TOKEN),
    defaultMessage: 'Token is invalid for',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_EXPIRED_TOKEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_VERIFY_NEW_DEVICE_EXPIRED_TOKEN),
    defaultMessage: 'Token has expired',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_BIO_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_BIO_BAD_PAYLOAD, 1),
    defaultMessage: 'Bio is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_SET_BIO_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_SET_BIO_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_BIO_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_BIO_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_PROFILE_GET_BIO_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_PROFILE_GET_BIO_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 2),
    defaultMessage: 'Reason is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_BAD_PAYLOAD, 3),
    defaultMessage: 'Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REPORT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REPORT_REPORTED_BEFORE)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_REPORTED_BEFORE),
    defaultMessage: 'You have already reported this user',
    description,
  },
  [errorI18nKey(errorCode.ERROR_USER_REPORT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_USER_REPORT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // Chat room errors 2xx

  [errorI18nKey(errorCode.ERROR_CHAT_GET_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Peer_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_GET_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_GET_ROOM_PEER_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_ROOM_PEER_NOT_FOUND),
    defaultMessage: 'There is no active user with the given peer_ID',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_GET_ROOM_PEER_NOT_FOUND, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_ROOM_PEER_NOT_FOUND, 3),
    defaultMessage: 'Peer\'s account has got blocked',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 4),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 5),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 6),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 7),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 8),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 9),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 10)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 10),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 11)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 11),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 12)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 12),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 13)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 13),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 14)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 14),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 15)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 15),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 16)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 16),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 17)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 17),
    defaultMessage: 'Location is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 18)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 18),
    defaultMessage: 'Location.lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 19)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 19),
    defaultMessage: 'Location.lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 22)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 22),
    defaultMessage: 'Contact is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 23)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 23),
    defaultMessage: 'Message_Type is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 24)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 24),
    defaultMessage: 'No such file is found',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 25)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 25),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 26)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 26),
    defaultMessage: 'ForwardFrom.Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 27)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 27),
    defaultMessage: 'ForwardFrom.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 28)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 28),
    defaultMessage: 'ForwardFrom is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 29)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 29),
    defaultMessage: 'ReplyTo and ForwardFrom have been set',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 30)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 30),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 31)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 31),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 32)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BAD_PAYLOAD, 32),
    defaultMessage: 'Message is too long',
    description,
  },

  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action ',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_BLOCKED_BY_PEER)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_BLOCKED_BY_PEER),
    defaultMessage: 'You have got blocked by the peer',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SEND_MESSAGE_LIMIT_REACHED)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SEND_MESSAGE_LIMIT_REACHED),
    defaultMessage: 'You are not currently allowed to send message to the required recipient for the restriction made; ask her/him to add you in the contact list first or keep waiting to remove restriction',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_STATUS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_STATUS_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_STATUS_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_STATUS_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_STATUS_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_STATUS_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_EDIT_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_EDIT_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_EDIT_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_EDIT_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_EDIT_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Both are invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_CLEAR_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CLEAR_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CLEAR_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CLEAR_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Clear_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CLEAR_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CLEAR_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error for',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CLEAR_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CLEAR_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_DRAFT_BAD_PAYLOAD, 3),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_UPDATE_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_UPDATE_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_GET_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_GET_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_GET_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_GET_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 2),
    defaultMessage: 'Group Name is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_BAD_PAYLOAD, 3),
    defaultMessage: 'Group Description is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_CONVERT_TO_GROUP_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 2),
    defaultMessage: 'Action is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SET_ACTION_BAD_PAYLOAD, 3),
    defaultMessage: 'Action_ID is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SET_ACTION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SET_ACTION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHAT_SET_ACTION_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHAT_SET_ACTION_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // Group room errors 3xx

  [errorI18nKey(errorCode.ERROR_GROUP_CREATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CREATE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_Name for Group is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CREATE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CREATE_BAD_PAYLOAD, 2),
    defaultMessage: 'Group Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CREATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CREATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CREATE_LIMIT_REACHED)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CREATE_LIMIT_REACHED),
    defaultMessage: 'You are restricted to create more rooms',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 2),
    defaultMessage: 'User_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_BAD_PAYLOAD, 3),
    defaultMessage: 'StartMessage_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_EXISTS)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_EXISTS),
    defaultMessage: 'This user has already joined this room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_PARTICIPANTS_COUNT_LIMIT_EXCEEDED)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_PARTICIPANTS_COUNT_LIMIT_EXCEEDED),
    defaultMessage: 'No more member can join this room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MEMBER_PRIVACY_PROTECTION)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MEMBER_PRIVACY_PROTECTION),
    defaultMessage: 'You cannot invite this user to groups because of the protected privacy',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 4),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 5),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 6),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 7),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 8),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 9),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 10)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 10),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 11)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 11),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 12)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 12),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 13)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 13),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 14)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 14),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 15)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 15),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 16)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 16),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 17)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 17),
    defaultMessage: 'Location is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 18)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 18),
    defaultMessage: 'Location.lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 19)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 19),
    defaultMessage: 'Location.lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 22)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 22),
    defaultMessage: 'Contact is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 23)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 23),
    defaultMessage: 'Message_Type is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 24)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 24),
    defaultMessage: 'No such file is found',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 25)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 25),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 26)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 26),
    defaultMessage: 'ForwardFrom.Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 27)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 27),
    defaultMessage: 'ForwardFrom.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 28)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 28),
    defaultMessage: 'ForwardFrom is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 29)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 29),
    defaultMessage: 'ReplyTo and ForwardFrom have been set',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 30)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 30),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 31)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 31),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 32)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_BAD_PAYLOAD, 32),
    defaultMessage: 'Message is too long',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SEND_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SEND_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_STATUS_BAD_PAYLOAD, 3),
    defaultMessage: 'Status is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_STATUS_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_STATUS_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_CLEAR_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CLEAR_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CLEAR_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CLEAR_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Clear_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CLEAR_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CLEAR_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CLEAR_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CLEAR_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MODERATOR_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MODERATOR_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MODERATOR_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MODERATOR_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MODERATOR_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MODERATOR_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_MODERATOR_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_MODERATOR_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_ADD_ADMIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_ADMIN_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_ADMIN_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_ADMIN_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_ADMIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_ADMIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_ADD_ADMIN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_ADD_ADMIN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MODERATOR_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MODERATOR_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MODERATOR_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MODERATOR_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MODERATOR_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MODERATOR_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MODERATOR_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MODERATOR_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_KICK_ADMIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_ADMIN_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_ADMIN_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_ADMIN_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_ADMIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_ADMIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_ADMIN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_ADMIN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 2),
    defaultMessage: 'Group Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_BAD_PAYLOAD, 3),
    defaultMessage: 'Group Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MEMBER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MEMBER_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MEMBER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MEMBER_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MEMBER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MEMBER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_KICK_MEMBER_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_KICK_MEMBER_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_LEFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_LEFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_LEFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_LEFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_LEFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_LEFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_ADD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_ADD_BAD_PAYLOAD, 1),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_ADD_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_ADD_BAD_PAYLOAD, 2),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_ADD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_ADD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_ADD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_ADD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Avatar_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_DELETE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_DELETE_BAD_PAYLOAD, 2),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_GET_LIST_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_GET_LIST_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_AVATAR_GET_LIST_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_AVATAR_GET_LIST_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_DRAFT_BAD_PAYLOAD, 3),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_GET_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 2),
    defaultMessage: 'FilterRole is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 3),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_BAD_PAYLOAD, 4),
    defaultMessage: 'Limit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_GET_MEMBER_LIST_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_GET_MEMBER_LIST_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 2),
    defaultMessage: 'Action is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SET_ACTION_BAD_PAYLOAD, 3),
    defaultMessage: 'Action_ID is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SET_ACTION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SET_ACTION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_SET_ACTION_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_SET_ACTION_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_CHECK_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CHECK_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_CHECK_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_CHECK_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 2),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 3),
    defaultMessage: 'This username has already been taken by another user',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_BAD_PAYLOAD, 4),
    defaultMessage: 'More than the allowed usernames have been selected by you',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_UPDATE_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_UPDATE_LOCK),
    defaultMessage: 'Username has been changed recently, to renew it wait until the allowed time or choose the last one again',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_UPDATE_USERNAME_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_UPDATE_USERNAME_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_REMOVE_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REMOVE_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_REMOVE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REMOVE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_REMOVE_USERNAME_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REMOVE_USERNAME_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_REVOKE_LINK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REVOKE_LINK_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_REVOKE_LINK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REVOKE_LINK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_REVOKE_LINK_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_REVOKE_LINK_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GROUP_EDIT_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GROUP_EDIT_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // Channel room errors 4xx

  [errorI18nKey(errorCode.ERROR_CHANNEL_CREATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CREATE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_Name for Channel is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_CREATE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CREATE_BAD_PAYLOAD, 2),
    defaultMessage: 'Channel Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_CREATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CREATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_CREATE_LIMIT_REACHED)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CREATE_LIMIT_REACHED),
    defaultMessage: 'You are restricted to create more rooms',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_BAD_PAYLOAD, 2),
    defaultMessage: 'User_ID_Member is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_EXISTS)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_EXISTS),
    defaultMessage: 'This user has already joined this room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MEMBER_PRIVACY_PROTECTION)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MEMBER_PRIVACY_PROTECTION),
    defaultMessage: 'You cannot invite this user to groups because of the protected privacy',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 4),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 5),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 6),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 7),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 8),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 9),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 10)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 10),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 11)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 11),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 12)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 12),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 13)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 13),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 14)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 14),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 15)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 15),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 16)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 16),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 17)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 17),
    defaultMessage: 'Location is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 18)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 18),
    defaultMessage: 'Location.lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 19)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 19),
    defaultMessage: 'Location.lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 22)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 22),
    defaultMessage: 'Contact is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 23)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 23),
    defaultMessage: 'Message_Type is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 24)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 24),
    defaultMessage: 'No such file is found',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 25)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 25),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 26)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 26),
    defaultMessage: 'ForwardFrom.Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 27)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 27),
    defaultMessage: 'ForwardFrom.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 28)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 28),
    defaultMessage: 'ForwardFrom is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 29)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 29),
    defaultMessage: 'ReplyTo and ForwardFrom have been set',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 30)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 30),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 31)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 31),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 32)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_BAD_PAYLOAD, 32),
    defaultMessage: 'Message is too long',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_SEND_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_SEND_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_DELETE_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 2),
    defaultMessage: 'FilterRole is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 3),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_BAD_PAYLOAD, 4),
    defaultMessage: 'Limit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MEMBER_LIST_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MODERATOR_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MODERATOR_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MODERATOR_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MODERATOR_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MODERATOR_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MODERATOR_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MODERATOR_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MODERATOR_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_ADMIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_ADMIN_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_ADMIN_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_ADMIN_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_ADMIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_ADMIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_ADMIN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_ADMIN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MODERATOR_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MODERATOR_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MODERATOR_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MODERATOR_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MODERATOR_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MODERATOR_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MODERATOR_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MODERATOR_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_ADMIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_ADMIN_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_ADMIN_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_ADMIN_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_ADMIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_ADMIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_ADMIN_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_ADMIN_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 2),
    defaultMessage: 'Channel Name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_BAD_PAYLOAD, 3),
    defaultMessage: 'Channel Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MEMBER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MEMBER_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MEMBER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MEMBER_BAD_PAYLOAD, 2),
    defaultMessage: 'Member_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MEMBER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MEMBER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_KICK_MEMBER_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_KICK_MEMBER_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_LEFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_LEFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_LEFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_LEFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_LEFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_LEFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_ADD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_ADD_BAD_PAYLOAD, 1),
    defaultMessage: 'Attachment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_ADD_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_ADD_BAD_PAYLOAD, 2),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_ADD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_ADD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_ADD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_ADD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_DELETE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_DELETE_BAD_PAYLOAD, 1),
    defaultMessage: 'Avatar_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_DELETE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_DELETE_BAD_PAYLOAD, 2),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_DELETE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_DELETE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_DELETE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_DELETE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_AVATAR_GET_LIST_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_BAD_PAYLOAD, 3),
    defaultMessage: 'ReplyTo is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_DRAFT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_DRAFT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_DRAFT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_DRAFT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_DRAFT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_DRAFT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_CHECK_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CHECK_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_CHECK_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_CHECK_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 2),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 3),
    defaultMessage: 'This username has already been taken by another user',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_BAD_PAYLOAD, 4),
    defaultMessage: 'More than the allowed usernames have been selected by you',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_UPDATE_LOCK)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_UPDATE_LOCK),
    defaultMessage: 'Username has been changed recently, to renew it wait until the allowed time or choose the last one again',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_USERNAME_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REMOVE_USERNAME_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_REVOKE_LINK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REVOKE_LINK_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_REVOKE_LINK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REVOKE_LINK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_REVOKE_LINK_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_REVOKE_LINK_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_BAD_PAYLOAD, 2),
    defaultMessage: 'Signature is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_UPDATE_SIGNATURE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 2),
    defaultMessage: 'At least one message is required',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 3),
    defaultMessage: 'Number of messages is more than the allowed',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_BAD_PAYLOAD, 4),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_GET_MESSAGES_STATS_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_BAD_PAYLOAD, 3),
    defaultMessage: 'Reaction is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_ADD_MESSAGE_REACTION_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_BAD_PAYLOAD, 3),
    defaultMessage: 'Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CHANNEL_EDIT_MESSAGE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // Info errors 5xx

  [errorI18nKey(errorCode.ERROR_INFO_LOCATION_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_INFO_LOCATION_NOT_FOUND),
    defaultMessage: 'Location could not be found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_INFO_COUNTRY_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_INFO_COUNTRY_BAD_PAYLOAD, 1),
    defaultMessage: 'IsoCode is invalid',
    description,
  },


  [errorI18nKey(errorCode.ERROR_INFO_PAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_INFO_PAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'ID is Wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_INFO_PAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_INFO_PAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_INFO_WALLPAPER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_INFO_WALLPAPER_BAD_PAYLOAD, 1),
    defaultMessage: 'Fit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_INFO_WALLPAPER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_INFO_WALLPAPER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },

  // Client errors 6xx

  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 2),
    defaultMessage: 'MessageVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 3),
    defaultMessage: 'StatusVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 4),
    defaultMessage: 'DeleteVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 5),
    defaultMessage: 'OfflineDeleted is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 6),
    defaultMessage: 'OfflineEdited.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 7),
    defaultMessage: 'OfflineEdited.Message is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 8),
    defaultMessage: 'OfflineSeen is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 9)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 9),
    defaultMessage: 'Clear_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 10)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 10),
    defaultMessage: 'CacheStart_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 11)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 11),
    defaultMessage: 'CacheEnd_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 12)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 12),
    defaultMessage: 'OfflineMute is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 13)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 13),
    defaultMessage: 'Your request is totally wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 14)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 14),
    defaultMessage: 'OfflineListened is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 15)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 15),
    defaultMessage: 'Your request is totally wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 16)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 16),
    defaultMessage: 'OfflineDeletedDeprecated & OfflineDeleted have been set both',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 17)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 17),
    defaultMessage: 'OfflineDeleted.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 18)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_BAD_PAYLOAD, 18),
    defaultMessage: 'OfflineDeleted.both is invalid',
    description,
  },

  [errorI18nKey(errorCode.ERROR_CLIENT_CONDITION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CONDITION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_BAD_PAYLOAD),
    defaultMessage: 'Something is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Something is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_FORBIDDEN),
    defaultMessage: 'Something is wrong',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_DELETE_MESSAGE_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_DELETE_MESSAGE_BAD_PAYLOAD),
    defaultMessage: 'Something is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_DELETE_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_DELETE_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Something is wrong',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_BAD_PAYLOAD),
    defaultMessage: 'Something is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Something is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UPDATE_MESSAGE_STATUS_FORBIDDEN),
    defaultMessage: 'Something is wrong',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_LIST_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_LIST_BAD_PAYLOAD, 1),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_LIST_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_LIST_BAD_PAYLOAD, 2),
    defaultMessage: 'Limit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_LIST_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_LIST_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_NOT_FOUND),
    defaultMessage: 'No Such room with the requested ID was found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 2),
    defaultMessage: 'FirstMessage_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 3),
    defaultMessage: 'Direction is wrong',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_BAD_PAYLOAD, 4),
    defaultMessage: 'Limit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_HISTORY_NOT_FOUND),
    defaultMessage: 'There is no other massage to view',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 2),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 3),
    defaultMessage: 'Filter is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_BAD_PAYLOAD, 4),
    defaultMessage: 'OffSet.Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_ROOM_HISTORY_NOT_FOUND),
    defaultMessage: 'There is no other massage to view',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Username is incorrect',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_RESOLVE_USERNAME_NOT_FOUND),
    defaultMessage: 'There is no user with the requested username',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_GET_ROOM_MESSAGE_NOT_FOUND),
    defaultMessage: 'The requested message could not be found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_BAD_PAYLOAD, 1),
    defaultMessage: 'Invite Token is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_CHECK_INVITE_LINK_NOT_FOUND),
    defaultMessage: 'Invite Link of the room is invalid',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_BAD_PAYLOAD, 1),
    defaultMessage: 'Invite Token is not valid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_ALREADY_JOINED)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_ALREADY_JOINED),
    defaultMessage: 'The user has already joined this room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_PARTICIPANTS_COUNT_LIMIT_EXCEEDED)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_INVITE_LINK_PARTICIPANTS_COUNT_LIMIT_EXCEEDED),
    defaultMessage: 'No other user is accepted to join this room because of the allowed number reached',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_ALREADY_JOINED)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_ALREADY_JOINED),
    defaultMessage: 'The user has already joined this room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_PARTICIPANTS_COUNT_LIMIT_EXCEEDED)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_JOIN_BY_USERNAME_PARTICIPANTS_COUNT_LIMIT_EXCEEDED),
    defaultMessage: 'No other user is accepted to join this room because of the allowed number reached',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SUBSCRIBE_TO_ROOM_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_UNSUBSCRIBE_FROM_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UNSUBSCRIBE_FROM_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_UNSUBSCRIBE_FROM_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_UNSUBSCRIBE_FROM_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_USERNAME_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_USERNAME_BAD_PAYLOAD, 1),
    defaultMessage: 'Query is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_SEARCH_USERNAME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_SEARCH_USERNAME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_COUNT_ROOM_HISTORY_NOT_FOUND),
    defaultMessage: 'No such room was found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_MUTE_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_MUTE_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_MUTE_ROOM_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_MUTE_ROOM_BAD_PAYLOAD, 2),
    defaultMessage: 'RoomMute is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_MUTE_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_MUTE_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_MUTE_ROOM_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_MUTE_ROOM_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_PIN_ROOM_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_PIN_ROOM_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_PIN_ROOM_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_PIN_ROOM_BAD_PAYLOAD, 2),
    defaultMessage: 'PIN is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_PIN_ROOM_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_PIN_ROOM_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_PIN_ROOM_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_PIN_ROOM_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 1),
    defaultMessage: 'Room_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 3),
    defaultMessage: 'Reason is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_BAD_PAYLOAD, 4),
    defaultMessage: 'Description is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_REPORTED_BEFORE)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_REPORTED_BEFORE),
    defaultMessage: 'You have already reported this message/room',
    description,
  },
  [errorI18nKey(errorCode.ERROR_CLIENT_ROOM_REPORT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_CLIENT_ROOM_REPORT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // File errors 7xx

  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_OPTION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_OPTION_BAD_PAYLOAD, 1),
    defaultMessage: 'Size is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_OPTION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_OPTION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 1),
    defaultMessage: 'Size is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 2),
    defaultMessage: 'First bytes are invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 3),
    defaultMessage: 'Last bytes are invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 4),
    defaultMessage: 'FileHash is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_BAD_PAYLOAD, 5),
    defaultMessage: 'FileName is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INIT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INIT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 2),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 3),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_BAD_PAYLOAD, 4),
    defaultMessage: 'Bytes are invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_STATUS_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_STATUS_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_UPLOAD_STATUS_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_FILE_UPLOAD_STATUS_NOT_FOUND),
    defaultMessage: 'No such file was found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_FILE_INFO_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_INFO_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_INFO_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_INFO_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_INFO_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_FILE_INFO_NOT_FOUND),
    defaultMessage: 'No such file was found',
    description,
  },


  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 1),
    defaultMessage: 'Token is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 2),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 3),
    defaultMessage: 'MaxLimit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_BAD_PAYLOAD, 4),
    defaultMessage: 'Selector is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_FILE_DOWNLOAD_NOT_FOUND)]: {
    id: errorI18nId(errorCode.ERROR_FILE_DOWNLOAD_NOT_FOUND),
    defaultMessage: 'No such file was found',
    description,
  },

  // QR code errors 7xx

  [errorI18nKey(errorCode.ERROR_QR_CODE_JOIN_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_JOIN_BAD_PAYLOAD, 1),
    defaultMessage: 'InviteToken is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_JOIN_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_JOIN_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_QR_CODE_RESOLVE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_RESOLVE_BAD_PAYLOAD, 1),
    defaultMessage: 'Username is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_RESOLVE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_RESOLVE_BAD_PAYLOAD, 2),
    defaultMessage: 'Message_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_RESOLVE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_RESOLVE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 1),
    defaultMessage: 'AppName is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 2),
    defaultMessage: 'App_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 3),
    defaultMessage: 'AppBuildVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 4)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 4),
    defaultMessage: 'AppVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 5)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 5),
    defaultMessage: 'Platform is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 6)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 6),
    defaultMessage: 'PlatformVersion is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 7)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 7),
    defaultMessage: 'Device is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 8)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_BAD_PAYLOAD, 8),
    defaultMessage: 'DeviceName is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_NEW_DEVICE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_NEW_DEVICE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 1),
    defaultMessage: 'Phone is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 2),
    defaultMessage: 'First name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_CONTACT_BAD_PAYLOAD, 3),
    defaultMessage: 'Last name is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_CONTACT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_CONTACT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_ME_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_ME_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_QR_CODE_ADD_ME_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_QR_CODE_ADD_ME_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },

  // Signaling errors 9xx

  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_CONFIGURATION_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_CONFIGURATION_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_CONFIGURATION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_CONFIGURATION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 1),
    defaultMessage: 'CalledUser_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 2),
    defaultMessage: 'Type is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_BAD_PAYLOAD, 3),
    defaultMessage: 'Caller_SDP is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_BLOCKED_BY_PEER)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_BLOCKED_BY_PEER),
    defaultMessage: 'You have got blocked by the peer',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_OFFER_PRIVACY_PROTECTION)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_OFFER_PRIVACY_PROTECTION),
    defaultMessage: 'You cannot call this user because of the protected privacy',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_RINGING_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RINGING_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RINGING_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RINGING_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RINGING_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RINGING_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_ACCEPT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_ACCEPT_BAD_PAYLOAD, 1),
    defaultMessage: 'Called_SDP is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_ACCEPT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_ACCEPT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_ACCEPT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_ACCEPT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 1),
    defaultMessage: 'Candidate is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 2),
    defaultMessage: 'SDP_MID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CANDIDATE_BAD_PAYLOAD, 3),
    defaultMessage: 'DP_M_Line_Index is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_CANDIDATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CANDIDATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_CANDIDATE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CANDIDATE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_LEAVE_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_LEAVE_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_LEAVE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_LEAVE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_LEAVE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_LEAVE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_SESSION_HOLD_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_SESSION_HOLD_BAD_PAYLOAD, 1),
    defaultMessage: 'Hold is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_SESSION_HOLD_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_SESSION_HOLD_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_SESSION_HOLD_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_SESSION_HOLD_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 1),
    defaultMessage: 'Pagination is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 2),
    defaultMessage: 'OffSet is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_LOG_BAD_PAYLOAD, 3),
    defaultMessage: 'Limit is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_GET_LOG_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_GET_LOG_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_CLEAR_LOG_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CLEAR_LOG_BAD_PAYLOAD, 1),
    defaultMessage: 'Clear_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_CLEAR_LOG_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_CLEAR_LOG_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 1),
    defaultMessage: 'ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 2),
    defaultMessage: 'Rate is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 3)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RATE_BAD_PAYLOAD, 3),
    defaultMessage: 'Reason is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_SIGNALING_RATE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_SIGNALING_RATE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },

  // Geo errors 10xx

  [errorI18nKey(errorCode.ERROR_GEO_GET_REGISTER_STATUS_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_REGISTER_STATUS_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_REGISTER_STATUS_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_REGISTER_STATUS_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_REGISTER_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_REGISTER_BAD_PAYLOAD, 1),
    defaultMessage: 'Enable is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_REGISTER_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_REGISTER_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_POSITION_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_POSITION_BAD_PAYLOAD, 1),
    defaultMessage: 'Lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_POSITION_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_POSITION_BAD_PAYLOAD, 2),
    defaultMessage: 'Lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_POSITION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_POSITION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_POSITION_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_POSITION_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_GET_COMMENT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_COMMENT_BAD_PAYLOAD, 1),
    defaultMessage: 'User_ID is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_COMMENT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_COMMENT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_COMMENT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_COMMENT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_COMMENT_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_COMMENT_BAD_PAYLOAD, 1),
    defaultMessage: 'Comment is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_COMMENT_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_COMMENT_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_UPDATE_COMMENT_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GEO_UPDATE_COMMENT_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_BAD_PAYLOAD, 1),
    defaultMessage: 'Lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_BAD_PAYLOAD, 2),
    defaultMessage: 'Lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_DISTANCE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_BAD_PAYLOAD, 1)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_BAD_PAYLOAD, 1),
    defaultMessage: 'Lat is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_BAD_PAYLOAD, 2)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_BAD_PAYLOAD, 2),
    defaultMessage: 'Lon is invalid',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_FORBIDDEN)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_NEARBY_COORDINATE_FORBIDDEN),
    defaultMessage: 'You are forbidden to do the action',
    description,
  },


  [errorI18nKey(errorCode.ERROR_GEO_GET_CONFIGURATION_BAD_PAYLOAD)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_CONFIGURATION_BAD_PAYLOAD),
    defaultMessage: 'Bad payload',
    description,
  },
  [errorI18nKey(errorCode.ERROR_GEO_GET_CONFIGURATION_INTERNAL_SERVER_ERROR)]: {
    id: errorI18nId(errorCode.ERROR_GEO_GET_CONFIGURATION_INTERNAL_SERVER_ERROR),
    defaultMessage: 'Internal server error',
    description,
  },

};