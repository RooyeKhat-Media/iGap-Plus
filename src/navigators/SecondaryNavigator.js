import {StackNavigator} from 'react-navigation';

import {ROOM_SCREEN, SECONDARY_INITIAL_SCREEN} from '../constants/navigators';
import {navigate} from './index';
import RoomScreen from '../screens/RoomScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';

export function goRoom(id) {
  navigate(ROOM_SCREEN, {id});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [ROOM_SCREEN]: {screen: RoomScreen},
}, {
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;