import React from 'react';
import PropTypes from 'prop-types';
import {BasePicker} from '../../index';
import BaseField from './BaseField';

class PickerField extends BaseField {
  constructor(props) {
    super(props);
  }

  getContent() {
    const {mode, options} = this.props;
    const selectedValue = this.getValue();
    return (
      <BasePicker
        mode={mode || 'dropdown'}
        onValueChange={this.setValue}
        selectedValue={selectedValue}
        {...this.props}
        style={this.props.style ? this.props.style.picker : {}}>
        {options.map((item) => (
          <BasePicker.Item key={this.props.name + '-' + item.value} label={item.label} value={item.value}/>))}
      </BasePicker>
    );
  }
}

PickerField.propTypes = {
  ...BaseField.propTypes,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]).isRequired,
    })
  ).isRequired,
  mode: PropTypes.string,
};

export default PickerField;