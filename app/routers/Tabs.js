import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MeScreen from '../screens/MeScreen';

import { tabBar } from '../config/tabBar';
import menus from '../config/tabMenu';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator tabBarOptions={tabBar}>
    <Tab.Screen name='Home' component={HomeScreen} options={menus.home}/>
    <Tab.Screen name='Me' component={MeScreen} options={menus.me}/>
  </Tab.Navigator>
);

export default Tabs;
