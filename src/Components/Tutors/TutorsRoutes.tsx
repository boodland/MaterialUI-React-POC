import * as React from 'react';
import { Route, Switch, RouteComponentProps,  } from 'react-router-dom';

import { AppLoadable } from '../../AppLoader';

const TutorsImport = () => import('../TutorList/TutorListContainer');
const TutorListLoadable = AppLoadable(TutorsImport);

const TutorsRoutes = ({router, path}: {router: RouteComponentProps<{location: Location}> , path: string}) => (
  <Switch location={router.location}>
    <Route
      path={path}
      exact={true}
      render={() => <TutorListLoadable />}
    />
  </Switch>
);

export default TutorsRoutes;
