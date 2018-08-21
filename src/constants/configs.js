/**
 * @flow
 */
import {Platform} from 'react-native';

export const APP_NAME = 'iGap+';
export const APP_ID = 10;
export const APP_BUILD_VERSION = 16;
export const APP_VERSION = '1.2.2';

export const DATABASE_SCHEMA_VERSION = 1;

export const WEBSOCKET_ENDPOINT = 'wss://secure.igap.net/hybrid/';
export const WEBSOCKET_RECONNECT_INTERVAL_SEC = 3;

export const NON_WEBSOCKET_UPLOAD_ENDPOINT = 'https://secure.igap.net/api/hybrid/';
export const GOOGLE_API_KEY = Platform.select({
  ios: 'AIzaSyDRBqV7h9IOr-k1wk9r5GAvJ5l4lBWaNn0',
  default: 'AIzaSyAzszDa0se_3fW1gq2-MZIwLVzhi1m2QNg',
});

export const API_CONCURRENCY = 40;
export const API_AGGREGATE_DELAY_MS = 2000;

export const FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE = 100 * 1024;
export const FILE_MANAGER_DOWNLOAD_MIN_CHUNK_SIZE = 20 * 1024;
export const FILE_MANAGER_MAX_CONCURRENT_DOWNLOAD = 4;

export const FILE_MANAGER_MAX_CONCURRENT_UPLOAD = 1;

export const FILE_MANAGER_MAX_CONCURRENT_INFO = 2;

export const CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT = 20;
export const CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT = 20;
export const CLIENT_GET_ROOM_HISTORY_PAGINATION_DB_LIMIT = 100;
export const CLIENT_GET_MEMBER_LIST_PAGINATION_LIMIT = 20;
export const SIGNALING_GET_LOG_LIST_PAGINATION_LIMIT = 50;

export const CLIENT_INFO_PAGE_TOS = 'TOS';

export const ACTION_TYPING_TIME = 10000;