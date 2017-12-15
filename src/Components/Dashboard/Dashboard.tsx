import * as React from 'react';
import { Card, CardHeader, Icon, CardContent, Button, Chip } from '../../AppMaterialUI';

import './Dashboard.css';

export type DashboardItem = {
  subjectId: number;
  title: string;
  assessmentDate: Date;
  numOfSeats: number;
  numOfTutors: number;
  numOfExams: number;
  image: string;
};

export type DashboardProps = {
  dashboardItem: DashboardItem;
};

const Dashboard = ({dashboardItem}: DashboardProps) => {

  const cardHeader = (
    <CardHeader
      className="card-header"
      title={
        <span className="card-title">
          {dashboardItem.title}
        </span>
      }
      subheader={
        <React.Fragment>
          <Icon className="card-icon">event</Icon>
          <span className="card-subtitle">{dashboardItem.assessmentDate.toDateString()}</span>
        </React.Fragment>
      }
    />
  );

  const cardContent = (
    <CardContent
      className="card-content"
      style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/' + dashboardItem.image + '.jpg)' }}
    >
      <div>{dashboardItem.numOfSeats} Seats</div>
      <Button raised={true} color="default">View Subject</Button>
    </CardContent>
  );

  const cardFooter = (
    <div className="flex-container">
      <Chip
        className="chip-exams"
        label={dashboardItem.numOfExams + ' Exams'}
      />
      <Chip
        className="chip-tutors"
        label={dashboardItem.numOfTutors + ' Tutors'}
      />
    </div>
  );

  return (
    <Card className="flex-item">
      {cardHeader}
      {cardContent}
      {cardFooter}
    </Card>
  );
};

export default Dashboard;
