import Base from '../Base';

/**
 * @property {ProtoChannelCreate} _request
 * @property {ProtoChannelCreateResponse} _response
 */
export default class Create extends Base {
  handle() {
    console.log('jjjjjj', '  create channel      roomid = ' + this._response.getRoomId() + '      invitelink = ' +  this._response.getInviteLink() );
    // TODO [NEJATI] - 10/22/2017 3:12 PM -     go to page private or public channle    if we  create channel

    console.error('Create', 'Not implemented yet', this);
  }
}