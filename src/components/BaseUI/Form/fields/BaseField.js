import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import styles from '../index.style';

class BaseField extends Component {
  constructor(props) {
    super(props);
    const {defaultValue, control} = this.props;
    this.state = {
      value: defaultValue,
      error: '',
    };
    this.setValue = this.setValue.bind(this);
    control({
      setValue: this.setValue,
      getValue: this.getValue,
      validate: this.validate,
    });
  }

  setValue = (value) => {
    this.setState({value: value}, () => {
      this.validate().catch(() => {
      });
    });
  };
  getValue = () => {
    return this.state.value;
  };
  validate = () => {
    const {rules} = this.props;
    const {value} = this.state;

    let promise = Promise.resolve();
    rules.forEach(function(rule) {
      promise = promise.then(function() {
        return rule.validate(value, rule.options);
      });
    });

    return promise.then(() => {
      this.setState({error: ''});
      return Promise.resolve();
    }, (error) => {
      this.setState({error: this.getErrorMessage(error)});
      return Promise.reject(error);
    });
  };

  getErrorMessage = (error) => {
    const {label} = this.props;
    if (!error.values) {
      error.values = {};
    }
    error.values.field = label;
    return (<FormattedMessage {...error} />);
  };

  getContent() {
    return null;
  }

  render() {
    const {help, defaultError} = this.props;
    const {error} = this.state;

    let {style} = this.props;

    if (!this.props.style) {
      style = styles.inputStyle;
    }

    return (
      <View style={[style.container]}>
        {this.getContent()}
        {(defaultError || error) ? (
          <Text style={[styles.errorMessage, style.error]}>{defaultError || error}</Text>) : null}
        {help ? (<Text style={[styles.helpMessage, style.help]}>{help}</Text>) : null}
      </View>
    );
  }
}

BaseField.propTypes = {
  isField: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultError: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.string.isRequired,
  help: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(PropTypes.shape({
    validate: PropTypes.func.isRequired,
    options: PropTypes.object,
  })).isRequired,
  control: PropTypes.func,
};

export default BaseField;