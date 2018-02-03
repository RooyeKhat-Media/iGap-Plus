import React, {Component} from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import {MemoizeResponsiveStyleSheet} from '../../../../../modules/Responsive';
import Avatar from '../../../../../containers/Unit/Avatar';

class MapMarkerComponent extends Component {

  constructor(props) {
    super(props);
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {userId, mySelf, coordinate} = this.props;
    const styles = this.getStyles();
    const transparentStyle = (mySelf === true) ? styles.transparentBlueBorder : styles.transparentGreyBorder;

    return (
      <MapView.Marker
        coordinate={coordinate}
        onPress={this.infoPress}>
        <View style={styles.viewContainer}>
          <View style={styles.blueBorder}>
            <View style={transparentStyle}>
              <View style={styles.whiteBorder}>
                <Avatar userId={userId.toString()} size={52}/>
              </View>
              <View style={styles.triangle}/>
            </View>
          </View>
        </View>
      </MapView.Marker>
    );
  }

  infoPress = async () => {
    const {userId, mapOnMarkerClick} = this.props;
    return mapOnMarkerClick(userId);
  }
}

MapMarkerComponent.propTypes = {
  intl: intlShape.isRequired,
  userId: PropTypes.object.isRequired,
  mySelf: PropTypes.bool.isRequired,
  coordinate: PropTypes.object.isRequired,
  mapOnMarkerClick: PropTypes.func.isRequired,
};

export default injectIntl(MapMarkerComponent);