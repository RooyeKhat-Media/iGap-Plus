import Base from '../Base';
import putRoomState from '../../Entities/Rooms/index';
import putUserState from '../../Entities/RegisteredUsers/index';
import {Proto} from '../../Proto/index';
import {cancelAction, setAction} from '../../../actions/methods/rooms/actionList';
import {getUserId} from '../../../utils/app';
import {randomString} from '../../../utils/core';
import {ACTION_TYPING_TIME} from '../../../constants/configs';
import store from '../../../configureStore';

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
      const random = randomString(5);
      this.dispatch(setAction(roomId, {
        action: this._response.getAction(),
        random,
      }, userId));

      if (this._response.getAction() === Proto.ClientAction.TYPING) {
        setTimeout(() => {
          const roomAction = store.getState().methods.getActionList[roomId];
          if (roomAction[userId] && random === roomAction[userId].random) {
            this.dispatch(cancelAction(roomId, userId));
          }
        }, ACTION_TYPING_TIME);
      }
    }
  }
}