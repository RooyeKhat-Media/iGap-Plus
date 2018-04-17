import Base from '../Base';
import putState from '../../Entities/RegisteredUsers/index';

/**
 * @property {ProtoGeoGetNearbyCoordinate} _request
 * @property {ProtoGeoGetNearbyCoordinateResponse} _response
 */
export default class GetNearbyCoordinate extends Base {
  handle() {
    this._response.getResultList().forEach(x => putState(x.getUserId().toString()));
  }
}