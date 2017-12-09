import Base from '../../Base';
import {setNickname} from '../../../../actions/methods/user/profile/nickname';
import {entitiesRegisteredUserEdit} from '../../../../actions/entities/registeredUser';
import {getUserId} from '../../../../utils/app';

/**
 * @property {ProtoUserProfileSetNickname} _request
 * @property {ProtoUserProfileSetNicknameResponse} _response
 */
export default class SetNickname extends Base {
  handle() {
    this.dispatch(setNickname(this._response.getNickname()));
    this.dispatch(entitiesRegisteredUserEdit(getUserId(true), {
      initials: this._response.getInitials(),
    }));
  }
}