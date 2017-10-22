import React, {Component} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goChannelCreate, goContactNew, goGroupCreate} from '../../navigators/PrimaryNavigator';


class NewScreen extends Component {

  render() {
    return (
      <NewComponent
        goContactNew={goContactNew}
        goGroupCreate={goGroupCreate}
        goChannelCreate={goChannelCreate} />
    );
  }
}

export default NewScreen;
