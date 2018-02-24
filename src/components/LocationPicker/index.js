import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {Toolbar, ListItem, ActionButton, Avatar} from '../BaseUI';
import MapView, {Marker} from 'react-native-maps';
import styles from './index.styles';
import i18n from '../../i18n';

class LocationPickerComponent extends Component {
  render() {
    const {intl, region, coordinate, onDragEnd, sendLocation, getLocation} = this.props;
    return (
      <View style={styles.wrapper}>
        <Toolbar centerElement={<FormattedMessage {...i18n.locationPickerToolbar} />}/>
        <MapView
          style={styles.mapView}
          region={region}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          <Marker
            flat={true}
            draggable={true}
            onDragEnd={onDragEnd}
            coordinate={coordinate}
          />
        </MapView>
        <ListItem
          divider
          leftElement={<Avatar icon="location-on"/>}
          centerElement={{
            primaryText: intl.formatMessage(i18n.locationPickerSendLocation),
            secondaryText: coordinate.latitude + ', ' + coordinate.longitude,
          }}
          onPress={sendLocation}
        />
        <View style={styles.helpFlag}>
          <Text><FormattedMessage {...i18n.locationPickerHelp} /></Text>
        </View>
        <ActionButton onPress={getLocation} icon="my-location" style={styles.actionButton}/>
      </View>);
  }
}

LocationPickerComponent.propTypes = {
  intl: intlShape.isRequired,
  region: PropTypes.object.isRequired,
  coordinate: PropTypes.object.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  sendLocation: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
};

export default injectIntl(LocationPickerComponent);