import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styleSheet from './index.styles';
import {Animated, Easing, Text, View} from 'react-native';
import {ListItem, Modal} from '../index';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';

class ActionSheet extends PureComponent {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    this.state = {
      actions: [],
    };
    this.animatedValue = new Animated.Value(0);
  }

  openWithAnimate = () => {
    this.modal.open();
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 150,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start();
  };

  modalControl = (ref) => {
    if (ref) {
      this.modal = ref.getWrappedInstance();
    }
  };

  open = (actions = null) => {
    if (actions) {
      this.setState({
        actions,
      }, this.openWithAnimate);
    } else {
      this.openWithAnimate();
    }
  };

  render() {
    let {title, type} = this.props;
    const styles = this.getStyles();
    let {actions} = this.state;
    if (!actions.length && this.props.actions) {
      actions = this.props.actions;
    }

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [250, 0],
    });

    return (
      <Modal type={type} ref={this.modalControl} style={styles.container}>
        <Animated.View style={[{transform: [{translateY: movingMargin}]}, styles.wrap]}>
          <View style={styles.headerWrap}>
            <Text style={styles.header}>{title}</Text>
          </View>
          <View>
            {actions.map((action, index) => {
              return (<ListItem
                key={'action-' + index}
                divider={index === action.length - 1}
                leftElement={action.icon}
                centerElement={{
                  primaryText: (action.title),
                }}
                style={styles.listItem} onPress={() => {
                  this.modal.close();
                  action.onPress();
                }}
              />);
            })}
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

ActionSheet.propTypes = {
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    onPress: PropTypes.func,
  })),
};
export default ActionSheet;