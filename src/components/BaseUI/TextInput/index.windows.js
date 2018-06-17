import React from 'react';
import TextInput from './index.js';

export default (props) => {
  const defaultProps = {
    ...props,
    ...{
      style: {
        height: 30,
        borderWidth: 1,
        ...(props.style || {}),
      },
    },
  };

  return (<TextInput {...defaultProps} />);
};