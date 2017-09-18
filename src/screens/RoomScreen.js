import React, {Component} from 'react';
import MainComponent from '../components/Main';

class RoomScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="Room Screen" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default RoomScreen;