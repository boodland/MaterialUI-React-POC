import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';
import SubjectList from './Components/SubjectList/SubjectList';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={DashboardListContainer} />
    <Route path="/dashboard" component={DashboardListContainer} />
    <Route path="/subjects" component={SubjectList} />
    <Route component={DashboardListContainer}/>
  </Switch>
);

export default Routes;
