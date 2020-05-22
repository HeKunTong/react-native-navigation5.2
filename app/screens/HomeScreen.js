import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

class HomeScreen extends Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>宝贝，520快乐!</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
