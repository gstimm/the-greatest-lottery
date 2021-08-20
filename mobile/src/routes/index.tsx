import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthRoutes from './UnAuthRoutes';
import AuthRoutes from './AuthRoutes';
import { AuthState } from '../store/ducks/auth';
import { ApplicationStore } from '../store/index';
import { useSelector } from 'react-redux';
import { LoaderSpinner } from '../components/index';

const index = () => {
  const { isLogged, loading } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth
  );

  return (
    <NavigationContainer>
      {/* {loading && <LoaderSpinner />} */}
      {isLogged ? <AuthRoutes /> : <UnAuthRoutes />}
    </NavigationContainer>
  )
}

export default index;
