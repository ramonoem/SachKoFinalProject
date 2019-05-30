import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('SachKoVersion1', () => App);

// function set(key, value) {
//     return AsyncStorage.setItem(key, JSON.stringify(value))
//   }

//   function get(key) {
//     function parseJson (item) {
//       try { return JSON.parse(item) }
//       catch (e) { return item }
//     }
//     return AsyncStorage.getItem(key).then(item => parseJson(item))
//   }