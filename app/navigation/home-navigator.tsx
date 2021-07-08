import React, { } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/home/home-screen';
import FavoriteScreen from '../screens/favorite/favorite-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
const Tab = createMaterialTopTabNavigator();

export default function HomeNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
