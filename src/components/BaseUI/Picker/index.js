import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList, Icon, Modal, TextInput} from '../index';
import styles from './index.styles';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import DimensionLimiter from '../DimensionLimiter';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../constants/screenBreakPoints';

const uniqueId = _.uniqueId();

class Picker extends React.Component {
  state = {
    selectedKey: false,
  };
  _onSelectItem = (key) => {
    this.props.onItemSelect(key);
    this.setState({selectedKey: key});
    this.modal.close();
  }

  render() {
    let {selectedKey} = this.state;
    const {placeHolder, options, defaultValue} = this.props;
    let defaultSelected = defaultValue;
    if (!defaultSelected) {
      defaultSelected = selectedKey;
    }

    const selectedItem = options.find(function(option) {
      return option.key === defaultSelected;
    });

    const selectTitle = selectedItem ? selectedItem.value : placeHolder;

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => {
          this.modal.open();
        }} style={styles.touchable}>
          <View style={styles.touchableView}>
            <View style={styles.selectBox}>
              <Text style={styles.selectText}>
                {selectTitle}
              </Text>
            </View>
            <View style={styles.selectIcon}>
              <Icon name="expand-more"/>
            </View>
          </View>
        </TouchableOpacity>
        <Modal control={(modal) => {
          this.modal = modal;
        }}>
          <SelectListModal options={options} onSelectItem={this._onSelectItem}/>
        </Modal>
      </View>
    );
  }
}

class SelectListModal extends React.Component {
  state = {
    searchText: '',
  }

  render() {
    const {onSelectItem} = this.props;
    const {searchText} = this.state;
    const options = this.props.options.filter(function(option) {
      return searchText == '' || option.filter.search(searchText.toLowerCase()) >= 0;
    });
    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} wrapperStyle={styles.dWrapper}
        layoutStyle={styles.dLayout}>
        <View style={styles.container}>
          <View style={styles.headerWrap}>
            <View style={styles.searchWrap}>
              <View style={styles.searchIcon}>
                <Icon name="search" size={26} color="#aaaaaa"/>
              </View>
              <TextInput style={styles.searchInput} autoFocus={true} underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState({searchText: text});
                }}/>
            </View>
          </View>
          <View style={styles.bodyWrap}>
            <FlatList
              data={options}
              renderItem={({item}) =>
                (<TouchableOpacity key={item.key} onPress={() => {
                  onSelectItem(item.key);
                }}>
                  {item.element}
                </TouchableOpacity>)}/>
          </View>
        </View>
      </DimensionLimiter>

    );
  }
}

Picker.propTypes = {
  placeHolder: PropTypes.element.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
  })).isRequired,
};


export default Picker;