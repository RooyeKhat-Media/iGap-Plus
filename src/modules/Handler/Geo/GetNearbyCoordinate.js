import Base from '../Base';
import putState from '../../Entities/RegisteredUsers/index';

/**
 * @property {ProtoGeoGetNearbyCoordinate} _request
 * @property {ProtoGeoGetNearbyCoordinateResponse} _response
 */
export default class GetNearbyCoordinate extends Base {
  handle() {
    const results = this._response.getResultList();
    results.forEach(function(result) {
      putState(result.getUserId().toString());
    });
  }
}