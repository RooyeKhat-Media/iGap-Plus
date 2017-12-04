import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive/index';
import {injectIntl, intlShape} from 'react-intl';

class NearbyListComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <Text>List View</Text>
      </View>
    );
  }
}

NearbyListComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NearbyListComponent);