import {uniqueId} from 'lodash';
import {black200, gray800, primary} from '../../../themes/default/index';

const id = uniqueId();

export default [
  id, [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: '#fcfcfc',
        },
        scroll: {
          flex: 1,
          flexDirection: 'column',
          paddingBottom: 15,
          paddingTop: 15,
          marginLeft: 2,
          marginRight: 2,
        },
        textInputField: {
          textInput: {
            borderRadius: 0,
            borderWidth: 0,
            borderBottomWidth: 1,
          },
        },
        avatar: {
          marginTop: 10,
          alignItems: 'center',
        },
        text_changePhoto: {
          padding: 5,
          margin: 5,
          fontSize: 18,
          color: primary,
          alignSelf: 'center',
        },
        text: {
          marginTop: 12,
          fontSize: 14,
          color: gray800,
          paddingLeft: 15,
          paddingRight: 15,
        },
        textInput: {
          fontSize: 18,
          marginTop: -10,
          marginBottom: -6,
          backgroundColor: null,
          borderWidth: 0,
          color: black200,
        },
        dividerLine: {
          borderTopWidth: 1,
          borderTopColor: '#c6c6c6',
        },
        textPhone: {
          fontSize: 18,
          color: gray800,
          marginBottom: 10,
          paddingLeft: 15,
          paddingRight: 15,
        },
        pikerGender: {
          marginTop: -10,
        },
        enable: {
          borderTopColor: '#619ec6',
        },
        disable: {
          borderTopColor: '#c6c6c6',
        },
      },
    },
  ],
];