import React, {PureComponent} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goContactNew, goContactPicker, goRoomCreate} from '../../navigators/PrimaryNavigator';
import i18n from '../../i18n';
import {ROOM_CREATE_SCREEN_TYPE_CHANNEL, ROOM_CREATE_SCREEN_TYPE_GROUP} from '../../constants/app';
import {UserContactsGetList} from '../../modules/Proto/index';
import {USER_CONTACTS_GET_LIST} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {makeGetContactList} from '../../selector/methods/user/contacts/getList';
import {connect} from 'react-redux';
import {getPeerRoomId} from '../../utils/messenger';
import {goRoomHistory} from '../../navigators/SecondaryNavigator';
import {getCallPermission} from '../../selector/methods/signaling/callPermissin';

class NewScreen extends PureComponent {

  async componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    await Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
  }

  newGroupBtn = () => {
    goContactPicker(i18n.groupCreateSelectContactTitle, (contactList) => {
      goRoomCreate(ROOM_CREATE_SCREEN_TYPE_GROUP, contactList);
    }, true, false);
  };
  newChannelBtn = () => {
    goContactPicker(i18n.channelCreateSelectContactTitle, (contactList) => {
      goRoomCreate(ROOM_CREATE_SCREEN_TYPE_CHANNEL, contactList);
    }, true, false);
  };

  onUserPress = async (userId) => {
    const chatId = await getPeerRoomId(userId.toString());
    goRoomHistory(chatId);
  };

  render() {
    const {contactList, callAction} = this.props;
    return (
      <NewComponent
        contactList={contactList}
        goContactNew={goContactNew}
        goGroupCreate={this.newGroupBtn}
        onUserPress={this.onUserPress}
        goChannelCreate={this.newChannelBtn}
        callAction={callAction}/>
    );
  }
}

const makeMapStateToProps = () => {
  const getContactList = makeGetContactList();
  return (state, props) => {
    return {
      contactList: getContactList(state),
      callAction: getCallPermission(state),
    };
  };
};

export default connect(makeMapStateToProps)(NewScreen);