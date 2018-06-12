import React, {Component} from 'react';
import {Checkbox as BaseCheckbox} from 'react-native-material-ui';

export default class Checkbox extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    this.setState({checked: this.props.checked});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({checked: nextProps.checked});
    }
  }

  onCheck = (checked, value) => {
    const {onCheck} = this.props;
    this.setState({checked});
    onCheck(checked, value);
  };

  render() {
    return <BaseCheckbox {...this.props} checked={this.state.checked} onCheck={this.onCheck}/>;
  }
}