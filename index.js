/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Setup from './setup';
import SAddProducts from './screens/AddProducts';
AppRegistry.registerComponent(appName, () => Setup);
