import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconToggle, ListItem, Modal} from '../../BaseUI/index';

class PopupMenu extends Component {

  onMenuPressed = () => {
    this.modal.open(true);
  };

  modalRef = (ref) => {
    if (ref) {
      this.modal = ref.getWrappedInstance();
    }
  };

  render() {
    const {button, onPress, actionList, type} = this.props;
    let element = null;
    if (typeof button === 'string') {
      element = (<IconToggle onPress={this.onMenuPressed} name={button}/>);
    } else {
      element = (<TouchableOpacity onPress={this.onMenuPressed} activeOpacity={0.9}>{button}</TouchableOpacity>);
    }
    return (
      <View>
        {element}
        <Modal ref={this.modalRef} type={type} style={styles.dialogWrap}>
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
  type: PropTypes.string,
};

export default PopupMenu;

const styles = StyleSheet.create({
  dialogWrap: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  dialog: {
    width: 280,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});