import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';

class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'today',
    };
  }

  render() {
    return (
      <View style={{backgroundColor: 'blue'}}><Text>Drawer Test</Text></View>
    );
  }
}

MainComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(MainComponent);