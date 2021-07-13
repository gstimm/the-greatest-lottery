import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';
import { ApplicationStore } from './store/index';
import GlobalStyle from './styles/global';
import { AuthState } from './store/ducks/auth';

const App: React.FC = () => {
  const { isLogged } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {isLogged ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BrowserRouter>
    </>
  );
};

export default App;
