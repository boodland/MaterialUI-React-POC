import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';
import SubjectListContainer from './Components/SubjectList/SubjectListContainer';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={DashboardListContainer} />
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={SubjectListContainer} />
    <Route component={DashboardListContainer}/>
  </Switch>
);

export default Routes;
