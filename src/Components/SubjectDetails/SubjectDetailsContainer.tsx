import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import SubjectDetails from './SubjectDetails';

import { getSubject } from '../Subjects/SubjectsService';

import { SubjectItem } from '../Subjects/SubjectModel';

type SubjectDetailsContainerProp = {
  subjectId: string;
};

type SubjectDetailsContainerState = {
  expanded: string;
};

class SubjectDetailsContainer extends
  React.Component<RouteComponentProps<SubjectDetailsContainerProp>, SubjectDetailsContainerState> {

  private subjectId: number;

  constructor(props: RouteComponentProps<SubjectDetailsContainerProp>, state: SubjectDetailsContainerState) {
    super(props);
    this.state = { expanded: '' };
    this.subjectId = +this.props.match.params.subjectId;
  }

  handleChangePanel = (state: string) => {
    this.setState({ expanded: state });
  }

  render() {
    const subject: SubjectItem = getSubject(this.subjectId);
    return (
      <SubjectDetails {...subject}/>
    );
  }
}

export default withRouter(SubjectDetailsContainer);
