import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/signup" exact />
      <Route path="/reset-password" exact />
    </Switch>
  );
};

export default Routes;
