import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {findNodeHandle, NativeModules, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconToggle} from '../../BaseUI/index';
import {appTheme} from '../../../themes/default/index';

const UIManager = NativeModules.UIManager;

class PopupMenu extends PureComponent {

  onMenuPressed = () => {
    const {onPress, actionList} = this.props;
    UIManager.showPopupMenu(
      findNodeHandle(this.menu),
      actionList,
      () => {
      },
      (result, index) => {
        if (onPress && index >= 0) {
          onPress(index);
        }
      },
    );
  };

  render() {
    const {button} = this.props;
    let element = null;
    if (typeof button === 'string') {
      element = (<IconToggle onPress={this.onMenuPressed} name="more-vert" color={appTheme.toolbarIcon}/>);
    } else {
      element = (<TouchableOpacity onPress={this.onMenuPressed} activeOpacity={0.9}>{button}</TouchableOpacity>);
    }
    return (
      <View>
        <View
          ref={(ref) => {
            this.menu = ref;
          }}
          style={{
            backgroundColor: 'transparent',
            width: StyleSheet.hairlineWidth,
            height: StyleSheet.hairlineWidth,
          }}
        />
        {element}
      </View>);
  }
}

PopupMenu.defaultProps = {
  button: 'more-vert',
};

PopupMenu.propTypes = {
  actionList: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  button: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};


export default PopupMenu;