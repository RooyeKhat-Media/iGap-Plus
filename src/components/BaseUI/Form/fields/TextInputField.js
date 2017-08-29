import React from 'react';
import {TextInput} from 'react-native';
import BaseField from './BaseField';

class TextInputField extends BaseField {
  constructor(props) {
    super(props);
    this.fieldType = 'BaseField';
  }

  getContent() {
    const {error} = this.state;
    const {defaultError} = this.props;

    let additionalProps = {};

    if (error || defaultError) {
      additionalProps = {
        ...additionalProps,
        underlineColorAndroid: 'red',
        placeholderTextColor: 'red',
      };
    }

    return (
      <TextInput {...this.props} style={this.props.style.textInput} onChangeText={this.setValue} {...additionalProps} />
    );
  }
}

TextInputField.propTypes = {
  ...BaseField.propTypes,
  // myProp: PropTypes.string.isRequired
};

export default TextInputField;