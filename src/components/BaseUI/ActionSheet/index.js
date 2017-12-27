import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './index.styles';
import {Text, View} from 'react-native';
import {ListItem, Modal} from '../index';

class ActionSheet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actions: [],
    };
  }

  modalControl = (ref) => {
    if (ref) {
      this.modal = ref.getWrappedInstance();
    }
  };

  open = (actions = null) => {
    if (actions) {
      this.setState({
        actions,
      }, this.modal.open);
    } else {
      this.modal.open();
    }
  };

  render() {
    let {title, type} = this.props;
    let {actions} = this.state;
    if (!actions.length && this.props.actions) {
      actions = this.props.actions;
    }
    return (
      <Modal type={type} ref={this.modalControl} style={styles.container}>
        <View style={styles.wrap}>
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
                  this.modal.close();  action.onPress();
                }}
              />);
            })}
          </View>
        </View>
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