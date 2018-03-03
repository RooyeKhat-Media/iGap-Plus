import React from 'react';
import {connect} from 'react-redux';
import ConnectionStatusComponent from '../../components/Unit/ConnectionStatus';

class ConnectionStatus extends React.PureComponent {
  render() {
    const {status} = this.props;
    return (
      <ConnectionStatusComponent status={status}/>
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      status: state.api.status,
    };
  };
};

export default connect(
  makeMapStateToProps
)(ConnectionStatus);