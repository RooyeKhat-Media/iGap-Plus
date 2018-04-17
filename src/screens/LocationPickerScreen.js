import React, {Component} from 'react';
import GeoLocation from '../modules/GeoLocation/index';
import LocationPickerComponent from '../components/LocationPicker/index';
import {MAP_DEFAULT_LATITUDE, MAP_DEFAULT_LONGITUDE, MAP_LATITUDE_DELTA, MAP_LONGITUDE_DELTA} from '../constants/app';

class LocationPickerScreen extends Component {
  static navigationOptions = {
    header: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: MAP_DEFAULT_LATITUDE,
        longitude: MAP_DEFAULT_LONGITUDE,
        latitudeDelta: MAP_LATITUDE_DELTA,
        longitudeDelta: MAP_LONGITUDE_DELTA,
      },
      coordinate: {
        latitude: MAP_DEFAULT_LATITUDE,
        longitude: MAP_DEFAULT_LONGITUDE,
      },
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    const position = await GeoLocation.getCurrentPosition();
    this.setLocation(position.coords.latitude, position.coords.longitude);
  };

  onDragEnd = (e) => {
    this.setLocation(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
  };

  setLocation = (lat, lon) => {
    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: MAP_LATITUDE_DELTA,
        longitudeDelta: MAP_LONGITUDE_DELTA,
      },
      coordinate: {
        latitude: lat,
        longitude: lon,
      },
    });
  };

  sendLocation = () => {
    const {coordinate} = this.state;
    const {onSubmit} = this.props.navigation.state.params;
    onSubmit(coordinate);
    this.props.navigation.goBack();
  };

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const {region, coordinate} = this.state;
    return <LocationPickerComponent
      region={region}
      coordinate={coordinate}
      onDragEnd={this.onDragEnd}
      getLocation={this.getLocation}
      sendLocation={this.sendLocation}
      goBack={this.goBack}/>;
  }
}

export default LocationPickerScreen;