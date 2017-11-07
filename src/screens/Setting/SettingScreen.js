import React, {Component} from 'react';
import SettingComponent from '../../components/Setting/index';

class SettingScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SettingComponent goBack={this.props.navigation.goBack}/>
    );
  }
}

SettingScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default SettingScreen;