import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoChannelRemoveUsername} _request
 * @property {ProtoChannelRemoveUsernameResponse} _response
 */
export default class RemoveUsername extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      channelPublicUsername: null,
      channelType: Proto.ChannelRoom.Type.PRIVATE_ROOM,
      channelPrivateInviteToken: '', //todo set invite Token
      channelPrivateInviteLink: '', //todo set invite Link
    }));
  }
}