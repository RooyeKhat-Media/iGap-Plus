import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRoom} from '../../selector/entities/room';
import RoomReportComponent from '../../components/Room/RoomReport';
import Api from '../../modules/Api/index';
import {ClientRoomReport, Proto} from '../../modules/Proto/index';
import i18n from '../../i18n/index';
import {CLIENT_ROOM_REPORT} from '../../constants/methods/index';

const formRules = {
  description: [],
};

class RoomReportScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      reason: null,
    };
  }

  handleFormData = async (data, setError) => {
    const {room} = this.props;
    const {messageId} = this.props.navigation;
    const {reason} = this.state;
    if (reason === Proto.ClientRoomReport.Reason.OTHER && !data.description) {
      setError('description', i18n.roomReportReasonDescriptionRequired);
    } else {
      try {
        const clientRoomReport = new ClientRoomReport();
        clientRoomReport.setRoomId(room.longId);
        clientRoomReport.setMessageId(messageId);
        clientRoomReport.setReason(reason);
        clientRoomReport.setDescription(data.description);
        await Api.invoke(CLIENT_ROOM_REPORT, clientRoomReport);
      } finally {
        this.props.navigation.goBack();
      }
    }
  };

  valueChange = (reason) => {
    this.setState({
      reason,
    });
  };

  render() {
    const {reason} = this.state;
    return (
      <RoomReportComponent
        handleFormData={this.handleFormData}
        valueChange={this.valueChange}
        formRules={formRules}
        reason={reason}
        goBack={this.props.navigation.goBack}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    room: getRoom(state, props),
  };
};

export default connect(mapStateToProps)(RoomReportScreen);