import * as React from 'react';
import { Route } from 'react-router-dom';

import { AppLoadable } from '../../AppLoader';

const SubjectsImport = () => import('../Subjects/Subjects');

const SubjectsRoutes = () => (
  <React.Fragment>
    <Route path="/subjects" component={AppLoadable(SubjectsImport)} />
  </React.Fragment>
);

export default SubjectsRoutes;
