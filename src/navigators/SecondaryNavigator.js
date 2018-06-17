import {StackNavigator} from 'react-navigation';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {
  AVATAR_LIST_SCREEN,
  CALL_SCREEN,
  CAMERA_SCREEN,
  CONTACT_EDIT_SCREEN,
  LOCATION_PICKER_SCREEN,
  ROOM_EDIT_SCREEN,
  ROOM_GALLERY_SCREEN,
  ROOM_HISTORY_SCREEN,
  ROOM_INFO_SCREEN,
  ROOM_INVITE_LINK_SCREEN,
  ROOM_MEMBER_LIST_SCREEN,
  ROOM_PICKER_SCREEN,
  ROOM_REPORT_SCREEN,
  SECONDARY_CONTACT_PICKER_SCREEN,
  SECONDARY_INITIAL_SCREEN,
  SECONDARY_ROOM_CREATE_SCREEN,
  SECONDARY_ROOM_UPDATE_USERNAME_SCREEN,
  VIDEO_PLAYER,
} from '../constants/navigators';
import {navigate, resetSecondaryNavigation} from './index';
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
import CameraScreen, {cameraMode} from '../screens/General/CameraScreen';
import VideoPlayerScreen from '../screens/General/VideoPlayerScreen';
import Permission, {PERMISSION_CAMERA, PERMISSION_STORAGE} from '../modules/Permission/index';
import {Platform} from 'react-native';
import LocationPickerScreen from '../screens/LocationPickerScreen';
import RoomGalleryScreen from '../screens/Room/RoomGalleryScreen';
import Camera from 'react-native-igap-camera';
import ContactNewScreen from '../screens/Contact/ContactNewScreen';
import RoomPickerScreen from '../screens/RoomPickerScreen';
import RoomCreateScreen from '../screens/Room/RoomCreateScreen';

export function goRoomHistory(roomId, forwardedMessage, reset = true) {
  if (reset) {
    resetSecondaryNavigation(ROOM_HISTORY_SCREEN, {roomId, forwardedMessage});
  } else {
    navigate(ROOM_HISTORY_SCREEN, {roomId, forwardedMessage});
  }
}

export function goRoomInfo(roomId) {
  navigate(ROOM_INFO_SCREEN, {roomId});
}

export function goCall(userId, inComing, signalingType) {
  navigate(CALL_SCREEN, {userId, inComing, signalingType});
}

export function goRoomEdit(roomId) {
  navigate(ROOM_EDIT_SCREEN, {roomId});
}

export function goContactPicker(title, onSubmit, multiple, required = true) {
  navigate(SECONDARY_CONTACT_PICKER_SCREEN, {title, onSubmit, multiple, required});
}

export function goRoomCreate(type, selectedContact = {}, roomId = null) {
  resetSecondaryNavigation(SECONDARY_ROOM_CREATE_SCREEN, {type, selectedContact, roomId});
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

export async function goCamera(resolve, reject, CameraMode, denialMessage) {
  try {
    await  Permission.grant(PERMISSION_CAMERA, denialMessage[0], denialMessage[1]);
    if (Platform.OS === 'android') {
      await  Permission.grant(PERMISSION_STORAGE, denialMessage[2], denialMessage[3]);

      switch (CameraMode) {
        case cameraMode.CAMERA:
          const picUrl = await Camera.takePictureAsync();
          resolve(picUrl);
          break;
        case cameraMode.VIDEO:
          const videoUrl = await Camera.recordAsync();
          resolve(videoUrl);
          break;
        case cameraMode.QR:
          navigate(CAMERA_SCREEN, {resolve, reject, CameraMode});
          break;
      }
    } else {
      navigate(CAMERA_SCREEN, {resolve, reject, CameraMode});
    }

  } catch (e) {
    reject(e);
  }
}

export function goVideoPlayer(uri, fileName) {
  navigate(VIDEO_PLAYER, {uri, fileName});
}

export function goLocationPicker(onSubmit) {
  navigate(LOCATION_PICKER_SCREEN, {onSubmit});
}

export function goRoomPicker(onSubmit) {
  navigate(ROOM_PICKER_SCREEN, {onSubmit});
}

export const middleware = createReactNavigationReduxMiddleware(
  'secondary',
  state => state.navSecondary,
);

export function goRoomGallery(uri, dimensions, text, fileName) {
  navigate(ROOM_GALLERY_SCREEN, {uri, dimensions, text, fileName});
}

export function goContactEdit(contact) {
  navigate(CONTACT_EDIT_SCREEN, {contact});
}

const SecondaryNavigator = StackNavigator({
  [SECONDARY_INITIAL_SCREEN]: {screen: SecondaryInitialScreen},
  [CALL_SCREEN]: {screen: CallScreen},
  [ROOM_HISTORY_SCREEN]: {screen: RoomHistoryScreen},
  [ROOM_INFO_SCREEN]: {screen: RoomInfoScreen},
  [ROOM_EDIT_SCREEN]: {screen: RoomEditScreen},
  [SECONDARY_CONTACT_PICKER_SCREEN]: {screen: ContactPickerScreen},
  [SECONDARY_ROOM_CREATE_SCREEN]: {screen: RoomCreateScreen},
  [ROOM_MEMBER_LIST_SCREEN]: {screen: RoomMemberListScreen},
  [SECONDARY_ROOM_UPDATE_USERNAME_SCREEN]: {screen: RoomUpdateUsernameScreen},
  [ROOM_INVITE_LINK_SCREEN]: {screen: RoomInviteLinkScreen},
  [ROOM_REPORT_SCREEN]: {screen: RoomReportScreen},
  [AVATAR_LIST_SCREEN]: {screen: AvatarListScreen},
  [CAMERA_SCREEN]: {screen: CameraScreen},
  [VIDEO_PLAYER]: {screen: VideoPlayerScreen},
  [LOCATION_PICKER_SCREEN]: {screen: LocationPickerScreen},
  [ROOM_PICKER_SCREEN]: {screen: RoomPickerScreen},
  [ROOM_GALLERY_SCREEN]: {screen: RoomGalleryScreen},
  [CONTACT_EDIT_SCREEN]: {screen: ContactNewScreen},
},
{
  navigationOptions: {
    header: null,
  },
});

export default SecondaryNavigator;