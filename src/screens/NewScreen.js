import React, {Component} from 'react';
import MainComponent from '../components/Main';

class NewScreen extends Component {
  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="NewScreen" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default NewScreen;
