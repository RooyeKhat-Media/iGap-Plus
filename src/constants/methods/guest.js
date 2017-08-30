/**
 * @flow
 */
import * as methods from './index';

const guestTable = [
  methods.CONNECTION_SYMMETRIC_KEY,
  methods.HEARTBEAT,
  methods.USER_REGISTER,
  methods.USER_VERIFY,
  methods.USER_LOGIN,
  methods.USER_TWO_STEP_VERIFICATION_GET_PASSWORD_DETAIL,
  methods.USER_TWO_STEP_VERIFICATION_VERIFY_PASSWORD,
  methods.USER_TWO_STEP_VERIFICATION_REQUEST_RECOVERY_TOKEN,
  methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_TOKEN,
  methods.USER_TWO_STEP_VERIFICATION_RECOVER_PASSWORD_BY_ANSWERS,
  methods.INFO_LOCATION,
  methods.INFO_COUNTRY,
  methods.INFO_TIME,
  methods.INFO_PAGE,
  methods.QR_CODE_NEW_DEVICE,

];

export default function(actionId) {
  return guestTable.includes(actionId);
}
