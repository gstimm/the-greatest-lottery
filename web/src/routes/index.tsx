import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  LoggedHomePage,
} from '../pages/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/reset-password" exact component={ResetPasswordPage} />
      <Route path="/home" exact component={LoggedHomePage} />
    </Switch>
  );
};

export default Routes;
