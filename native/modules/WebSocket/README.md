
# react-native-web-socket

## Getting started

`$ npm install react-native-web-socket --save`

### Mostly automatic installation

`$ react-native link react-native-web-socket`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-web-socket` and add `RNWebSocket.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWebSocket.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import plus.igap.websocket.RNWebSocketPackage;` to the imports at the top of the file
  - Add `new RNWebSocketPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-web-socket'
  	project(':react-native-web-socket').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-web-socket/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-web-socket')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNWebSocket.sln` in `node_modules/react-native-web-socket/windows/RNWebSocket.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using iGapPlus.RNWebSocket;` to the usings at the top of the file
  - Add `new RNWebSocketPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNWebSocket from 'react-native-web-socket';

// TODO: What to do with the module?
RNWebSocket;
```
  