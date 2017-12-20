import * as React from 'react';
import { Route } from 'react-router-dom';

import { AppLoadable } from '../../AppLoader';

const SubjectsImport = () => import('../Subjects/Subjects');
const SubjectDetailsImport = () => import('../SubjectDetails/SubjectDetails');

const SubjectsRoutes = ({path}: {path: string}) => (
  <React.Fragment>
    <Route path={path} exact={true} component={AppLoadable(SubjectsImport)} />
    <Route path={`${path}/:subjectId`} component={AppLoadable(SubjectDetailsImport)} />
  </React.Fragment>
);

export default SubjectsRoutes;
