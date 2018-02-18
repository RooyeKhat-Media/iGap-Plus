import React, {Component} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import NearbyComponent from '../../components/MainTabs/Nearby';
import {
  CHAT_GET_ROOM,
  GEO_GET_COMMENT,
  GEO_GET_NEARBY_COORDINATE,
  GEO_GET_NEARBY_DISTANCE,
  GEO_GET_REGISTER_STATUS,
  GEO_REGISTER,
  GEO_UPDATE_POSITION,
} from '../../constants/methods/index';
import {
  ChatGetRoom,
  GeoGetComment,
  GeoGetNearbyCoordinate,
  GeoGetNearbyDistance,
  GeoGetRegisterStatus,
  GeoRegister,
  GeoUpdatePosition,
} from '../../modules/Proto/index';
import Api from '../../modules/Api/index';
import GeoLocation from '../../modules/GeoLocation/index';
import putState from '../../modules/Entities/RegisteredUsers';
import {goRoomInfo} from '../../navigators/SecondaryNavigator';
import {ActivityIndicator} from '../../components/BaseUI/';
import {View} from 'react-native';
import Permission, {PERMISSION_LOCATION} from '../../modules/Permission/index';
import i18n from '../../i18n/en';

class NearbyScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapView: true,
      nearbyDistance: [],
      nearbyCoordinate: [],
      myCoordinate: {},
      isRegistered: null,
    };
    this.lastMapLocationRefresh = 0;
    this.lastListLocationRefresh = 0;
  }

  refreshMyCoordinate() {
    this.setState({
      myCoordinate: Object.assign({}, this.state.myCoordinate),
    });
  }

  toggleMode = (index) => {
    if (index >= 0) {
      const isMapView = index === 1;
      this.setState({
        mapView: isMapView,
      }, async () => {
        await this.refreshNearby(isMapView);
      });
      this.refreshMyCoordinate();
    }
  };

  invokeNearbyDistance = async (pos) => {
    const nearbyDist = new GeoGetNearbyDistance();
    nearbyDist.setLat(pos.latitude);
    nearbyDist.setLon(pos.longitude);
    const nearbyResponse = await Api.invoke(GEO_GET_NEARBY_DISTANCE, nearbyDist);
    nearbyResponse.result.forEach(x => putState(x.getUserId().toString()));
    this.setState({
      nearbyDistance: nearbyResponse.result,
    });
  };

  invokeNearbyCoordinate = async (pos) => {
    const nearbyCoord = new GeoGetNearbyCoordinate();
    nearbyCoord.setLat(pos.latitude);
    nearbyCoord.setLon(pos.longitude);
    const nearbyResponse = await Api.invoke(GEO_GET_NEARBY_COORDINATE, nearbyCoord);
    nearbyResponse.result.forEach(x => putState(x.getUserId().toString()));
    this.setState({
      nearbyCoordinate: nearbyResponse.result,
    });
  };

  getCommentForUser = async (userId) => {
    const requestComment = new GeoGetComment();
    requestComment.setUserId(userId);
    return Api.invoke(GEO_GET_COMMENT, requestComment);
  };

  mapOnMarkerClick = async (userId) => {
    const chatGetRoom = new ChatGetRoom();
    chatGetRoom.setPeerId(userId);
    const chatGetRoomResponse = await Api.invoke(CHAT_GET_ROOM, chatGetRoom);
    const roomId = chatGetRoomResponse.getRoom().getId().toString();
    goRoomInfo(roomId.toString());
  };

  findMyPosClick = () => this.refreshNearby(this.state.mapView);

  refreshNearby = async (isMapView) => {
    const {myCoordinate} = this.state;
    this.refreshMyCoordinate();
    if (isMapView) {
      if ((new Date().getTime()) - this.lastMapLocationRefresh > 30 * 1000) {
        this.lastMapLocationRefresh = new Date().getTime();
        await this.invokeNearbyCoordinate(myCoordinate);
      }
    } else {
      if ((new Date().getTime()) - this.lastListLocationRefresh > 30 * 1000) {
        this.lastListLocationRefresh = new Date().getTime();
        await this.invokeNearbyDistance(myCoordinate);
      }
    }
  };

  watchPosition = async () => {
    const getRegisterStatus = new GeoGetRegisterStatus();
    const geoResponse = await Api.invoke(GEO_GET_REGISTER_STATUS, getRegisterStatus);
    this.setState({
      isRegistered: geoResponse.getEnable(),
    });
    if (geoResponse.getEnable()) {
      await  Permission.grant(PERMISSION_LOCATION,
        this.props.intl.formatMessage(i18n.nearbyScreenLocationPermissionTitle),
        this.props.intl.formatMessage(i18n.nearbyScreenLocationPermissionMessage));

      this.watchLocId = GeoLocation.watchPosition({
        enableHighAccuracy: false,
        timeout: 3000,
        maximumAge: 30 * 1000,
      }, async (pos) => {
        this.setState({
          myCoordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
        });
        await this.refreshNearby(this.state.mapView);
      });

      this.watchLocReportMeter = GeoLocation.watchPosition({
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 1000,
        distanceFilter: 50,
      }, async (pos) => {
        const updatePosition = new GeoUpdatePosition();
        updatePosition.setLat(pos.coords.latitude);
        updatePosition.setLon(pos.coords.longitude);
        await Api.invoke(GEO_UPDATE_POSITION, updatePosition);
      });
    }
  };

  unWatchPosition = () => {
    if (this.watchLocId !== undefined) {
      GeoLocation.clearWatch(this.watchLocId);
    }
    if (this.watchLocReportMeter !== undefined) {
      GeoLocation.clearWatch(this.watchLocReportMeter);
    }
  };

  changeRegister = async () => {
    let {isRegistered} = this.state;
    const isEnabled = !isRegistered;

    const geoRegister = new GeoRegister();
    geoRegister.setEnable(isEnabled);
    await Api.invoke(GEO_REGISTER, geoRegister);

    this.setState({
      isRegistered: isEnabled,
    });

    if (isEnabled) {
      await this.watchPosition();
    } else {
      this.unWatchPosition();
    }
    await this.findMyPosClick();
  };

  registerSwitchChange = async () => {
    const {isRegistered} = this.state;
    if (isRegistered === true) {
      //are you sure to disable it
      this.dialog.open();
      return;
    }
    await this.changeRegister();
  };

  async componentDidMount() {
    this.watchPosition();
  }

  async componentWillUnmount() {
    this.unWatchPosition();
  }

  dialogControl = (dialog) => {
    this.dialog = dialog;
  };

  render() {
    const {mapView, nearbyCoordinate, nearbyDistance, myCoordinate, isRegistered} = this.state;
    if (isRegistered === null) {
      return (
        <View style={{
          justifyContent: 'center',
          flex: 1,
        }}>
          <ActivityIndicator size="large"/>
        </View>
      );
    } else {
      return (
        <NearbyComponent
          mapView={mapView}
          isRegistered={isRegistered}
          nearbyDist={nearbyDistance}
          myCoordinate={myCoordinate}
          nearbyCoords={nearbyCoordinate}
          toggleMode={this.toggleMode}
          dialogControl={this.dialogControl}
          changeRegister={this.changeRegister}
          findMyPosClick={this.findMyPosClick}
          mapOnMarkerClick={this.mapOnMarkerClick}
          getCommentForUser={this.getCommentForUser}
          registerSwitchChange={this.registerSwitchChange}
        />
      );
    }
  }
}

NearbyScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NearbyScreen);