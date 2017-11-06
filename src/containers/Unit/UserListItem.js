import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUser} from '../../selector/entities/registeredUser';
import UserListItemComponent from '../../components/Unit/UserListItem';

class UserListItem extends Component {

  render() {
    const {divider, user, selected, onPress, render} = this.props;
    if (!user) {
      return null;
    }
    if (render) {
      return render(user);
    }
    return (<UserListItemComponent
      selected={selected}
      userId={user.id}
      divider={divider}
      displayName={user.displayName}
      phoneNumber={user.phone.toString()}
      onPress={() => {
        onPress(user.longId);
      }}
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