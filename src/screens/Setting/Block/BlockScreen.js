import React, {Component} from 'react';
import BlockComponent from '../../../components/Setting/Block/index';
import Api from '../../../modules/Api/index';
import {connect} from 'react-redux';
import {
  USER_CONTACTS_BLOCK,
  USER_CONTACTS_GET_BLOCKED_LIST,
  USER_CONTACTS_UNBLOCK,
} from '../../../constants/methods/index';
import {UserContactsBlock, UserContactsGetBlockedList, UserContactsUnblock} from '../../../modules/Proto/index';
import {getBlockList} from '../../../selector/methods/user/contacts/block';
import {goContactPicker} from '../../../navigators/PrimaryNavigator';
import i18n from '../../../i18n/index';

class BlockScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  blockAction = () => {
    goContactPicker(i18n.contactListTitleToolbar, (selectedBlockList) => {
      const promiseList = [];
      selectedBlockList.forEach((userId) => {
        const userContactsBlock = new UserContactsBlock();
        userContactsBlock.setUserId(userId.toString());
        promiseList.push(Api.invoke(USER_CONTACTS_BLOCK, userContactsBlock));
      });
      return Promise.all(promiseList);
    }, true);
  };

  unBlockAction = (userId) => {
    const userContactsUnblock = new UserContactsUnblock();
    userContactsUnblock.setUserId(userId);
    Api.invoke(USER_CONTACTS_UNBLOCK, userContactsUnblock);
  };

  componentDidMount() {
    const userContactsGetBlockedList = new UserContactsGetBlockedList();
    Api.invoke(USER_CONTACTS_GET_BLOCKED_LIST, userContactsGetBlockedList);
  }

  render() {
    const {blockList} = this.props;
    return (
      <BlockComponent
        goBack={this.props.navigation.goBack}
        blockAction={this.blockAction}
        unBlockAction={this.unBlockAction}
        blockList={blockList}
      />
    );
  }
}

BlockScreen.propTypes = {};

const mapStateToProps = state => {
  return {
    blockList: getBlockList(state),
  };
};

export default connect(mapStateToProps)(BlockScreen);