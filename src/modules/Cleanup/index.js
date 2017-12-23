import store from '../../configureStore';
import {logout} from '../../actions/methods/user/logout';
import {goUserRegisterScreen} from '../../navigators/AppNavigator';
import truncate from './backend';
import {setAuthorHash, setUserId, setUserToken} from '../../utils/app';

export default async function cleanup() {
  try {
    await setUserId(null);
    await setUserToken(null);
    await setAuthorHash(null);
    await truncate();
    store.dispatch(logout());
    goUserRegisterScreen();
  } catch (e) {
    console.error('cleanup error', e);
  }
}