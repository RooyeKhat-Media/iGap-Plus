import {StackNavigator} from 'react-navigation';

import {
  AVATAR_LIST_SCREEN,
  CALL_SCREEN,
  CAMERA_SCREEN,
  ROOM_EDIT_SCREEN,
  ROOM_HISTORY_SCREEN,
  ROOM_INFO_SCREEN,
  ROOM_INVITE_LINK_SCREEN,
  ROOM_MEMBER_LIST_SCREEN,
  ROOM_REPORT_SCREEN,
  SECONDARY_CONTACT_PICKER_SCREEN,
  SECONDARY_INITIAL_SCREEN,
  SECONDARY_ROOM_UPDATE_USERNAME_SCREEN,
} from '../constants/navigators';
import {navigate} from './index';
import RoomHistoryScreen from '../screens/Room/RoomHistoryScreen';
import SecondaryInitialScreen from '../screens/SecondaryInitialScreen';
import RoomInfoScreen from '../screens/Room/RoomInfoScreen';
import CallScreen from '../screens/CallScreen';
import RoomEditScreen from '../screens/Room/RoomEditScreen';
import ContactPickerScreen from '../screens/Contact/ContactPickerScreen';
import RoomMemberListScreen from '../screens/Room/RoomMemberListScreen';
import RoomUpdateUsernameScreen from '../screens/Room/RoomUpdateUsernameScreen';
import RoomInviteLinkScreen from '../screens/Room/RoomInviteLinkScreen';
import RoomReportScreen from '../screens/Room/RoomReportScreen';
import AvatarListScreen from '../screens/Room/AvatarListScreen';
import CameraScreen from '../screens/General/CameraScreen';

export function goRoomHistory(roomId, forwardedMessage) {
  navigate(ROOM_HISTORY_SCREEN, {roomId, forwardedMessage});
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

export function goContactPicker(title, onSubmit, multiple, afterSubmit = null) {
  navigate(SECONDARY_CONTACT_PICKER_SCREEN, {title, onSubmit, multiple, afterSubmit});
}

export function goRoomMemberList(roomId) {
  navigate(ROOM_MEMBER_LIST_SCREEN, {roomId});
}

export function goRoomUpdateUsername(roomId) {
  navigate(SECONDARY_ROOM_UPDATE_USERNAME_SCREEN, {roomId});
}

export function goRoomInviteLink(roomId) {
  navigate(ROOM_INVITE_LINK_SCREEN, {roomId});
}

export function goRoomReport(roomId, messageId = null) {
  navigate(ROOM_REPORT_SCREEN, {roomId, messageId});
}

export function goAvatarList(roomId, userId) {
  navigate(AVATAR_LIST_SCREEN, {roomId, userId});
}

export function goCamera(resolve, reject, CameraMode) {
  navigate(CAMERA_SCREEN, {resolve, reject, CameraMode});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [CALL_SCREEN]: {screen: CallScreen},
  [ROOM_HISTORY_SCREEN]: {screen: RoomHistoryScreen},
  [ROOM_INFO_SCREEN]: {screen: RoomInfoScreen},
  [ROOM_EDIT_SCREEN]: {screen: RoomEditScreen},
  [SECONDARY_CONTACT_PICKER_SCREEN]: {screen: ContactPickerScreen},
  [ROOM_MEMBER_LIST_SCREEN]: {screen: RoomMemberListScreen},
  [SECONDARY_ROOM_UPDATE_USERNAME_SCREEN]: {screen: RoomUpdateUsernameScreen},
  [ROOM_INVITE_LINK_SCREEN]: {screen: RoomInviteLinkScreen},
  [ROOM_REPORT_SCREEN]: {screen: RoomReportScreen},
  [AVATAR_LIST_SCREEN]: {screen: AvatarListScreen},
  [CAMERA_SCREEN]: {screen: CameraScreen},
}, {
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;