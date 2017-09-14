import React, {Component} from 'react';
import MainComponent from '../components/Main';

class ProfileScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="Profile" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default ProfileScreen;