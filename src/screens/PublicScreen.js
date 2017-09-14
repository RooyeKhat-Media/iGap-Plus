import React, {Component} from 'react';
import MainComponent from '../components/Main';

class PublicScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="PublicScreen" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default PublicScreen;