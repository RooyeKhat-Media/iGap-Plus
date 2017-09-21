/**
 * @flow
 */

import {combineReducers} from 'redux';
import download from './download';
import upload from './upload';

export const fileManager = combineReducers({
  download,
  upload,
});