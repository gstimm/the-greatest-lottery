import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecentGamesScreen, NewBetScreen } from '../screens';
import { TabBar } from '../components/index';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export type TabList = {
  RecentGames: undefined;
  NewBet: undefined;
  Account: undefined;
}

export default function AuthRoutes() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={RecentGamesScreen} />
      <Tab.Screen name="NewBet" component={NewBetScreen} />
      <Tab.Screen name="Account" component={NewBetScreen} />
    </ Tab.Navigator >
  )
}
