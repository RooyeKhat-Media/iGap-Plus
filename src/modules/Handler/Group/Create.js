import Base from '../Base';

/**
 * @property {ProtoGroupCreate} _request
 * @property {ProtoGroupCreateResponse} _response
 */
export default class Create extends Base {
  handle() {
    console.log('jjjjjj', 'roomid = ' + this._response.getRoomId() + '      invitelink = ' +  this._response.getInviteLink() );
    // TODO [NEJATI] - 10/22/2017 3:12 PM -     add member to group after create   if we  create group

    console.error('Create', 'Not implemented yet', this);
  }
}