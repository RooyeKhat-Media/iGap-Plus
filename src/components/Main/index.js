import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet, responsive} from '../../modules/Responsive';


class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'today',
    };
  }


  render() {
    const {isSecondaryActive, PrimaryNavigator, SecondaryNavigator} = this.props;
    const styles = this.getStyles();

    return (
      <View style={styles.container}>
        <View style={styles.primary}>
          {PrimaryNavigator}
        </View>
        {isSecondaryActive ? (<View style={styles.secondary}>{SecondaryNavigator}</View>) : null}
      </View>
    );
  }

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  }
}

MainComponent.propTypes = {
  intl: intlShape.isRequired,
};
export default injectIntl(responsive(MainComponent));