import Base from '../Base';
import putState from '../../Entities/RegisteredUsers/index';

/**
 * @property {ProtoGeoGetNearbyDistance} _request
 * @property {ProtoGeoGetNearbyDistanceResponse} _response
 */
export default class GetNearbyDistance extends Base {
  handle() {
    this._response.getResultList().forEach(x => putState(x.getUserId().toString()));
  }
}