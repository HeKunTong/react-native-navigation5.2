import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const LoginScreen = () => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <StatusBar/>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18}}>login</Text>
    </View>
  </View>
);

export default LoginScreen;
