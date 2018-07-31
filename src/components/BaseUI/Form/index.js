import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {isObject} from 'lodash';
import {Spinner} from '../index';
import {sleep} from '../../../utils/core';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {openSnackBar} from '../../../actions/snackBar';

class Form extends Component {
  inputs = {};

  constructor(props) {
    super(props);
    const {control} = this.props;
    this.recursiveCloneChildren = this.recursiveCloneChildren.bind(this);
    this.submitCount = 0;
    control({
      submit: this.submit,
      validate: this.validate,
      setValue: this.setValue,
      loadingOn: this.loadingOn,
      loadingOff: this.loadingOff,
      setError: this.setError,
    });
  }

  setValue = (name, val) => {
    const inputs = this.inputs;
    if (inputs[name]) {
      inputs[name].setValue(val);
    }
  };

  setError = (name, error) => {
    const inputs = this.inputs;
    let errorComponent;
    if (inputs[name]) {
      inputs[name].setError(error);
      errorComponent = inputs[name].getErrorMessage(error);
    } else {
      errorComponent = (<FormattedMessage {...error} />);
    }
    this.props.showSnack(errorComponent);
  };

  submit = async () => {
    const {submitLock} = this.props;
    const output = {};
    const inputs = this.inputs;
    if (submitLock) {
      this.submitCount++;
      if (this.submitCount !== 1) {
        return Promise.reject('Fast Submit');
      }
    }
    try {
      await this.validate();
    } catch (e) {
      this.props.showSnack(<FormattedMessage {...e} />);
      throw e;
    }
    Object.keys(inputs).forEach(function(name) {
      output[name] = inputs[name].getValue();
    });
    return output;
  };

  loadingOn = () => {
    const {submitLock} = this.props;
    if (!submitLock || this.submitCount === 0) {
      this.loading.on();
    }
  };

  loadingOff = async () => {
    const {submitLock} = this.props;
    await sleep(0.5);
    if (submitLock) {
      this.submitCount--;
    }
    if (!submitLock || this.submitCount === 0) {
      this.loading.off();
    }
  };

  validate = () => {
    const inputs = this.inputs;
    let promises = [];
    Object.keys(inputs).forEach(function(key) {
      promises.push(inputs[key].validate());
    });
    return Promise.all(promises);
  };

  render() {
    const wrappedChildren = this.recursiveCloneChildren(this.props.children);
    return (
      <View {...this.props}>
        {wrappedChildren}
        <Spinner control={(loading) => {
          this.loading = loading;
        }}/>
      </View>
    );
  }


  recursiveCloneChildren(children) {
    return React.Children.map(children, child => {

      if (!isObject(child)) {
        return child;
      }

      let childProps = {...child.props};
      if (child.props.isField) {
        childProps.control = (input) => {
          this.inputs[child.props.name] = input;
        };
      }

      childProps.children = this.recursiveCloneChildren(child.props.children);
      return React.cloneElement(child, childProps);
    });
  }
}

Form.defaultProps = {
  submitLock: true,
};

Form.propTypes = {
  control: PropTypes.func.isRequired,
  submitLock: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSnack: (errorComponent) => {
      dispatch(openSnackBar(errorComponent));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);