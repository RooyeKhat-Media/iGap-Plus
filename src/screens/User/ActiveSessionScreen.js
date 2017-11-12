import React, {Component} from 'react';
import ActiveSessionComponent from '../../components/User/ActiveSession/index';
import {connect} from 'react-redux';
import Api from '../../modules/Api/index';
import {USER_SESSION_GET_ACTIVE_LIST, USER_SESSION_TERMINATE} from '../../constants/methods/index';
import {UserSessionGetActiveList, UserSessionTerminate} from '../../modules/Proto/index';

class ActiveSesionScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  terminateSession = (sessionId) => {
    const userSessionTerminate = new UserSessionTerminate();
    userSessionTerminate.setSessionId(sessionId);
    Api.invoke(USER_SESSION_TERMINATE, userSessionTerminate);
  };

  render() {
    const {current, activeList} = this.props;

    return (
      <ActiveSessionComponent
        goBack={this.props.navigation.goBack}
        activeSessionList={activeList}
        currentSession={current}
        terminateSession={this.terminateSession}/>
    );
  }

  async componentDidMount() {
    const userSessionGetActiveList = new UserSessionGetActiveList();
    await Api.invoke(USER_SESSION_GET_ACTIVE_LIST, userSessionGetActiveList);
  }
}

const mapStateToProps = state => {
  const {current, activeList} = state.methods.userSession;
  return {current, activeList};
};
export default connect(mapStateToProps, )(ActiveSesionScreen);


