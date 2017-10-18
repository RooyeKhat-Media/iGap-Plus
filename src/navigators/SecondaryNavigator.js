import {StackNavigator} from 'react-navigation';

import {ROOM_HISTORY_SCREEN, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';
import {navigate} from './index';
import RoomScreen from '../screens/Room/RoomHistoryScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';

export function goRoomHistory(roomId) {
  navigate(ROOM_HISTORY_SCREEN, {roomId});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [ROOM_HISTORY_SCREEN]: {screen: RoomScreen},
}, {
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;