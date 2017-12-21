import * as React from 'react';

import {
  ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Icon, Toolbar
} from '../../AppMaterialUI';

import './SubjectDetails.css';

import { SubjectItem } from '../Subjects/SubjectModel';

export type SubjectDetailsProps = { expanded: string, onPanelChange: Function } & SubjectItem;

export enum PanelType {
  Overview = 'overview',
  Assessment = 'assessment',
  Requirements = 'requirements',
  Syllabus = 'syllabus'
}

const SubjectDetails = (
  { title, assessmentDate, numOfSeats, image, type, color, expanded, onPanelChange }: SubjectDetailsProps) => (
  <div className="subject-details-container">
    <Toolbar className="subject-details-toolbar">
      <img src={process.env.PUBLIC_URL + '/images/' + image + '.jpg'}/>
      <Typography className="subject-details-title">{title.toUpperCase()}</Typography>
      <div className="subject-details-type" style={{backgroundColor: color}}>{type}</div>
    </Toolbar>
    <ExpansionPanel
      expanded={expanded === PanelType.Overview}
      onChange={() => onPanelChange(PanelType.Overview)}
      className="subject-details-overview"
    >
      <ExpansionPanelSummary expandIcon={<Icon>info_outline</Icon>}>
        <Typography className="subject-details-heading">Overview</Typography>
        <Typography className="subject-details-secondary-heading" color="secondary">
          {numOfSeats} SEATS
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          This subject is blah blah blah
          <br />
          Blah blah blah...
          <br />
          More blah blah blah
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel
      expanded={expanded === PanelType.Assessment}
      onChange={() => onPanelChange(PanelType.Assessment)}
    >
      <ExpansionPanelSummary expandIcon={<Icon>event</Icon>}>
        <Typography className="subject-details-heading">Assessment Date</Typography>
        <Typography className="subject-details-secondary-heading" color="secondary">
          {assessmentDate.toLocaleDateString()}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <label>City:</label>A city in the world
          <br />
          <label>Address:</label> Somewhere in the city
          <br />
          <label>Time:</label> At a specific time in the address
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel
      expanded={expanded === PanelType.Requirements}
      onChange={() => onPanelChange(PanelType.Requirements)}
    >
      <ExpansionPanelSummary expandIcon={<Icon>report_problem</Icon>}>
        <Typography className="subject-details-heading">Requirements</Typography>
        <Typography className="subject-details-secondary-heading" color="secondary">
          Mandatory to have them
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Requirement 1
          <br />
          Requirement 2
          <br />
          Requirement 3
          <br />
          Requirement 4
          <br />
          Requirement 5
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel
      expanded={expanded === PanelType.Syllabus}
      onChange={() => onPanelChange(PanelType.Syllabus)}
    >
      <ExpansionPanelSummary expandIcon={<Icon>library_books</Icon>}>
        <Typography className="subject-details-heading">Syllabus</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lesson 1
          <br />
          Lesson 2
          <br />
          Lesson 3
          <br />
          Lesson 4
          <br />
          Lesson 5
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default SubjectDetails;
