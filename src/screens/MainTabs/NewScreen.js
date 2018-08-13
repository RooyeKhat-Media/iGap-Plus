import React, {PureComponent} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goContactNew, goContactPicker, goRoomCreate} from '../../navigators/PrimaryNavigator';
import i18n from '../../i18n';
import {ROOM_CREATE_SCREEN_TYPE_CHANNEL, ROOM_CREATE_SCREEN_TYPE_GROUP} from '../../constants/app';
import {ClientSearchUsername, UserContactsGetList} from '../../modules/Proto/index';
import {CLIENT_SEARCH_USERNAME, USER_CONTACTS_GET_LIST} from '../../constants/methods/index';
import Api from '../../modules/Api/index';
import {makeGetContactList} from '../../selector/methods/user/contacts/getList';
import {connect} from 'react-redux';
import {getPeerRoomId} from '../../utils/messenger';
import {goRoomHistory, goRoomInfo} from '../../navigators/SecondaryNavigator';
import {getCallPermission} from '../../selector/methods/signaling/callPermissin';

class NewScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      clientSearchUserName: [],
      showIndicator: false,
      isInSearch: false,
    };
  }

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

  onUserPress = async (userId, goToRoomInfo = false) => {
    const chatId = await getPeerRoomId(userId.toString());
    if (goToRoomInfo) {
      goRoomInfo(chatId);
    } else {
      goRoomHistory(chatId);
    }
  };

  getSearchList = async (filter) => {
    try {
      const clientSearchUsername = new ClientSearchUsername();
      clientSearchUsername.setQuery(filter);
      const result = await Api.invoke(CLIENT_SEARCH_USERNAME, clientSearchUsername);
      if (filter === this.state.filter) {
        this.setState({
          clientSearchUserName: result.getResultList(),
        });
      }
    } finally {
      this.setState({
        showIndicator: false,
      });
    }
  };

  onFilter = (filter) => {
    let indicator = false;
    if (/^\w{5,}$/i.exec(filter)) {
      indicator = true;
      this.getSearchList(filter);
    }
    this.setState({
      filter: filter,
      clientSearchUserName: [],
      showIndicator: indicator,
      isInSearch: filter.length > 0,
    });
  };

  getContactList = () => {
    if (this.state.filter.length > 0) {
      const {contactList, registeredUser} = this.props;
      const filterContactList = [];
      const filterName = this.state.filter.toLowerCase();
      contactList.forEach((item) => {
        const displayName = registeredUser[item.id] ? registeredUser[item.id].displayName : '';
        if (displayName.toLowerCase().includes(filterName)) {
          filterContactList.push(item);
        }
      });
      return filterContactList;
    } else {
      return this.props.contactList;
    }
  };

  render() {
    const {callAction} = this.props;
    return (
      <NewComponent
        contactList={this.getContactList()}
        goContactNew={goContactNew}
        goGroupCreate={this.newGroupBtn}
        onUserPress={this.onUserPress}
        goChannelCreate={this.newChannelBtn}
        onFilter={this.onFilter}
        clientSearchUserName={this.state.clientSearchUserName}
        showIndicator={this.state.showIndicator}
        isInSearch={this.state.isInSearch}
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
      registeredUser: state.entities.registeredUsers,
    };
  };
};

export default connect(makeMapStateToProps)(NewScreen);