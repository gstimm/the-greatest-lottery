import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { SignInPage, SignUpPage, ResetPasswordPage } from '../pages/index';

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/reset-password" exact component={ResetPasswordPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default UnauthenticatedRoutes;
