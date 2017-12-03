import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './index.styles';
import {Text, View} from 'react-native';
import {ListItem, Modal} from '../index';

class ActionSheet extends Component {

  render() {
    const {control, title, actions} = this.props;
    return (
      <Modal control={control}>
        <View style={styles.container}>
          <View style={styles.wrap}>
            <View style={styles.headerWrap}>
              <Text style={styles.header}>{title}</Text>
            </View>
            <View>
              {actions.map(function(action, index) {
                return (<ListItem
                  key={'action-' + index}
                  divider={index === action.length - 1}
                  leftElement={action.icon}
                  centerElement={{
                    primaryText: (action.title),
                  }}
                  onPress={action.onPress}
                />);
              })}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

ActionSheet.propTypes = {
  control: PropTypes.func.isRequired,
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