import React from 'react';
import i18n from '../../i18n/en';
import Api from '../../modules/Api/index';
import UserListItem from './UserListItem';
import RoomListItem from './RoomListItem';
import SelectListModal from '../../components/BaseUI/SelectListModal/index';
import {connect} from 'react-redux';
import {Modal} from '../../components/BaseUI';
import {FormattedMessage} from 'react-intl';
import {makeGetForwardList} from '../../selector/app/app';
import {UserContactsGetList} from '../../modules/Proto/index';
import {USER_CONTACTS_GET_LIST} from '../../constants/methods/index';

class ForwardListItem extends React.Component {

  onPress = () => {
    const {onPress, item} = this.props;
    onPress(item);
  };

  render() {
    const {item, selected} = this.props;
    if (item.userId) {
      return (<UserListItem
        userId={item.userId}
        selected={selected}
        onPress={this.onPress}
      />);
    } else {
      return (<RoomListItem
        roomId={item.roomId}
        disablePin={true}
        selected={selected}
        onPress={this.onPress}
      />);
    }
  }
}

class ForwardList extends React.Component {

  constructor(props) {
    super(props);
    const {control} = props;
    control({
      open: this.open,
    });
  }

  componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
  }

  controlModal = (control) => {
    this.modal = control;
  };

  open = (submit) => {
    this.modal.openSecondary();
    this.submit = submit;
  };

  close = () => {
    this.modal.closeSecondary();
  };

  oSubmit = (selectedList) => {
    const {forwardList} = this.props;
    const newList = [];
    forwardList.forEach((item) => {
      if (selectedList[item.key]) {
        newList.push({
          roomId: item.roomId,
          userId: item.userId,
        });
      }
    });
    this.submit(newList);
    this.close();
  };

  getForwardList = () => {
    const {forwardList} = this.props;
    const list = [];
    forwardList.forEach((item) => {
      list.push({
        key: item.key,
        filter: item.title,
        roomId: item.roomId,
        userId: item.userId,
      });
    });
    return list;
  };

  render() {
    return (
      <Modal control={this.controlModal}>
        <SelectListModal
          multi={true}
          searchable={true}
          renderItem={this.renderItem}
          onSubmit={this.oSubmit}
          data={this.getForwardList()}
          autoFocus={false}
          headerTitle={(<FormattedMessage {...i18n.roomHistoryForwardTo}/>)}/>
      </Modal>
    );
  }

  renderItem = (item, selected, onPress) => {
    return (<ForwardListItem item={item} selected={selected} onPress={onPress}/>);
  };
}

ForwardList.propTypes = {};

const makeMapStateToProps = () => {
  const forwardListSelector = makeGetForwardList();
  return (state) => {
    return {
      forwardList: forwardListSelector(state),
    };
  };
};

export default connect(
  makeMapStateToProps
)(ForwardList);