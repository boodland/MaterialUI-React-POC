import * as React from 'react';

import SubjectSearchConnected from '../SubjectSearch/SubjectSearchConnected';
import SubjectListConnected from '../SubjectList/SubjectListConnected';

const subjects = () => (
  <React.Fragment>
    <SubjectSearchConnected />
    <SubjectListConnected />
  </React.Fragment>
);

export default subjects;
