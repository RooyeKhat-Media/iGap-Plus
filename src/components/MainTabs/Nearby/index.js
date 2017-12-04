import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styleSheet from './index.styles';
import NearbyMapComponent from './Map';
import NearbyListComponent from './List';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive/index';
import {Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {injectIntl, intlShape} from 'react-intl';

class NearbyComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  renderContent() {
    const {mapView} = this.props;
    if (mapView) {
      return (<NearbyMapComponent/>);
    } else {
      return (<NearbyListComponent/>);
    }
  }

  render() {
    const {mapView, toggleMode, intl} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement={
            <Text
              style={styles.titleText}>{intl.formatMessage(mapView ? i18n.nearbyScreenMapTitle : i18n.nearbyScreenListTitle)}</Text>}
          rightElement={{
            menu: {
              icon: 'more-vert',
              labels: [
                intl.formatMessage(i18n.nearbyScreenListTitle),
                intl.formatMessage(i18n.nearbyScreenMapTitle),
              ],
            },
          }}
          onRightElementPress={toggleMode}
        />
        {this.renderContent()}
      </View>
    );
  }
}

NearbyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NearbyComponent);