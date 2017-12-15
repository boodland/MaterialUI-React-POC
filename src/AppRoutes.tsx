import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';
import Subject from './Components/Subject/Subject';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={DashboardListContainer} />
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={Subject} />
    <Route component={DashboardListContainer}/>
  </Switch>
);

export default Routes;
