import {uniqueId} from 'lodash';
import {ORIENTATION_LANDSCAPE} from '../../../constants/screenBreakPoints';
import {IRANSans_Medium, Neuropolitical} from '../../../constants/fonts';
import {appTheme} from '../../../themes/default/index';
import {I18nManager} from 'react-native';

const id = uniqueId();
const direction = I18nManager.isRTL ? 'row-reverse' : 'row';

export default [
  id,
  () => [
    {
      query: {},
      style: {
        wrapper: {
          backgroundColor: appTheme.wrapperBackground,
        },
        layout: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: appTheme.pageBackground,
        },
        changeLanguageWrap: {
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 10,
        },
        changeLanguagePicker: {
          wrapper: {
            height: 30,
            flex: 1,
          },
          touchable: {
            backgroundColor: appTheme.pageBackground,
            padding: 0,
            borderWidth: 0,
            justifyContent: 'center',
          },
          selectBox: {
            flex: null,
            width: 100,
          },
        },
        languagePicker: {
          fontSize: 12,
        },
        headerWrapper: {
          padding: 20,
        },
        svgWrap: {
          height: 120, alignItems: 'center', marginBottom: 15,
        },
        svg: {
          width: 120, height: 120,
        },
        logoWrap: {
          height: 40,
          flexDirection: direction,
          justifyContent: 'center',
        },
        headerTitle: {
          ...Neuropolitical,
          fontSize: 30,
          color: appTheme.titleText,
        },
        topWrap: {},
        formWrap: {
          padding: 15,
        },
        formGroup: {
          marginBottom: 15,
        },
        phoneNumberRow: {
          flexDirection: direction,
          alignItems: 'flex-start',
        },
        countryCodeInput: {
          paddingRight: 5,
          paddingLeft: 5,
          marginRight: 5,
          width: 65,
          textAlign: 'center',
        },
        phoneNumberInput: {
          container: {
            flex: 1,
          },
          help: {
            fontSize: 10,
            color: appTheme.primaryText,
          },
          error: {
            fontSize: 11,
            height: 20,
          },
        },
        picker: {},
        label: {
          ...IRANSans_Medium,
          fontSize: 13,
        },
        help: {
          fontSize: 11,
          color: appTheme.primaryText,
        },
        countryListItem: {
          container: {backgroundColor: 'transparent', paddingLeft: 0},
        },
        btnSubmit: {
          container: {
            height: 43,
            elevation: 0,
          },
          text: {
            ...IRANSans_Medium,
            fontSize: 13,
          },
        },
        privacyBtn: {
          container: {
            borderWidth: 0,
            marginTop: 5,
          },
          text: {
            fontSize: 10,
            color: appTheme.primaryText,
          },
        },
        privacy: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        divider: {
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        },
        dividerLine: {
          flex: 1, borderTopWidth: 1, borderTopColor: '#e6e6e6',
        },
        dividerTitle: {
          height: 20,
          width: 40,
          ...IRANSans_Medium,
          color: appTheme.border,
          fontSize: 12,
          textAlign: 'center',
        },
        qrLoginBtn: {
          container: {
            borderWidth: 0,
          },
          text: {
            fontSize: 12,
          },
        },
      },
    },
    {
      query: ORIENTATION_LANDSCAPE,
      style: {
        wrapper: {
          flex: 1,
          flexDirection: 'row',
        },
        topWrap: {
          flex: 1,
        },
        headerWrapper: {
          flex: 1,
          justifyContent: 'center',

        },
        formWrap: {
          flex: 1,
          justifyContent: 'space-between',

        },
      },
    },
  ],
];