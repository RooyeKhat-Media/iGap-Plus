import {connect} from 'react-redux';
import RoomActions from '../../components/Unit/RoomActions/index';
import {getActionList} from '../../selector/methods/rooms/index';

const mapStateToProps = (state, props) => {
  return {
    actionList: getActionList(state, props),
  };
};

export default connect(
  mapStateToProps
)(RoomActions);
