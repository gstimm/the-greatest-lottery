import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  NewPasswordPage,
} from '../pages/index';

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/reset-password" exact component={ResetPasswordPage} />
      <Route path="/forgot-password/:slug" component={NewPasswordPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default UnauthenticatedRoutes;
