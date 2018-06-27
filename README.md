[![Powered By React Native](https://img.shields.io/badge/PoweredBy-ReactNative-blue.svg)](https://facebook.github.io/react-native/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/RooyeKhat-Media/iGap-Plus/pulls)
[![GitHub top language](https://img.shields.io/github/languages/top/RooyeKhat-Media/iGap-Plus.svg)](#)
[![GitHub language count](https://img.shields.io/github/languages/count/RooyeKhat-Media/iGap-Plus.svg)](#)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/RooyeKhat-Media/iGap-Plus.svg)](#)
[![GNU AFFERO GENERAL PUBLIC LICENSE](https://img.shields.io/github/license/RooyeKhat-Media/iGap-Plus.svg)](LICENSE)

## iGap+ messenger
**iGap+** is a cross-platform messaging application (Currently **Android** , **iOS** and **Windows UWP**) and has been created using all latest modern technologies. iGap allows all users and programmers to use all its features, possibilities and potentials.

## Creating your iGap+ Application
We welcome all developers to use our API and source code to create applications on our platform. There are several things we require from all developers for the moment.

* Assign your own [APP_ID](https://github.com/RooyeKhat-Media/iGap-Plus/blob/master/src/constants/configs.js#L6) (Random integer between 1000-100000 ) for your application.
* Please do not use the name iGap / iGap+ for your app — or make sure your users understand that it is unofficial.
* Kindly do not use our standard logo as your app's logo.
* Please remember to publish your code too in order to comply with the licences.

## Installation
1. Fork this repository
2. Clone the forked repository in your local machine
3. Install pre-requirements
   * [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
   * [Yarn](https://yarnpkg.com/lang/en/docs/install)
   * [React Native Windows](https://github.com/Microsoft/react-native-windows/blob/master/docs/GettingStarted.md) (If you want to develop windows version)
4. Install javascript dependencies, By running `yarn install`
5. Run `yarn run i18n`

#### Android specific
* Add the Fabric API and secret key to **android/app/fabric.properties**
    ```
    apiSecret=fabric_secret_key
    apiKey=fabric_api_key
    ```
* Run `react-native run-android`

#### iOS specific
* Create the following files

    **ios/api-keys/fabric/api.key**
    ```
    fabric_api_key
    ```
    
    **ios/api-keys/fabric/secret.key**
    ```
    fabric_secret_key
    ```
* Run `react-native run-ios`

# Contributors Welcome!
Help us to improve iGap+ , iGap+ is designed to easily support additional platforms like [web](https://github.com/necolas/react-native-web) , [macOS](https://github.com/ptmt/react-native-macos) and [linux](https://github.com/status-im/react-native-desktop), check [here](https://github.com/RooyeKhat-Media/iGap-Plus/labels/contributors-welcome) for the contributing  

## API documentation
iGap API manuals: https://github.com/RooyeKhat-Media/iGap-API

Protocol buffers files : https://github.com/RooyeKhat-Media/iGap-API/tree/master/app/assets/proto


## Charge
Using the iGap infrastructure and utilizing it in personal and/or organizational projects are thoroughly free of charge.

## Supports

    Homepage: https://www.igap.net/
    Blog: https://blog.igap.net/
    Issues: https://github.com/RooyeKhat-Media/iGap-Plus/issues

## Partner
**[RooyeKhat Media](https://rooyekhat.co/en)** was founded in 2015 aiming to create communicative and informative platforms supported by Internet and network on the basis of modern technology. We focus on the fields of designing, programming, supporting communicative and media software on mobile phones and tablets.

## IRAN Sans-serif fonts
IRAN Sans-serif fonts are considered a proprietary software.To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com 

This set of fonts are used in this project (iGap+) under the license: (CKXUL)

## Licence
iGap+ is released under the [GNU Affero General Public License](LICENSE) . This Free Software Foundation license is fairly new, and thus we wanted to talk about how this license differs from GPL.

![GNU AFFERO GENERAL PUBLIC LICENSE - Version 3](https://www.gnu.org/graphics/agplv3-88x31.png)