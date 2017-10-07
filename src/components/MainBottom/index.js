import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import {BottomNavigation} from '../BaseUI/index';
import i18n from '../../i18n/index';

const States = ['home', 'search', 'new', 'public', 'profile'];

class MainBottomNavigationComponent extends React.Component {
  render() {
    const {index, goRooms, goSearch, goNew, goPublic, goProfile} = this.props;
    return (
      <BottomNavigation active={States[index]}>
        <BottomNavigation.Action
          key="home"
          icon="home"
          label=" "
          onPress={goRooms}
        />
        <BottomNavigation.Action
          key="search"
          icon="search"
          label=" "
          onPress={goSearch}
        />
        <BottomNavigation.Action
          key="new"
          icon="add-box"
          label=" "
          onPress={goNew}
        />
        <BottomNavigation.Action
          key="public"
          icon="public"
          label=" "
          onPress={goPublic}
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