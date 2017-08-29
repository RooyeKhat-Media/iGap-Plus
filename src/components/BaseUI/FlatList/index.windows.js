import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';

class FlatList extends Component {
  render() {
    const {data, renderItem} = this.props;
    return (
      <ScrollView {...this.props}>
        {data.map((option) => ( renderItem({item: option}) ))}
      </ScrollView>
    );
  }
}

FlatList.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default FlatList;