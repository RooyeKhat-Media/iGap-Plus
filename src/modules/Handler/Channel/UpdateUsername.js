import Base from '../Base';
import {entitiesRoomEdit} from '../../../actions/entities/rooms';
import {Proto} from '../../Proto/index';

/**
 * @property {ProtoChannelUpdateUsername} _request
 * @property {ProtoChannelUpdateUsernameResponse} _response
 */
export default class UpdateUsername extends Base {
  handle() {
    this.dispatch(entitiesRoomEdit(this._response.getRoomId().toString(), {
      channelPublicUsername: this._response.getUsername(),
      channelType: Proto.ChannelRoom.Type.PUBLIC_ROOM,
      channelPrivateInviteToken: null,
      channelPrivateInviteLink: null,
    }));
  }
}