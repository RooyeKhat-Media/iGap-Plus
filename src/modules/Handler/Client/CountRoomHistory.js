import Base from '../Base';
import {clientCountRoomHistory} from '../../../actions/methods/client/countRoomHistory';

/**
 * @property {ProtoClientCountRoomHistory} _request
 * @property {ProtoClientCountRoomHistoryResponse} _response
 */
export default class CountRoomHistory extends Base {
  handle() {
    this.dispatch(clientCountRoomHistory(this._request.getRoomId().toString(), {
      media: this._response.getMedia(),
      image: this._response.getImage(),
      video: this._response.getVideo(),
      audio: this._response.getAudio(),
      voice: this._response.getVoice(),
      gif: this._response.getGif(),
      file: this._response.getFile(),
      url: this._response.getUrl(),
    }))
    ;
  }
}