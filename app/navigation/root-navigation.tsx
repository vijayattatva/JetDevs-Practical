import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './auth-navigator';
import { useSelector } from 'react-redux';
import HomeNavigator from './home-navigator';

const Stack = createStackNavigator();

type UserLogin = {
  UserLogin: object;
};

export default function RootNavigator() {
  const login = useSelector((state: UserLogin) => state.UserLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#f2f2f2',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
        }}>
        {login.isLoggedIn ?
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeNavigator}
          />
          : <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthNavigator}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
