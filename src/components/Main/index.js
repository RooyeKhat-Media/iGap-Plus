import React from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import {MemoizeResponsiveStyleSheet, responsive} from '../../modules/Responsive';
import {APP_MODAL_ID_PRIMARY, APP_MODAL_ID_SECONDARY} from '../../constants/app';
import {AppModal} from '../../components/BaseUI';


class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'today',
    };
  }


  render() {
    const {onSecondaryLayout, isSecondaryActive, PrimaryNavigator, SecondaryNavigator} = this.props;
    const styles = this.getStyles();
    return (
      <View style={styles.container}>
        <View style={styles.primary}>
          {PrimaryNavigator}
          <AppModal id={APP_MODAL_ID_PRIMARY}/>
        </View>
        {isSecondaryActive ?
          (<View style={styles.secondary} onLayout={onSecondaryLayout}>
            {SecondaryNavigator}
            <AppModal id={APP_MODAL_ID_SECONDARY}/>
          </View>) : null}
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