import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthRoutes from './UnAuthRoutes';
import AuthRoutes from './AuthRoutes';
import { AuthState } from '../store/ducks/auth';
import { ApplicationStore } from '../store/index';
import { useSelector } from 'react-redux';

export default function index() {
  const { isLogged } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth
  );

  return (
    <NavigationContainer>
      {isLogged ? <AuthRoutes /> : <UnAuthRoutes />}
    </NavigationContainer>
  )
}
