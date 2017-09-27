import {StackNavigator} from 'react-navigation';

import {ROOM_HISTORY_SCREEN, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';
import {navigate} from './index';
import RoomScreen from '../screens/RoomHistoryScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';

export function goRoomHistory(id) {
  navigate(ROOM_HISTORY_SCREEN, {id});
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