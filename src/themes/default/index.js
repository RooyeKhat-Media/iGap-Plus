export const primary = '#3298ee';
export const selectedBlue = '#b1d6ee';
export const golden = '#eecd00';
export const white = '#ffffff';
export const white500 = '#faf8f6';
export const gray100 = '#fafafa';
export const gray200 = '#f0f0f0';
export const gray300 = '#eeeeee';
export const gray350 = '#e9eaed';
export const gray400 = '#e6e6e6';
export const gray500 = '#c7c7c7';
export const gray600 = '#afafaf';
export const gray700 = '#aaaaaa';
export const gray800 = '#a2a2a2';
export const gray950 = '#7d7d7d';
export const gray1000 = '#606060';

export const black200 = '#444444';
export const black500 = '#222222';
export const black600 = '#202020';
export const blackTransparent = 'rgba(0,0,0,0.4)';

export default {
  palette: {
    primaryColor: primary,
    canvasColor: white,
  },
  fontFamily: 'IRANSans',
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
  bottomNavigation: {
    container: {
      elevation: 0,
      borderTopWidth: 1,
      borderTopColor: gray400,
    },
  },
  bottomNavigationAction: {
    container: {
      minWidth: 61,
      maxWidth: 132,
      paddingBottom: 6,
      paddingTop: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    containerActive: {
      paddingTop: 12,
    },
    icon: {
      fontSize: 30,
      color: gray950,
    },
    iconActive: {
      color: black500,
    },
  },

  listItem: {
    primaryText: {
      fontFamily: 'IRANSans_Medium',
      textAlign: 'left',
      fontSize: 15,
      lineHeight: 20,
    },
    secondaryText: {
      fontFamily: 'IRANSans',
      fontSize: 12,
    },
    leftElementContainer: {
      width: 55,
      marginLeft: 10,
    },
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
    UserNewProfile: {
      layoutBackgroundColor: white,
      selectAvatarBorderColor: gray950,
    },
    UserTwoStepForget: {
      layoutBackgroundColor: white,
    },
    UserTwoStepRecoveryByEmail: {
      layoutBackgroundColor: white,
    },
    UserTwoStepRecoveryByQuestion: {
      layoutBackgroundColor: white,
    },
    MemberList: {
      roleOwnerStarColor: golden,
      roleAdminStarColor: primary,
      roleModeratorStarColor: gray700,
    },
  },
};