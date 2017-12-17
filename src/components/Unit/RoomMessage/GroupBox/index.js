import PropTypes from 'prop-types';
import ChatBox from '../ChatBox/index';

class GroupBox extends ChatBox {
}

GroupBox.propTypes = {
  message: PropTypes.object.isRequired,
  showText: PropTypes.bool.isRequired,
  onMessagePress: PropTypes.func.isRequired,
  onMessageLongPress: PropTypes.func.isRequired,
};

export default GroupBox;