/**
 * @flow
 */
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import 'core-js/es6/map';

import {AppRegistry} from 'react-native';
import Root from './src/containers/Root';
import bgMessaging from './src/utils/bgMessaging';


AppRegistry.registerComponent('iGapPlus', () => Root);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);