import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {merge} from 'lodash';
import {getUserTitle} from '../../selector/entities/registeredUser';
import {getRoomTitle} from '../../selector/entities/room';

class Title extends React.PureComponent {

  render() {
    const {author, onPress} = this.props;
    const style = this.style;
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={style}>{author ? author.title : ''}</Text>
      </TouchableOpacity>
    );
  }

  get style() {
    const {author, style} = this.props;
    return merge(style, {
      color: author ? author.color : '#FFF',
    });
  }
}

Title.propTypes = {
  roomId: PropTypes.string,
  userId: PropTypes.string,
  //Connect
  author: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      author: props.roomId ? getRoomTitle(state, props) : getUserTitle(state, props),
    };
  };
};

export default connect(
  makeMapStateToProps
)(Title);

