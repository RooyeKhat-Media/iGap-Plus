import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import {BottomNavigation} from '../BaseUI/index';

const States = ['home', 'location', 'new', 'call', 'profile'];

class MainBottomNavigationComponent extends React.Component {
  render() {
    const {index, goRooms, goNearby, goNew, goCallList, goProfile} = this.props;
    return (
      <BottomNavigation active={States[index]}>
        <BottomNavigation.Action
          key="home"
          icon="home"
          label=" "
          onPress={goRooms}
        />
        <BottomNavigation.Action
          key="location"
          icon="location-on"
          label=" "
          onPress={goNearby}
        />
        <BottomNavigation.Action
          key="new"
          icon="add-box"
          label=" "
          onPress={goNew}
        />
        <BottomNavigation.Action
          key="call"
          icon="call"
          label=" "
          onPress={goCallList}
        />
        <BottomNavigation.Action
          key="profile"
          icon="person"
          label=" "
          onPress={goProfile}
        />
      </BottomNavigation>
    );
  }
}

MainBottomNavigationComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(MainBottomNavigationComponent);