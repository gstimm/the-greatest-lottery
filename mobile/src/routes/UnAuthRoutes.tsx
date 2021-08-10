import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen } from '../screens'

const UnAuthStack = createNativeStackNavigator();

export type UnAuthStackList = {
  Login: undefined;
  SignUp: undefined;
}

export default function UnAuthRoutes() {
  return (
    <UnAuthStack.Navigator screenOptions={{ headerShown: false }}>
      <UnAuthStack.Screen name="Login" component={LoginScreen} />
      <UnAuthStack.Screen name="SignUp" component={SignUpScreen} />
    </UnAuthStack.Navigator>
  )
}
