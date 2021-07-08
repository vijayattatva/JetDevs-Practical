import React, { } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/home/home-screen';
import FavoriteScreen from '../screens/favorite/favorite-screen';
const Tab = createMaterialBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
