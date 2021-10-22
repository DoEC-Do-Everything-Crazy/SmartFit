/**
 * @format
 */
import 'intl';
import 'intl/locale-data/jsonp/en';
import './src/I18n';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
