import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';

/**
 * @property {ProtoChannelRevokeLink} _request
 * @property {ProtoChannelRevokeLinkResponse} _response
 */
export default class RevokeLink extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      channelPrivateInviteLink: this._response.getInviteLink(),
      channelPrivateInviteToken: this._response.getInviteToken(),
    }));
  }
}