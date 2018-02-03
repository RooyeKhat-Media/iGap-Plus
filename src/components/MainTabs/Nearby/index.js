import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styleSheet from './index.styles';
import NearbyMapComponent from './Map';
import NearbyListComponent from './List';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive/index';
import {DialogModal, MCIcon, Switch, Toolbar} from '../../BaseUI';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';

class NearbyComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  renderContent() {
    const {mapView, nearbyCoords, nearbyDist, getCommentForUser, myCoordinate, mapOnMarkerClick, findMyPosClick, isRegistered, registerSwitchChange} = this.props;
    const styles = this.getStyles();
    if (isRegistered) {
      if (mapView) {
        return (
          <NearbyMapComponent
            myCoordinate={myCoordinate}
            nearbyList={nearbyCoords}
            mapOnMarkerClick={mapOnMarkerClick}
            findMyPosClick={findMyPosClick}
          />
        );
      } else {
        return (
          <NearbyListComponent
            myCoordinate={myCoordinate}
            nearbyList={nearbyDist}
            mapOnMarkerClick={mapOnMarkerClick}
            getCommentForUser={getCommentForUser}/>
        );
      }
    } else {
      return (
        <View style={styles.nearbyTurnOn}>
          <Text style={styles.nearbyMessage}>
            <FormattedMessage {...i18n.nearbyScreenRegisterNoties} />
          </Text>
          <Switch value={isRegistered} onValueChange={registerSwitchChange}/>
        </View>
      );
    }
  }

  render() {
    const {mapView, toggleMode, intl, registerSwitchChange, isRegistered, dialogControl, changeRegister} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement={
            <Text
              style={styles.titleText}>
              {intl.formatMessage(mapView ? i18n.nearbyScreenMapTitle : i18n.nearbyScreenListTitle)}
            </Text>}
          rightElement={{
            menu: {
              icon: 'more-vert',
              labels: [
                intl.formatMessage(i18n.nearbyScreenListTitle),
                intl.formatMessage(i18n.nearbyScreenMapTitle),
              ],
            },
          }}
          centerElement={
            (isRegistered ?
              <TouchableOpacity onPress={registerSwitchChange}>
                <MCIcon name="earth-off" size={28}/>
              </TouchableOpacity> : '')}
          onRightElementPress={toggleMode}
        />
        {this.renderContent()}
        <DialogModal
          control={dialogControl}
          title={<FormattedMessage {...i18n.nearbyDeactivateAreYouSure}/>}
          content={<FormattedMessage {...i18n.nearbyDeactivateMessage} />}
          actions={[{
            label: intl.formatMessage(i18n.ok),
            onPress: changeRegister,
          }, {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          }]}/>
      </View>
    );
  }
}

NearbyComponent.propTypes = {
  intl: intlShape.isRequired,
  registerSwitchChange: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  mapView: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
  nearbyCoords: PropTypes.array.isRequired,
  nearbyDist: PropTypes.array.isRequired,
  getCommentForUser: PropTypes.func.isRequired,
  mapOnMarkerClick: PropTypes.func.isRequired,
  myCoordinate: PropTypes.object.isRequired,
  findMyPosClick: PropTypes.func.isRequired,
  dialogControl: PropTypes.func.isRequired,
  changeRegister: PropTypes.func.isRequired,
};

export default injectIntl(NearbyComponent);