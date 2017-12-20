import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type SubjectDetailsProp = {
  subjectId: string;
};

const SubjectDetails = ({ match }: RouteComponentProps<SubjectDetailsProp>) => (
  <p>SubjectDetails Works! {match.params.subjectId}</p>
);

export default withRouter(SubjectDetails);
