import {StackNavigator} from 'react-navigation';

import {
  CALL_SCREEN,
  ROOM_EDIT_SCREEN,
  ROOM_HISTORY_SCREEN,
  ROOM_INFO_SCREEN,
  SECONDARY_INITIAL_SCREEN,
} from '../constants/navigators';
import {navigate} from './index';
import RoomHistoryScreen from '../screens/Room/RoomHistoryScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';
import RoomInfoScreen from '../screens/Room/RoomInfoScreen';
import CallScreen from '../screens/CallScreen';
import RoomEditScreen from '../screens/Room/RoomEditScreen';

export function goRoomHistory(roomId) {
  navigate(ROOM_HISTORY_SCREEN, {roomId});
}

export function goRoomInfo(roomId) {
  navigate(ROOM_INFO_SCREEN, {roomId});
}

export function goCall(roomId) {
  navigate(CALL_SCREEN, {roomId});
}

export function goRoomEdit(roomId) {
  navigate(ROOM_EDIT_SCREEN, {roomId});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [CALL_SCREEN]: {screen: CallScreen},
  [ROOM_HISTORY_SCREEN]: {screen: RoomHistoryScreen},
  [ROOM_INFO_SCREEN]: {screen: RoomInfoScreen},
  [ROOM_EDIT_SCREEN]: {screen: RoomEditScreen},
}, {
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;