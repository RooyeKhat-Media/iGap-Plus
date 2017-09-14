import React, {Component} from 'react';
import MainComponent from '../components/Main';

class RoomsScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="iGap+" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default RoomsScreen;