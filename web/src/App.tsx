import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';
import { ApplicationStore } from './store/index';
import GlobalStyle from './styles/global';
import { AuthState } from './store/ducks/auth';
import { Footer } from './components';

const App: React.FC = () => {
  const { isLogged } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        {isLogged ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
