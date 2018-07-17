import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import {FormattedRelative} from 'react-intl';
import PropTypes from 'prop-types';
import {uniqueId} from 'lodash';
import {appTheme} from '../../../../themes/default/index';
import MemoizeResponsiveStyleSheet from '../../../../modules/Responsive/MemoizeResponsiveStyleSheet';

class AddonTime extends PureComponent {
  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const {createTime} = this.props;
    const styles = this.getStyles();
    return (
      <Text style={styles.timeText}>
        <FormattedRelative updateInterval={0} value={createTime * 1000}/>
      </Text>
    );
  }
}

AddonTime.propTypes = {
  createTime: PropTypes.number.isRequired,
};
export default AddonTime;

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: {},
      style: {
        timeText: {
          fontSize: 13,
          color: appTheme.primaryText,
        },
      },
    },
  ],
  true,
];