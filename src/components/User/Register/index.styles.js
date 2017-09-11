import * as _ from 'lodash';
import {ORIENTATION_LANDSCAPE} from '../../../constants/screenBreakPoints';

const id = _.uniqueId();
export default [
  id,
  [
    {
      query: {},
      style: {
        layout: {
          backgroundColor: 'white',
        },
        wrapper: {
          flex: 1,
          flexDirection: 'column',
        },
        changeLanguageWrap: {
          padding: 5, flexDirection: 'row', justifyContent: 'center',
          zIndex: 10,
        },
        changeLanguagePicker: {
          wrapper: {
            height: 20,
            flex: 1,
          },
          touchable: {
            backgroundColor: '#fff',
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
          height: 150, alignItems: 'center', marginBottom: 15,
        },
        svg: {
          width: 150, height: 150,
        },
        logoWrap: {
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        headerTitle: {
          fontFamily: 'neuropolitical',
          fontSize: 30,
          color: '#444',
        },
        plusWrap: {
          backgroundColor: '#aaa', height: 17, padding: 1, borderRadius: 2,
        },
        plusTitle: {
          fontSize: 25, fontWeight: 'bold',
          color: '#fff',
          lineHeight: 15,
        },
        topWrap: {},
        formWrap: {
          padding: 15,
        },
        formGroup: {
          marginBottom: 15,
        },
        phoneNumberRow: {
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
        countryCodeInput: {
          paddingRight: 5,
          paddingLeft: 5,
          marginRight: 5,
          width: 50,
          textAlign: 'center',
        },
        phoneNumberInput: {
          container: {
            flex: 1,
          },
          help: {
            fontSize: 10,
            color: '#afafaf',
          },
          error: {
            fontSize: 11,
          },
        },
        picker: {},
        label: {
          fontWeight: 'bold',
          fontSize: 13,
        },
        help: {
          fontSize: 11,
          color: '#aaa',
        },
        countryListItem: {
          container: {backgroundColor: 'transparent', paddingLeft: 0},
        },
        btnSubmit: {
          container: {
            backgroundColor: '#3298ee',
            height: 43,
            elevation: 0,
          },
          text: {
            fontWeight: 'bold', color: '#fff',
            fontSize: 13,
          },
        },

        privacyBtn: {
          container: {
            borderWidth: 0,
            marginTop: 5,
            marginBottom: 5,
          },
          text: {
            fontSize: 10,
            color: '#7d7d7d',
            fontWeight: '100',
          },
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
          fontWeight: 'bold',
          color: '#a2a2a2',
          fontSize: 12,
          textAlign: 'center',
          backgroundColor: '#fff',
        },
        qrLoginBtn: {
          container: {
            borderWidth: 0,
          },
          text: {
            color: '#3298ee',
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