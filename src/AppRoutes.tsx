import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';

import { LoadableSubjectListContainer } from './AppLoader';

const Routes = () => (
  <Switch>
    <Redirect path="/" exact={true} to="/dashboard"/>
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={LoadableSubjectListContainer} />
    <Redirect to="/dashboard"/>
  </Switch>
);

export default Routes;
