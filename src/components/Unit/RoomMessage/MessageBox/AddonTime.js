import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FormattedRelative} from 'react-intl';
import PropTypes from 'prop-types';

const AddonTime = ({createTime}) => (
  <Text style={styles.timeText}>
    <FormattedRelative updateInterval={0} value={createTime * 1000}/>
  </Text>
);
AddonTime.propTypes = {
  createTime: PropTypes.number.isRequired,
};

export default AddonTime;

const styles = StyleSheet.create({
  container: {},
  imageWrap: {
    width: 200,
    height: 180,
  },
  timeText: {
    fontSize: 14,
  },
});