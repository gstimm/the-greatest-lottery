import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecentGamesScreen } from '../screens';
import { TabBar } from '../components/index';
import NewBetScreen from './Drawer';

const Tab = createBottomTabNavigator();

export type TabList = {
  Home: undefined;
  NewBet: undefined;
  Account: undefined;
}

export default function AuthRoutes() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={RecentGamesScreen} />
      <Tab.Screen name="NewBet" component={NewBetScreen} />
      <Tab.Screen name="Account" component={RecentGamesScreen} />
    </ Tab.Navigator >
  )
}
