import Base from '../Base';
import {entitiesRegisteredUserEdit} from '../../../actions/entities/registeredUser';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoUserUpdateStatus} _request
 * @property {ProtoUserUpdateStatusResponse} _response
 */
export default class UpdateStatus extends Base {
  handle() {
    const userId = this._response.getUserId().toString();
    if (this._response.getStatus() === Proto.UserUpdateStatus.Status.ONLINE) {
      this.dispatch(entitiesRegisteredUserEdit(userId, {
        status: Proto.RegisteredUser.Status.ONLINE,
      }, false));
    } else {
      this.dispatch(entitiesRegisteredUserEdit(userId, {
        status: Proto.RegisteredUser.Status.EXACTLY,
        lastSeen: this._response.getResponse().getTimestamp(),
      }, false));
    }
  }
}