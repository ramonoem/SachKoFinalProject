

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppRouting from './src/config/appRouting';
import { Provider } from 'mobx-react';
import store from './src/store';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component{
  render() {
    return (
      <Provider {...store}>
        <AppRouting />
      </Provider>
    );
  }
}

