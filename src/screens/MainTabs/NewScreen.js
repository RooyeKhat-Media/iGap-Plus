import React, {Component} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goContactNew} from '../../navigators/PrimaryNavigator';


class NewScreen extends Component {

  render() {
    return (
      <NewComponent  goContactNew={goContactNew}/>
    );
  }
}

export default NewScreen;
