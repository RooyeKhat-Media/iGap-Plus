import PropTypes from 'prop-types';
import ChatBox from '../ChatBox/index';
import {BOX_TYPE_GROUP} from '../../../../modules/DimensionCalculator';

class GroupBox extends ChatBox {
  getChildContext() {
    return {boxType: BOX_TYPE_GROUP};
  }
}

GroupBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

GroupBox.childContextTypes = {
  boxType: PropTypes.number,
};

export default GroupBox;