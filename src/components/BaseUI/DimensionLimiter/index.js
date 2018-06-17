import React from 'react';
import {ScrollView, View} from 'react-native';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive/index';
import PropTypes from 'prop-types';

import {ORIENTATION_LANDSCAPE, ORIENTATION_PORTRAIT} from '../../../constants/screenBreakPoints';

class DimensionLimiter extends React.Component {
  render() {
    const {styles} = this;
    return (
      <View style={[styles.wrapper, this.props.wrapperStyle]}>
        <View style={[styles.layout, this.props.layoutStyle]}>
          <ScrollView>
            {this.props.children}
          </ScrollView>
        </View>
      </View>
    );
  }

  get styles() {
    const {width, height, id} = this.props;
    return MemoizeResponsiveStyleSheet([
      id,
      () => [
        {
          query: {},
          style: {
            layout: {
              flex: 1,
            },
            wrapper: {
              flex: 1,
            },
          },
        },
        {
          query: {minWidth: width + 1, ...ORIENTATION_PORTRAIT},
          style: {
            layout: {
              flex: 0,
              width: width,
            },
            wrapper: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        },
        {
          query: {minWidth: height + 1, ...ORIENTATION_LANDSCAPE},
          style: {
            layout: {
              flex: 0,
              width: height,
            },
            wrapper: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        },
        {
          query: {minHeight: width + 1, ...ORIENTATION_LANDSCAPE},
          style: {
            layout: {
              flex: 0,
              height: width,
            },
            wrapper: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        },
        {
          query: {minHeight: height + 1, ...ORIENTATION_PORTRAIT},
          style: {
            layout: {
              flex: 0,
              height: height,
            },
            wrapper: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        },
      ],
    ]);
  }
}

DimensionLimiter.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.object,
  layoutStyle: PropTypes.object,
};

export default responsive(DimensionLimiter);