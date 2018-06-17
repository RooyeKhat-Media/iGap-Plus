import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import MemoizeResponsiveStyleSheet from '../../../modules/Responsive/MemoizeResponsiveStyleSheet';
import {memoize, uniqueId} from 'lodash';

class PlaceHolderComponent extends PureComponent {

  getStyles = () => {
    const {width, height} = this.props;
    return getStyle(width, height);
  };

  render() {
    const styles = this.getStyles();

    return (
      <View style={styles.root}/>
    );
  }
}

PlaceHolderComponent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PlaceHolderComponent;


const getStyle = memoize((width, height) => {
  const uId = uniqueId();
  return MemoizeResponsiveStyleSheet([
    uId,
    () => [
      {
        query: {},
        style: {
          root: {
            width: width,
            height: height,
            backgroundColor: '#e7e7e7',
            borderRadius: 3,
            margin: 3,
          },
        },
      },
    ],
    true,
  ]);
}, (width, height) => {
  return 'PlaceHolder_' + width + '_' + height;
});
