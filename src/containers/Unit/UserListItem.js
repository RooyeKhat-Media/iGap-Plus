import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from '../../selector/entities/registeredUser';
import UserListItemComponent from '../../components/Unit/UserListItem';

class UserListItem extends Component {

  _onPress = () => {
    const {user, onPress} = this.props;
    onPress(user.longId);
  };

  render() {
    const {divider, user, selected, render} = this.props;
    if (!user) {
      return null;
    }
    if (render) {
      return render(this.props);
    }
    return (<UserListItemComponent
      selected={selected}
      userId={user.id}
      divider={divider}
      displayName={user.displayName}
      phoneNumber={user.phone.toString()}
      onPress={this._onPress}
    />);
  }
}

UserListItem.propTypes = {
  userId: PropTypes.string.isRequired,
  divider: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  render: PropTypes.func,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      user: getUser(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps,
)(UserListItem);