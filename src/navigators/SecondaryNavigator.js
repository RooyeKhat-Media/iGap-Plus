import {StackNavigator} from 'react-navigation';

import {ROOM_HISTORY_SCREEN, ROOM_INFO_SCREEN, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';
import {navigate} from './index';
import RoomHistoryScreen from '../screens/Room/RoomHistoryScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';
import RoomInfoScreen from '../screens/Room/RoomInfoScreen';

export function goRoomHistory(roomId) {
  navigate(ROOM_HISTORY_SCREEN, {roomId});
}

export function goRoomInfo(roomId) {
  navigate(ROOM_INFO_SCREEN, {roomId});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [ROOM_HISTORY_SCREEN]: {screen: RoomHistoryScreen},
  [ROOM_INFO_SCREEN]: {screen: RoomInfoScreen},
}, {
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;