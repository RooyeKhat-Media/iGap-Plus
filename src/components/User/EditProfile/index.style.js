import {uniqueId} from 'lodash';
import {appTheme} from '../../../themes/default/index';
import {I18nManager} from 'react-native';

const id = uniqueId();

export default [
  id,
  () => [
    {
      query: {},
      style: {
        root: {
          flex: 1,
          backgroundColor: appTheme.pageBackground,
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
            textAlign: I18nManager.isRTL ? 'right' : 'left',
          },
        },
        avatar: {
          marginTop: 10,
          alignItems: 'center',
        },
        form: {
          marginBottom: 20,
          paddingBottom: 20,
        },
        text_changePhoto: {
          padding: 5,
          margin: 5,
          fontSize: 18,
          color: appTheme.primary,
          alignSelf: 'center',
        },
        text: {
          marginTop: 12,
          fontSize: 14,
          color: appTheme.secondaryText,
          paddingLeft: 15,
          paddingRight: 15,
          textAlign: 'left',
        },
        textInput: {
          fontSize: 18,
          marginTop: -10,
          marginBottom: -6,
          backgroundColor: null,
          borderWidth: 0,
          color: appTheme.titleText,
        },
        dividerLine: {
          borderTopWidth: 1,
          borderTopColor: '#c6c6c6',
        },
        textPhone: {
          fontSize: 18,
          color: appTheme.secondaryText,
          marginBottom: 10,
          paddingLeft: 15,
          paddingRight: 15,
          textAlign: 'left',
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
        loaderStyle: {
          width: 110,
          height: 110,
          borderRadius: 55,
          backgroundColor: '#619ec6',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        PickerField: {
          picker: {
            color: appTheme.primaryText,
          },
        },
      },
    },
  ],
];