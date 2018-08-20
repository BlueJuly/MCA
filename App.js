/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './src/views/Login';
import Homepage from './src/views/Homepage';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Application = createStackNavigator(
  {
    Login:{
      screen:Login
    },
    Homepage:{
      screen:Homepage
    }
  },
  {
    navigationOptions:{
      header:null
    }
  }
);


export default class App extends React.Component {
  render() {
    return (
        <Application />
    );
  }
}

