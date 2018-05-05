import Base from '../Base';
import {Proto} from '../../../modules/Proto/index';
import {goRoomHistory} from '../../../navigators/SecondaryNavigator';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';
import registeredUser from '../../../schemas/registeredUser';
import {normalize} from 'normalizr';
import {entitiesRoomsAddFull} from '../../../actions/entities/rooms';
import {getPeerRoomId} from '../../../utils/messenger';
import room from '../../../schemas/room';

/**
 * @property {ProtoClientResolveUsername} _request
 * @property {ProtoClientResolveUsernameResponse} _response
 */
export default class ResolveUsername extends Base {
  async handle() {
    switch (this._response.getType()) {
      case Proto.ClientResolveUsernameResponse.prototype.Type.USER:
        const normalizedDataUser = normalize(this._response.getUser(), registeredUser);
        this.dispatch(entitiesRegisteredUserAdd(normalizedDataUser.entities.registeredUsers));
        const chatId = await getPeerRoomId(this._response.getUser().getId().toString());
        goRoomHistory(chatId);
        break;
      case Proto.ClientResolveUsernameResponse.prototype.Type.ROOM:
        const normalizedDataRoom = normalize(this._response.getRoom(), room);
        await  this.dispatch(entitiesRoomsAddFull(normalizedDataRoom));
        goRoomHistory(this._response.getRoom().getId().toString());
        break;
    }
  }
}