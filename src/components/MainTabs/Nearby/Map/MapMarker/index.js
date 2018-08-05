import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import {MemoizeResponsiveStyleSheet} from '../../../../../modules/Responsive';
import Avatar from '../../../../../containers/Unit/Avatar';

class MapMarkerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key:0,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        this.setState({
          key:Date.now(),
        });
      }, 2500);
    }
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {userId, mySelf, coordinate} = this.props;
    const styles = this.getStyles();
    const transparentStyle = [
      styles.transparentBorder,
      mySelf ? styles.transparentBlueBorder : styles.transparentGreyBorder,
    ];

    return (
      <MapView.Marker
        coordinate={coordinate}
        key={ userId + this.state.key }
        onPress={this.infoPress}>
        <View style={styles.viewContainer}>
          <View style={transparentStyle}>
            <View style={styles.whiteBorder}>
              <Avatar userId={userId.toString()} size={44}/>
            </View>
            <View style={styles.triangle}/>
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