import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';

class MainComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View><Text>Drawer Test</Text></View>
        </View>
      </View>
    );
  }
}

MainComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(MainComponent);