import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecentGamesScreen, NewBetScreen } from '../screens'

const Tab = createBottomTabNavigator();

export type TabList = {
  RecentGames: undefined;
  NewBet: undefined;
  Account: undefined;
}

export default function AuthRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="RecentGames" component={RecentGamesScreen} />
      <Tab.Screen name="NewBet" component={NewBetScreen} />
    </Tab.Navigator>
  )
}
