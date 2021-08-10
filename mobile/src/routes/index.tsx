import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UnAuthRoutes from './UnAuthRoutes'

export default function index() {
  return (
    <NavigationContainer>
      <UnAuthRoutes />
    </NavigationContainer>
  )
}
