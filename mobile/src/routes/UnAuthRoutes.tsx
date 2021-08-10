import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login'

const UnAuthStack = createNativeStackNavigator();

export default function UnAuthRoutes() {
  return (
      <UnAuthStack.Navigator screenOptions={{headerShown: false}}>
        <UnAuthStack.Screen name="Login" component={LoginScreen} />
      </UnAuthStack.Navigator>
  )
}
