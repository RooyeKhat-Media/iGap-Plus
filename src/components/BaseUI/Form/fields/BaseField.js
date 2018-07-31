import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import styleSheet from '../index.style';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';

class BaseField extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  constructor(props) {
    super(props);
    const {defaultValue, control} = this.props;
    this.state = {
      value: defaultValue,
      error: '',
    };
    control({
      setValue: this.setValue,
      getValue: this.getValue,
      validate: this.validate,
      setError: this.setError,
      getErrorMessage: this.getErrorMessage,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setValue(nextProps.defaultValue);
    }
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
      this.setError();
      return Promise.resolve();
    }, (error) => {
      this.setError(error);
      return Promise.reject(error);
    });
  };

  setError = (errorObject) => {
    this.setState({
      error: errorObject ? this.getErrorMessage(errorObject) : '',
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
    const styles = this.getStyles();

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
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  help: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.shape({
    validate: PropTypes.func.isRequired,
    options: PropTypes.object,
  })).isRequired,
  control: PropTypes.func,
};

export default BaseField;