import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecentBetsScreen } from '../screens'

const AuthStack = createNativeStackNavigator();

export type AuthStackList = {
  RecentBets: undefined;
  NewBet: undefined;
  Account: undefined;
}

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="RecentBets" component={RecentBetsScreen} />
    </AuthStack.Navigator>
  )
}
