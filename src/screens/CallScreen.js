import React, {PropTypes, Component} from 'react';
import CallComponent from '../components/Call/index';

class CallScreen extends Component {

    static navigationOptions = {
      header: null,
    };

    render() {

      const {roomId} = this.props.navigation.state.params;

      return (
        <CallComponent roomId={roomId} />
      );
    }
}

CallScreen.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default CallScreen;