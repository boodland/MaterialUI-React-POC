import * as React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import DashboardListContainer from './Components/DashboardList/DashboardListContainer';

import SubjectsRoutes from './Components/Subjects/SubjectsRoutes';
import { ReactElement } from 'react';

const childFactoryCreator = (classNames: string) => (
  (child: ReactElement<{classNames: string}>) => (
    React.cloneElement(child, {
      classNames
    })
  )
);

const Routes = withRouter((router) => (
  <TransitionGroup
    childFactory={childFactoryCreator(router.location.pathname === '/dashboard' ?
      'dashboard' :
      router.history.action === 'PUSH' ? 'pageToRight' : 'pageToLeft')}
  >
    <CSSTransition
      key={router.location.pathname}
      classNames=""
      timeout={500}
    >
      <div>
        <Switch location={router.location}>
          <Route path="/dashboard" component={DashboardListContainer} />
          <SubjectsRoutes router={router} path="/subjects" />
          <Redirect to="/dashboard"/>
        </Switch>
      </div>
    </CSSTransition>
  </TransitionGroup>
));

export default Routes;
