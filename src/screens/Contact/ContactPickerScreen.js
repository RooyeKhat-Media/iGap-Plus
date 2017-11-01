import React, {Component} from 'react';
import {isEmpty, values} from 'lodash';
import ContactPickerComponent from '../../components/Contact/Picker';
import {connect} from 'react-redux';
import {USER_CONTACTS_GET_LIST} from '../../constants/methods/index';
import {UserContactsGetList} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import {makeGetContactList} from '../../selector/methods/user/contacts/getList';

class ContactPickerScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedList: {},
    };
  }

  async componentDidMount() {
    const userContactGetList = new UserContactsGetList();
    await Api.invoke(USER_CONTACTS_GET_LIST, userContactGetList);
  }

  onSubmitBtnPress = () => {
    const {onSubmit} = this.props.navigation.state.params;
    if (!isEmpty(this.state.selectedList)) {
      onSubmit(values(this.state.selectedList));
    }
  };

  onSelectItem = (longId) => {
    const {onSubmit, multiple} = this.props.navigation.state.params;
    const id = longId.toString();
    if (multiple) {
      this.setState((prevState) => {
        const newSelectedList = {
          ...prevState.selectedList,
        };
        if (newSelectedList[id]) {
          delete newSelectedList[id];
        } else {
          newSelectedList[id] = longId;
        }
        return {
          selectedList: newSelectedList,
        };
      });
    } else {
      onSubmit(longId);
    }
  };

  render() {
    const {contactList} = this.props;
    const {title} = this.props.navigation.state.params;
    const {selectedList} = this.state;
    return (
      <ContactPickerComponent
        goBack={this.props.navigation.goBack}
        onSubmit={this.onSubmitBtnPress}
        onSelectItem={this.onSelectItem}
        activeSubmitBtn={!isEmpty(selectedList)}
        selectedList={selectedList}
        title={title}
        contactList={contactList}/>
    );
  }
}

ContactPickerScreen.propTypes = {
  // title: PropTypes.string.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  // multiple: PropTypes.bool,
};

const mapStateToProps = () => {
  const getContactList = makeGetContactList();
  return (state, props) => {
    return {
      contactList: getContactList(state),
    };
  };
};

export default connect(mapStateToProps)(ContactPickerScreen);