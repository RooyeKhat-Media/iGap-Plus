import React from 'react';
import TextInput from './index.js';
import * as _ from 'lodash';

export default (props) => {
  const defultProps = _.merge(props, {style: {height: 49}});
  return (<TextInput {...defultProps} />);
};