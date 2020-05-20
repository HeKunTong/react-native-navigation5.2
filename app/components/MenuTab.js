import React from 'react';
import { Text } from 'react-native';

const MenuTab = ({focused}) => {
  return <Text style={focused ? {color: '#45c018'} : {color: '#999'}}>12</Text>;
};

export default MenuTab;
