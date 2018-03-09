import React from 'react';
import PropTypes from 'prop-types';
import {ActionButton} from '../../BaseUI';

class ScrollDown extends React.PureComponent {

  constructor(args) {
    super(args);
    this.offsetY = 0;
    this.isActive = false;
    this.state = {
      isActive: false,
    };
  }

  onScroll = (event, offsetX, offsetY) => {
    if (!this.isActive && offsetY > 300 && (this.offsetY - offsetY) > 0) {
      this.isActive = true;
      this.setState({isActive: true});
    } else if (this.isActive && (offsetY < 300 || (this.offsetY - offsetY) < 0)) {
      this.isActive = false;
      this.setState({isActive: false});
    }
    this.offsetY = offsetY;
  };

  render() {
    const {scrollToEnd} = this.props;
    const {isActive} = this.state;
    if (isActive) {
      return (<ActionButton
        onPress={scrollToEnd}
        style={{container: {bottom: 40}}}
        icon="keyboard-arrow-down" />);
    }
    return null;
  }
}

ScrollDown.propTypes = {
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  scrollToEnd: PropTypes.func.isRequired,
};

export default ScrollDown;