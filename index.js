/**
 * @format
 */

import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

export const store = configureStore()

const RNTrevv = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNTrevv);
