import Base from '../Base';
import {normalize} from 'normalizr';
import room from '../../../schemas/room';
import {closeModal, openModal} from '../../../actions/modal';
import {View} from 'react-native';
import React from 'react';
import {APP_MODAL_ID_MAIN} from '../../../constants/app';
import {Button, ListItem} from '../../../components/BaseUI/index';
import Avatar from '../../../containers/Unit/Avatar';
import styleSheet from '../../../components/BaseUI/DialogModal/index.style';
import Api from '../../Api/index';
import {ClientJoinByInviteLink} from '../../Proto/index';
import {CLIENT_JOIN_BY_INVITE_LINK} from '../../../constants/methods/index';
import {goRoomHistory} from '../../../navigators/SecondaryNavigator';
import {collect} from './GetRoom';
import {apiInvoke} from '../../Entities/Rooms/index';
import {dispatchMessengerRoomAddList} from '../../../utils/messenger';
import {appTheme} from '../../../themes/default/index';
import {MemoizeResponsiveStyleSheet} from '../../Responsive';

/**
 * @property {ProtoClientCheckInviteLink} _request
 * @property {ProtoClientCheckInviteLinkResponse} _response
 */
export default class CheckInviteLink extends Base {
  handle() {
    const normalizedData = normalize(this._response.getRoom(), room);
    collect(normalizedData, this._response.getRoom().getId().toString());
    this.dispatch(openModal(APP_MODAL_ID_MAIN, getContent(this._response.getRoom(), this.dispatch, this._request.getInviteToken()), true));
  }
}

// todo nejati use 18n   join and cancel

function getContent(room, dispatch, token) {
  let member = 0;
  if (room.getChannelRoomExtra()) {
    member = room.getChannelRoomExtra().getParticipantsCount();
  } else if (room.getGroupRoomExtra()) {
    member = room.getGroupRoomExtra().getParticipantsCount();
  }
  const styles = MemoizeResponsiveStyleSheet(styleSheet);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          width: 320,
          height: 150,
          alignSelf: 'center',
          backgroundColor: appTheme.pageBackground,
          borderRadius: 7,
          padding: 10,
        }}>
        <ListItem
          leftElement={<Avatar roomId={room.getId().toString()} size={52}/>}
          centerElement={{
            primaryText: room.getTitle(),
            secondaryText: member + ' member',
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button upperCase={false} primary text={'Cancel'} style={styles.dialogBtn}
            onPress={() => dispatch(closeModal(APP_MODAL_ID_MAIN))}/>
          <Button upperCase={false} primary text={'Join'} style={styles.dialogBtn}
            onPress={async () => {
              dispatch(closeModal(APP_MODAL_ID_MAIN));
              if (!room.isParticipant) {
                const clientJoinByInviteLink = new ClientJoinByInviteLink();
                clientJoinByInviteLink.setInviteToken(token);
                await Api.invoke(CLIENT_JOIN_BY_INVITE_LINK, clientJoinByInviteLink);
                await apiInvoke(room.id);
                dispatchMessengerRoomAddList(room.id);
              }
              goRoomHistory(room.getId().toString());
            }}
          />
        </View>
      </View>
    </View>
  );
}