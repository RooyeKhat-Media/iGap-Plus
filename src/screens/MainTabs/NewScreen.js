import React, {Component} from 'react';
import NewComponent from '../../components/MainTabs/New/index';
import {goChannelCreate, goContactNew, goContactPicker, goGroupCreate} from '../../navigators/PrimaryNavigator';
import i18n from '../../i18n';

class NewScreen extends Component {

  newGroupBtn = () => {
    goContactPicker(i18n.groupCreateSelectContactTitle, goGroupCreate, true);
  }

  render() {
    return (
      <NewComponent
        goContactNew={goContactNew}
        goGroupCreate={this.newGroupBtn}
        goChannelCreate={goChannelCreate}/>
    );
  }
}

export default NewScreen;
