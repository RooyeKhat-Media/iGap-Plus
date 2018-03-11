import GroupAddMember from '../Group/AddMember';

/**
 * @property {ProtoChannelAddMember} _request
 * @property {ProtoChannelAddMemberResponse} _response
 */
export default class AddMember extends GroupAddMember {
  role = 'channelRole';
}