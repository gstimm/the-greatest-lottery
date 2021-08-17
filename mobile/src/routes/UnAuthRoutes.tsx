import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen, ForgotPasswordScreen } from '../screens'

const UnAuthStack = createNativeStackNavigator();

export type UnAuthStackList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
}

export default function UnAuthRoutes() {
  return (
    <UnAuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <UnAuthStack.Screen name="Login" component={LoginScreen} />
      <UnAuthStack.Screen name="SignUp" component={SignUpScreen} />
      <UnAuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </UnAuthStack.Navigator>
  )
}
