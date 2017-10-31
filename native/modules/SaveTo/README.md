
# react-native-save-to

## Getting started

`$ npm install react-native-save-to --save`

### Mostly automatic installation

`$ react-native link react-native-save-to`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import plus.igap.saveto.RNSaveToPackage;` to the imports at the top of the file
  - Add `new RNSaveToPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-save-to'
  	project(':react-native-save-to').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-save-to/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-save-to')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSaveTo.sln` in `node_modules/react-native-save-to/windows/RNSaveTo.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using iGapPlus.RNSaveTo;` to the usings at the top of the file
  - Add `new RNSaveToPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSaveTo from 'react-native-save-to';

// TODO: What to do with the module?
RNSaveTo;
```
  