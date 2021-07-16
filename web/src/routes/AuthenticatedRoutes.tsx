import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, NewBetPage, AccountPage } from '../pages/index';

const AuthenticatedRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/new-bet" exact component={NewBetPage} />
      <Route path="/account" exact component={AccountPage} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AuthenticatedRoutes;
