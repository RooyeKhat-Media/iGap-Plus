import Base from '../Base';
import {getLogList} from '../../../actions/methods/signaling/callLog';
import {normalize} from 'normalizr';
import registeredUser from '../../../schemas/registeredUser';
import {entitiesRegisteredUserAdd} from '../../../actions/entities/registeredUser';

/**
 * @property {ProtoSignalingGetLog} _request
 * @property {ProtoSignalingGetLogResponse} _response
 */
export default class GetLog extends Base {
  handle() {
    const registeredList = [];
    const logList = [];
    this._response.getSignalingLogList().forEach((item) => {
      registeredList.push(item.getPeer());
      logList.push(
        {
          id: item.getId(),
          peerId: item.getPeer().getId(),
          duration: item.getDuration(),
          offerTime: item.getOfferTime(),
          status: item.getStatus(),
          type: item.getType(),
        }
      );
    });

    const normalizedData = normalize(registeredList, [registeredUser]);
    if (normalizedData.entities.registeredUsers) {
      this.dispatch(entitiesRegisteredUserAdd(normalizedData.entities.registeredUsers));
    }
    this.dispatch(getLogList(logList));
  }
}