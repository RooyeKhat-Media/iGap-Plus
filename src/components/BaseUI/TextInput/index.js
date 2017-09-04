import React from 'react';
import {TextInput} from 'react-native';
import styles from './index.style';

export default (props) => {
  const defaultProps = {
    ...props,
    ...{
      underlineColorAndroid: 'transparent',
      placeholderTextColor: '#adadad',
      style: {
        ...styles.textInput,
        ...(props.style || {}),
      },
    },
  };

  return (<TextInput {...defaultProps}/>);
};