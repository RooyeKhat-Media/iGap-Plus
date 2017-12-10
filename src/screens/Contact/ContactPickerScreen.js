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

  onSubmit = async (data) => {
    const {onSubmit, afterSubmit} = this.props.navigation.state.params;
    this.loader.on();
    try {
      await onSubmit(data);
    } finally {
      this.loader.off();
      if (afterSubmit) {
        afterSubmit();
      }
    }
  }

  onSubmitBtnPress = () => {
    const {required} = this.props.navigation.state.params;
    if (!required || !isEmpty(this.state.selectedList)) {
      this.onSubmit(values(this.state.selectedList));
    }
  };

  onSelectItem = (longId) => {
    const {multiple} = this.props.navigation.state.params;
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
      this.onSubmit(longId);
    }
  };

  loaderControl = (loader) => {
    this.loader = loader;
  }

  render() {
    const {contactList} = this.props;
    const {title, required} = this.props.navigation.state.params;
    const {selectedList} = this.state;
    return (
      <ContactPickerComponent
        goBack={this.props.navigation.goBack}
        loaderControl={this.loaderControl}
        onSubmit={this.onSubmitBtnPress}
        onSelectItem={this.onSelectItem}
        activeSubmitBtn={!required || !isEmpty(selectedList)}
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