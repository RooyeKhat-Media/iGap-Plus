import React from 'react';
import {connect} from 'react-redux';
import ConnectionStatusComponent from '../../components/Unit/ConnectionStatus';
import PropTypes from 'prop-types';

class ConnectionStatus extends React.PureComponent {
  render() {
    const {status, showAuthenticating} = this.props;
    return (
      <ConnectionStatusComponent showAuthenticating={showAuthenticating} status={status}/>
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

ConnectionStatus.defaultProps = {
  showAuthenticating: true,
};

ConnectionStatus.propTypes = {
  showAuthenticating: PropTypes.bool,
};

export default connect(
  makeMapStateToProps
)(ConnectionStatus);