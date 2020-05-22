import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import TabsScreen from './Tabs';

const Stack = createStackNavigator();

const Routers = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' headerMode='none'>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Tabs' component={TabsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routers;
