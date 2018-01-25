import * as React from 'react';
import { Card, CardHeader, Icon, CardContent, Button, Chip } from '../../AppMaterialUI';

import './DashboardItem.css';

import AppProtectedLinkContainer from '../../AppProtectedLinkContainer';

export type DashboardItemProps = {
  subjectId: number;
  title: string;
  assessmentDate: Date;
  numOfSeats: number;
  numOfTutors: number;
  numOfExams: number;
  image: string;
};

const DashboardItem = (
  { subjectId, title, assessmentDate, numOfSeats, numOfTutors, numOfExams, image }: DashboardItemProps) => {

  const cardHeader = (
    <CardHeader
      className="card-header"
      title={
        <span className="card-title">
          {title}
        </span>
      }
      subheader={
        <React.Fragment>
          <Icon className="card-icon">event</Icon>
          <span className="card-subtitle">{assessmentDate.toDateString()}</span>
        </React.Fragment>
      }
    />
  );

  const cardContent = (
    <CardContent
      className="card-content"
      style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/' + image + '.jpg)' }}
    >
      <div className="card-content-seats">{numOfSeats} Seats</div>
      <AppProtectedLinkContainer to={`/subjects/${subjectId}`}>
        <Button raised={true} color="default">View Subject</Button>
      </AppProtectedLinkContainer>
    </CardContent>
  );

  const cardFooter = (
    <div className="flex-container">
      <AppProtectedLinkContainer
        to={`/subjects/${subjectId}/exams`}
        protected={true}
        message="to navigate to subject's exams"
      >
        <Chip className="chip-exams" label={numOfExams + ' Exams'}/>
      </AppProtectedLinkContainer>
      <AppProtectedLinkContainer
        to={`/subjects/${subjectId}/tutors`}
        protected={true}
        message="to navigate to subject's tutors"
      >
        <Chip className="chip-tutors" label={numOfTutors + ' Tutors'}/>
      </AppProtectedLinkContainer>
    </div>
  );

  return (
    <Card className="dashboard-flex-item">
      {cardHeader}
      {cardContent}
      {cardFooter}
    </Card>
  );
};

export default DashboardItem;
