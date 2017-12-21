import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import SubjectDetails, { SubjectDetailsProps, PanelType } from './SubjectDetails';

import { getSubject } from '../Subjects/SubjectsService';

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
    this.state = { expanded: PanelType.Overview };
    this.subjectId = +this.props.match.params.subjectId;
  }

  handleChangePanel = (state: string) => {
    this.setState({
      expanded: this.state.expanded === state ? '' : state
    });
  }

  render() {
    const subject = getSubject(this.subjectId);
    const subjectDetailsProps: SubjectDetailsProps = {
      ...subject,
      expanded: this.state.expanded,
      onPanelChange: this.handleChangePanel
    };
    return (
      <SubjectDetails {...subjectDetailsProps}/>
    );
  }
}

export default withRouter(SubjectDetailsContainer);
