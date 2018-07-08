import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {IconToggle, ListItem, Modal} from '../../BaseUI/index';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';

class PopupMenu extends PureComponent {

  onMenuPressed = () => {
    this.modal.open(true);
  };

  modalRef = (ref) => {
    if (ref) {
      this.modal = ref.getWrappedInstance();
    }
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    const {button, onPress, actionList, type} = this.props;
    let element = null;
    if (typeof button === 'string') {
      element = (<IconToggle onPress={this.onMenuPressed} name={button} color={appTheme.toolbarIcon}/>);
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

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
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
          borderRadius: 5,
          overflow: 'hidden',
        },
      },
    },
  ],
  true,
];