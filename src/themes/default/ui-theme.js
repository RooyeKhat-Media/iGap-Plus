import {appTheme} from './index';
import {IRANSans_Medium} from '../../constants/fonts/index';

const uiTheme = () => {
  return {
    palette: {
      primaryColor: appTheme.primary,
      canvasColor: 'white',
    },
    toolbar: {
      container: {
        height: 50,
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: appTheme.border,
        paddingBottom: 1,
        backgroundColor: appTheme.toolbar,
      },
      titleText: {
        fontWeight: null,
        color: appTheme.toolbarText,
        fontSize: 18,
        alignSelf: 'flex-start',
        ...IRANSans_Medium,
      },
      rightElement: {
        color: appTheme.toolbarText,
      },
      leftElement: {
        color: appTheme.toolbarText,
      },
    },
    button: {
      text: {
        fontWeight: null,
        marginLeft: 3,
        color: appTheme.primaryText,
      },
      container: {
        borderWidth: 0,
        height: 43,
        elevation: 0,
      },
    },
    primary: {
      text: {
        color: appTheme.titleText,
      },
    },
    buttonFlat: {
      container: {
        height: 40,
        borderWidth: 1,
        borderColor: appTheme.border,
        elevation: 0,
      },
    },
    actionButton: {
      container: {
        backgroundColor: appTheme.primary,
      },
    },
    buttonPrimary: {
      backgroundColor: appTheme.primary,
    },
    bottomNavigation: {
      container: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: appTheme.border,
      },
    },
    bottomNavigationAction: {
      container: {
        minWidth: 61,
        maxWidth: 132,
        paddingTop: 15,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: appTheme.toolbar,
      },
      containerActive: {
        paddingTop: 15,
      },
      icon: {
        fontSize: 30,
        color: appTheme.mainTabIcon,
      },
      iconActive: {
        color: appTheme.activeIcon,
      },
    },

    listItem: {
      primaryText: {
        textAlign: 'left',
        fontSize: 15,
        lineHeight: 20,
        ...IRANSans_Medium,
        color: appTheme.primaryText,
      },
      secondaryText: {
        fontSize: 12,
        ...IRANSans_Medium,
        color: appTheme.secondaryText,
        textAlign: 'left',
      },
      leftElementContainer: {
        width: 55,
        marginEnd: 10,
      },
      container: {
        backgroundColor: appTheme.pageBackground,
      },
    },
    pages: {},
  };
};

export default uiTheme;