import React from 'react';
import MenuTab from '../components/MenuTab';

const menus = {
  'home': {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => <MenuTab focused={focused}/>
  },
  'me': {
    tabBarLabel: '我',
    tabBarIcon: ({focused}) => <MenuTab focused={focused}/>
  }
};

export default menus;
