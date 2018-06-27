import React from 'react';
import {TextInput} from '../../index';
import BaseField from './BaseField';

class TextInputField extends BaseField {
  constructor(props) {
    super(props);
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
      <TextInput {...this.props} style={this.props.style ? this.props.style.textInput : {}}
        onChangeText={this.setValue} disableFullscreenUI={true} {...additionalProps} />
    );
  }
}

TextInputField.propTypes = {
  ...BaseField.propTypes,
  // myProp: PropTypes.string.isRequired
};

export default TextInputField;