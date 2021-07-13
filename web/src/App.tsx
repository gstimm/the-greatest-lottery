import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import store from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const isAuthenticated = false;

  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
