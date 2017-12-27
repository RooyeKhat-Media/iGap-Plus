import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconToggle, ListItem, Modal} from '../../BaseUI/index';
import {IRANSans_Medium} from '../../../constants/fonts/index';

class PopupMenu extends Component {

  onMenuPressed = () => {
    this.modal.open(true);
  };

  render() {
    const {button, onPress, actionList} = this.props;
    let element = null;
    if (typeof button === 'string') {
      element = (<IconToggle onPress={this.onMenuPressed} name={button}/>);
    } else {
      element = (<TouchableOpacity onPress={this.onMenuPressed} activeOpacity={0.9}>{button}</TouchableOpacity>);
    }
    return (
      <View>
        {element}
        <Modal control={(ref) => {
          if (ref) {
            this.modal = ref.getWrappedInstance();
          }
        }}>
          <View style={styles.dialogWrap}>
            <View style={styles.dialog}>
              {actionList.map((action, index) =>
                (<ListItem
                  key={index}
                  centerElement={{
                    primaryText: action,
                  }}
                  style={styles.listItem}
                  onPress={() => {
                    onPress(index);
                    this.modal.close();
                  }}
                />)
              )}
            </View>
          </View>
        </Modal>
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

const styles = StyleSheet.create({
  dialogWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: 280,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  listItem: {
    primaryText: {
      ...IRANSans_Medium,
    },
  },
});