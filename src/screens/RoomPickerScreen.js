import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filter, map} from 'lodash';
import RoomPickerComponent from '../components/RoomPicker';
import {makeGetForwardList} from '../selector/app/app';
import {UserContactsGetList} from '../modules/Proto/index';
import {USER_CONTACTS_GET_LIST} from '../constants/methods/index';
import Api from '../modules/Api/index';

class RoomPickerScreen extends Component {
  static navigationOptions = {
    header: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
  }
  oSubmit = (selectedList) => {
    const {forwardList} = this.props;
    const {onSubmit} = this.props.navigation.state.params;
    let newList = filter(forwardList, item => selectedList[item.key]);
    newList = map(newList, item => ({
      roomId: item.roomId,
      userId: item.userId,
    }));
    onSubmit(newList);
    this.goBack();
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const {forwardList} = this.props;
    const data = map(forwardList, item => ({
      key: item.key,
      filter: item.title,
      roomId: item.roomId,
      userId: item.userId,
    }));
    return <RoomPickerComponent
      data={data}
      oSubmit={this.oSubmit}
      goBack={this.goBack}/>;
  }
}

const makeMapStateToProps = () => {
  const forwardListSelector = makeGetForwardList();
  return (state) => {
    return {
      forwardList: forwardListSelector(state),
    };
  };
};
export default connect(makeMapStateToProps)(RoomPickerScreen);