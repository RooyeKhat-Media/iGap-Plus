import Base from '../../Base';
import {map} from 'lodash';
import {normalize} from 'normalizr';
import registeredUser from '../../../../schemas/registeredUser';
import {entitiesRegisteredUserAdd} from '../../../../actions/entities/registeredUser';
import {addList} from '../../../../actions/methods/user/contacts/getList';
import {apiInvoke} from '../../../Entities/RegisteredUsers/index';

/**
 * @property {ProtoUserContactsImport} _request
 * @property {ProtoUserContactsImportResponse} _response
 */
export default class Import extends Base {
  async handle() {
    const userPromiseList = [];
    this._response.getRegisteredContactsList().forEach((contact) => {
      userPromiseList.push(apiInvoke(contact.getUserId()));
    });
    const userInfoResponseList = await Promise.all(userPromiseList);
    const userInfoList = map(userInfoResponseList, (response) => {
      return response.getUser();
    });

    const normalizedData = normalize(userInfoList, [registeredUser]);
    this.dispatch(entitiesRegisteredUserAdd(normalizedData.entities.registeredUsers));
    this.dispatch(addList(normalizedData.result));
  }
}