import Base from '../../Base';
import {entitiesRegisteredUserEdit} from '../../../../actions/entities/registeredUser';
import {getUserId} from '../../../../utils/app';

/**
 * @property {ProtoUserProfileUpdateUsername} _request
 * @property {ProtoUserProfileUpdateUsernameResponse} _response
 */
export default class UpdateUsername extends Base {
  handle() {
    this.dispatch(entitiesRegisteredUserEdit(getUserId(true), {username: this._response.getUsername()}, true));
  }
}