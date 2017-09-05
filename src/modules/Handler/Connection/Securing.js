import Client from '../../Api/Client';
import {ConnectionSymmetricKey} from '../../Proto';
import {CONNECTION_SYMMETRIC_KEY} from '../../../constants/methods';

import forge from 'node-forge';
import {stringToUint8Array} from '../../../utils/buffer';
import Api from '../../Api';
import Base from '../Base';

const embeddedPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgk qhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo+inlAfd8Qior8IMKaJ+
BREJcEc9J9RhHgh6g/LvHKsnMaiEbAL70jQBQTLpCRu5Cnpj20+isOi++Wtf/pIP
FdJbD/1H+5jS+ja0RA6unp93DnBuYZ2JjV60vF3Ynj6F4Vr1ts5Xg5dJlEaOcOO2
YzOU97ZGP0ozrXIT5S+Y0BC4M9ieQmlGREzt3UZlTBbyUYPS4mMFh88YcT3QTiTA
k897qlJLxkYxVyAgwAD/0ihmWEkBQe9IxwVT/x5/QbixGSl4Zvd+5d+9sTZcSZQS
iJInT4E6DcmgAVYu5jFMWJDTEuurOQZ1W4nbmGyoY1bZXaFoiMPfzy72VIddkoHg
mwIDAQAB
-----END PUBLIC KEY-----`;

const embeddedPublicKey = forge.pki.publicKeyFromPem(embeddedPem);

/**
 * @property {ProtoConnectionSecuringResponse} _response
 */
export default class Securing extends Base {
  handle() {
    const publicKey = forge.pki.publicKeyFromPem(this._response.getPublicKey());

    const symmetricKey = forge.random.getBytesSync(this._response.getSymmetricKeyLength());
    Client.instance.symmetricKey = symmetricKey;

    Client.instance.heartbeatInterval = this._response.getHeartbeatInterval();

    let key = publicKey.encrypt(symmetricKey);
    let secureKey = '';
    while (key.length) {
      secureKey += embeddedPublicKey.encrypt(key.substr(0, this._response.getSecondaryChunkSize()));
      key = key.substr(this._response.getSecondaryChunkSize());
    }

    let connectionSymmetricKey = new ConnectionSymmetricKey();
    connectionSymmetricKey.setSymmetricKey(stringToUint8Array(secureKey));
    connectionSymmetricKey.setVersion(2);

    Api.invoke(CONNECTION_SYMMETRIC_KEY, connectionSymmetricKey);
  }


}