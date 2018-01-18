import * as React from 'react';
import { Route, Switch, RouteComponentProps,  } from 'react-router-dom';

import { AppLoadable } from '../../AppLoader';

const SubjectsImport = () => import('../Subjects/Subjects');
const SubjectDetailsContainerImport = () => import('../SubjectDetails/SubjectDetailsContainer');

const SubjectsRoutes = ({router, path}: {router: RouteComponentProps<{location: Location}> , path: string}) => (
  <Switch location={router.location}>
    <Route path={path} exact={true} component={AppLoadable(SubjectsImport)} />
    <Route path={`${path}/:subjectId`} component={AppLoadable(SubjectDetailsContainerImport)} />
  </Switch>
);

export default SubjectsRoutes;
