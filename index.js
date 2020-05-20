/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import Toast from 'react-native-simple-toast';

global.toast = {
  show: (title) => Toast.showWithGravity(title, Toast.LONG, Toast.CENTER),
};

const Demo = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Demo);
