import Base from '../../Base';
import {entitiesRegisteredUserEdit} from '../../../../actions/entities/registeredUser';
import {getUserId} from '../../../../utils/app';

/**
 * @property {ProtoUserAvatarAdd} _request
 * @property {ProtoUserAvatarAddResponse} _response
 */
export default class Add extends Base {
  handle() {
    this.dispatch(entitiesRegisteredUserEdit(getUserId(true), {avatar: this._response.getAvatar()}));
  }
}