import React, {Component} from 'react';
import MainComponent from '../components/Main';

class SearchScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <MainComponent title="Search" onMenuPressed={this.onMenuPressed}/>
    );
  }
}

export default SearchScreen;