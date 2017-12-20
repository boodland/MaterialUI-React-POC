import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';

import SubjectsRoutes from './Components/Subjects/SubjectsRoutes';

const Routes = () => (
  <Switch>
    <Redirect path="/" exact={true} to="/dashboard"/>
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={SubjectsRoutes} />
    <Redirect to="/dashboard"/>
  </Switch>
);

export default Routes;
