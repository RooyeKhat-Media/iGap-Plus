import MetaData from '../models/MetaData';

const META_USER_ID = 'userId';
const META_AUTHOR_HASH = 'authorHash';

let _userId;
let _authorHash;

export function getUserId() {
  return _userId;
}

export async function loadUserId() {
  _userId = await MetaData.load(META_USER_ID);
}

export function setUserId(userId) {
  _userId = userId;
  MetaData.save(META_USER_ID, userId);
}


export function getAuthorHash() {
  return _authorHash;
}

export async function loadAuthorHash() {
  _authorHash = await MetaData.load(META_AUTHOR_HASH);
}

export function setAuthorHash(authorHash) {
  _authorHash = authorHash;
  MetaData.save(META_AUTHOR_HASH, authorHash);
}

