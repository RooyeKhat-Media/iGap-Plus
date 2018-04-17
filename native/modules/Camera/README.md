
# react-native-igap-camera

## Getting started

`$ npm install react-native-igap-camera --save`

### Mostly automatic installation

`$ react-native link react-native-igap-camera`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import plus.igap.camera.RNIGCameraPackage;` to the imports at the top of the file
  - Add `new RNIGCameraPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-igap-camera'
  	project(':react-native-igap-camera').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-igap-camera/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-igap-camera')
  	```


## Usage
```javascript
import RNIGCamera from 'react-native-igap-camera';

// TODO: What to do with the module?
RNIGCamera;
```
  