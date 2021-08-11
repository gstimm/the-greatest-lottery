import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecentGamesScreen } from '../screens'

const AuthStack = createNativeStackNavigator();

export type AuthStackList = {
  RecentGames: undefined;
  NewBet: undefined;
  Account: undefined;
}

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="RecentGames" component={RecentGamesScreen} />
    </AuthStack.Navigator>
  )
}
