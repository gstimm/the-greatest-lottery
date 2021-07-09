import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignInPage, SignUpPage, ResetPasswordPage } from '../pages/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/reset-password" exact component={ResetPasswordPage} />
    </Switch>
  );
};

export default Routes;
