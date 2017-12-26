import Base from '../Base';
import putRoomState from '../../Entities/Rooms/index';
import putUserState from '../../Entities/RegisteredUsers/index';
import {Proto} from '../../Proto/index';
import {cancelAction, setAction} from '../../../actions/methods/rooms/actionList';
import {getUserId} from '../../../utils/app';

/**
 * @property {ProtoChatSetAction} _request
 * @property {ProtoChatSetActionResponse} _response
 */
export default class SetAction extends Base {
  async handle() {
    const roomId = this._response.getRoomId().toString();
    const userId = this._response.getUserId().toString();
    if (userId === getUserId(true)) {
      return;
    }

    await putRoomState(roomId);
    await putUserState(userId);

    if (this._response.getAction() === Proto.ClientAction.CANCEL) {
      this.dispatch(cancelAction(roomId, userId));
    } else {
      this.dispatch(setAction(roomId, this._response.getAction(), userId));
    }
  }
}