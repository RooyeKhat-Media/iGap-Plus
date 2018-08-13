import Base from '../Base';
import {normalize} from 'normalizr';
import registeredUser from '../../../schemas/registeredUser';
import {collect as collectRoom} from './GetRoom';
import {collect as collectUser} from '../User/Info';
import room from '../../../schemas/room';
import {Proto} from '../../Proto/index';


/**
 * @property {ProtoClientSearchUsername} _request
 * @property {ProtoClientSearchUsernameResponse} _response
 */
export default class SearchUsername extends Base {
  handle() {
    this._response.getResultList().forEach((item) => {
      if (item.getType() === Proto.ClientSearchUsernameResponse.Result.prototype.Type.ROOM) {
        const normalizedDataRoom = normalize(item.getRoom(), room);
        collectRoom(normalizedDataRoom, item.getRoom().getId().toString());
      } else {
        const normalizedData = normalize(item.getUser(), registeredUser);
        collectUser(normalizedData.entities.registeredUsers, item.getUser().getId().toString());
      }
    });
  }
}