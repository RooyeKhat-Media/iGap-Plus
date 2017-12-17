import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, Modal} from '../index';
import styles from './index.styles';
import PropTypes from 'prop-types';
import SelectListModal from '../SelectListModal/index';

class Picker extends React.Component {
  state = {
    selectedKey: false,
  };
  _onSelectItem = (key) => {
    this.props.onItemSelect(key);
    this.setState({selectedKey: key});
    this.modal.close();
  };

  render() {
    let {selectedKey} = this.state;
    const {placeHolder, options, defaultValue, headerTitle, searchable} = this.props;
    let {style} = this.props;
    let defaultSelected = defaultValue;
    if (!defaultSelected) {
      defaultSelected = selectedKey;
    }
    const selectedItem = options.find(function(option) {
      return option.key === defaultSelected;
    });
    const selectTitle = selectedItem ? selectedItem.value : placeHolder;
    if (!style) {
      style = {};
    }
    return (
      <View style={[styles.wrapper, style.wrapper]}>
        <TouchableOpacity onPress={() => {
          this.modal.open(true);
        }} style={[styles.touchable, style.touchable]}>
          <View style={[styles.touchableView, style.touchableView]}>
            <View style={[styles.selectBox, style.selectBox]}>
              <Text style={[styles.selectText, style.selectText]}>
                {selectTitle}
              </Text>
            </View>
            <View style={[styles.selectIcon, style.selectIcon]}>
              <Icon name="expand-more"/>
            </View>
          </View>
        </TouchableOpacity>
        <Modal control={(modal) => {
          this.modal = modal;
        }}>
          <SelectListModal
            searchable={searchable}
            headerTitle={headerTitle}
            data={options}
            onSubmit={this._onSelectItem}/>
        </Modal>
      </View>
    );
  }
}

Picker.propTypes = {
  placeHolder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
  })).isRequired,
  searchable: PropTypes.bool,
  headerTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};


export default Picker;