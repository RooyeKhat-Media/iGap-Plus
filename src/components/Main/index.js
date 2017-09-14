import React from 'react';
import {Text, View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styles from './index.styles';
import {Toolbar} from '../BaseUI';

class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'today',
    };
  }

  render() {
    const {intl, onMenuPressed, title} = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="menu"
          rightElement="search"
          onLeftElementPress={onMenuPressed}
          centerElement={title}/>
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