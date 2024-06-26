import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Portfolio from '../screens/portfolio';
import Profile from '../screens/profile';
import {COLORS} from '../screens/shared/theme/AppColors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name="DashBoard" component={Dashboard} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
