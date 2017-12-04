import React, {Component} from 'react';
import NearbyComponent from '../../components/MainTabs/Nearby';

class NearbyScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapView: false,
    };
  }

  toggleMode = (action) => {
    if (action.index >= 0) {
      this.setState({
        mapView: action.index === 1,
      });
    }
  };

  render() {
    const {mapView} = this.state;
    return (<NearbyComponent mapView={mapView}
      toggleMode={this.toggleMode}/>);
  }
}

export default NearbyScreen;