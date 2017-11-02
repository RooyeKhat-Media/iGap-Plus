import React, {Component} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goContactNew, goContactPicker, goRoomCreate} from '../../navigators/PrimaryNavigator';
import i18n from '../../i18n';
import {ROOM_CREATE_SCREEN_TYPE_CHANNEL, ROOM_CREATE_SCREEN_TYPE_GROUP} from '../../constants/app';

class NewScreen extends Component {

  newGroupBtn = () => {
    goContactPicker(i18n.groupCreateSelectContactTitle, (contactList) => {
      goRoomCreate(ROOM_CREATE_SCREEN_TYPE_GROUP, contactList);
    }, true);
  };
  newChannelBtn = () => {
    goContactPicker(i18n.channelCreateSelectContactTitle, (contactList) => {
      goRoomCreate(ROOM_CREATE_SCREEN_TYPE_CHANNEL, contactList);
    }, true);
  };

  render() {
    return (
      <NewComponent
        goContactNew={goContactNew}
        goGroupCreate={this.newGroupBtn}
        goChannelCreate={this.newChannelBtn}/>
    );
  }
}

export default NewScreen;
