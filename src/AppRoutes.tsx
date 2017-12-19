import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';
import SubjectListContainer from './Components/SubjectList/SubjectListContainer';

const Routes = () => (
  <Switch>
    <Redirect path="/" exact={true} to="/dashboard"/>
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={SubjectListContainer} />
    <Redirect to="/dashboard"/>
  </Switch>
);

export default Routes;
