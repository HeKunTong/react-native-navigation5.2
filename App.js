/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Routers from './app/routers';
import Splash from 'react-native-splash-screen';

class App extends Component {

  componentDidMount() {
    console.log(12);
    Splash.hide();
  }

  render() {
   return <Routers />;
 }

}

export default App;
