import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoGroupRevokeLink} _request
 * @property {ProtoGroupRevokeLinkResponse} _response
 */
export default class RevokeLink extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      groupPrivateInviteLink: this._response.getInviteLink(),
      groupPrivateInviteToken: this._response.getInviteToken(),
    }));
  }
}