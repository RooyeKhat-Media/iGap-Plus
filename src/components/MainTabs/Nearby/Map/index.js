import React, {Component} from 'react';
import MapMarkerComponent from './MapMarker';
import {Dimensions, View, Platform} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive/index';
import {injectIntl, intlShape} from 'react-intl';
import MapView from 'react-native-maps';
import {getUserId} from '../../../../utils/app';
import PropTypes from 'prop-types';
import {ActionButton} from '../../../../components/BaseUI';
import {MAP_LATITUDE_DELTA, MAP_LONGITUDE_DELTA} from '../../../../constants/app';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const FOUND_POS_LATITUDE_DELTA = 0.01;
const FOUND_POS_LONGITUDE_DELTA = FOUND_POS_LATITUDE_DELTA * ASPECT_RATIO;
const TEHRAN_LATITUDE = 35.68741781;
const TEHRAN_LONGITUDE = 51.39112473;

class NearbyMapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: TEHRAN_LATITUDE,
        longitude: TEHRAN_LONGITUDE,
        latitudeDelta: MAP_LATITUDE_DELTA,
        longitudeDelta: MAP_LONGITUDE_DELTA,
      },
      markers: [],
      myPos: {},
      mapCenter: {},
      preventNextPositionSet: false,
    };
  }

  setMapRegion(lat, lng) {
    this.setState({
      region: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: FOUND_POS_LATITUDE_DELTA,
        longitudeDelta: FOUND_POS_LONGITUDE_DELTA,
      },
      preventNextPositionSet: true,
    });
  }

  getBoundingBox(pLatitude, pLongitude, pDistanceInMeters) {
    const latRadian = pLatitude * Math.PI / 180;
    const degLatKm = 110.574235;
    const degLongKm = 110.572833 * Math.cos(latRadian);
    const deltaLat = pDistanceInMeters / 1000.0 / degLatKm;
    const deltaLong = pDistanceInMeters / 1000.0 / degLongKm;
    const minLat = pLatitude - deltaLat;
    const minLong = pLongitude - deltaLong;
    const maxLat = pLatitude + deltaLat;
    const maxLong = pLongitude + deltaLong;
    return {
      top: {
        latitude: maxLat,
        longitude: maxLong,
      },
      bottom: {
        latitude: minLat,
        longitude: minLong,
      },
    };
  }

  componentWillReceiveProps(prev) {
    if (!this.state.preventNextPositionSet && prev.myCoordinate.latitude) {
      this.setMapRegion(prev.myCoordinate.latitude, prev.myCoordinate.longitude);
      if (this.map && Platform.OS === 'android') {
        const po = this.getBoundingBox(prev.myCoordinate.latitude, prev.myCoordinate.longitude, 5000);
        this.map.setMapBoundaries(po.top, po.bottom);
      }
    }
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  actionButtonPress = () => {
    const {myCoordinate, findMyPosClick} = this.props;
    findMyPosClick();
    if (myCoordinate.latitude) {
      this.setMapRegion(myCoordinate.latitude, myCoordinate.longitude);
    }
  };

  render() {
    const {region} = this.state;
    const {myCoordinate, mapOnMarkerClick} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.container}>
        <MapView
          region={region}
          style={styles.mapBox}
          initialRegion={region}
          ref={map => {
            this.map = map;
          }}
        >

          {myCoordinate.latitude &&
          (<MapMarkerComponent
            mySelf={true}
            coordinate={myCoordinate}
            mapOnMarkerClick={mapOnMarkerClick}
            userId={getUserId()}
          />)}

          {this.props.nearbyList.map(nearbyResult => {
            return (
              <MapMarkerComponent
                mySelf={false}
                nearbyResult={nearbyResult}
                mapOnMarkerClick={mapOnMarkerClick}
                userId={nearbyResult.getUserId()}
                key={nearbyResult.getUserId().toString()}
                coordinate={{
                  latitude: nearbyResult.getLat(),
                  longitude: nearbyResult.getLon(),
                }}
              />);
          })}

        </MapView>
        <ActionButton
          icon="my-location"
          style={styles.actionButton}
          onPress={this.actionButtonPress}
        />
      </View>
    );
  }
}

NearbyMapComponent.propTypes = {
  intl: intlShape.isRequired,
  myCoordinate: PropTypes.object.isRequired,
  nearbyList: PropTypes.array.isRequired,
  mapOnMarkerClick: PropTypes.func.isRequired,
  onCalloutBoxMount: PropTypes.func,
};

export default injectIntl(NearbyMapComponent);