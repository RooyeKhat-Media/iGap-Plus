export const primary = '#3298ee';
export const white = '#ffffff';
export const gray100 = '#fafafa';
export const gray200 = '#f0f0f0';
export const gray300 = '#eeeeee';
export const gray400 = '#e6e6e6';
export const gray500 = '#c7c7c7';
export const gray600 = '#afafaf';
export const gray700 = '#aaaaaa';
export const gray800 = '#a2a2a2';
export const gray950 = '#7d7d7d';

export const black200 = '#444444';
export const black500 = '#222222';

export default {
  palette: {
    primaryColor: primary,
    canvasColor: white,
  },
  toolbar: {
    container: {
      height: 50,
      elevation: 0,
      borderBottomWidth: 1,
      borderBottomColor: gray500,
      paddingBottom: 1,
      backgroundColor: gray100,
    },
    titleText: {
      color: black500,
    },
    rightElement: {
      color: black500,
    },
    leftElement: {
      color: black500,
    },
  },
  button: {
    text: {
      marginLeft: 3,
    },
    container: {
      borderWidth: 0,
      height: 43,
      elevation: 0,
    },
  },
  primary: {
    text: {
      color: black500,
    },
  },
  buttonFlat: {
    container: {
      height: 40,
      borderWidth: 1,
      borderColor: gray500,
      elevation: 0,
    },
  },
  buttonPrimary: {
    backgroundColor: 'red',
  },

  pages: {
    Intro: {
      wrapperBackgroundColor: gray200,
      layoutBackgroundColor: white,
      titleColor: black500,
      subTitleColor: gray500,
      btnBackgroundColor: gray100,
      btnTextColor: black500,
      btnActiveBackgroundColor: primary,
      btnActiveTextColor: white,
      dotBackgroundColor: gray500,
      dotBorderColor: gray500,
      dotActiveBackgroundColor: black500,
    },
    UserRegister: {
      layoutBackgroundColor: white,
      changeLanguagePickerBackgrodColor: white,
      headerTitleColor: black200,
      plusWrapBackgroundColor: gray700,
      plusTitleColor: white,
      helpColor: gray600,
      privacyBtnColor: gray800,
      dividerTitleColor: gray800,
      dividerTitleBackgroundColor: white,
    },
    UserVerify: {
      layoutBackgroundColor: white,
      verifyTitleColor: black500,
      verifySubTitleColor: black500,
      resendTxtColor: gray700,
    },
    UserTwoStepVerification: {
      layoutBackgroundColor: white,
      TWStepTitleColor: black500,
      resendTxtColor: gray700,
    },
  },
};