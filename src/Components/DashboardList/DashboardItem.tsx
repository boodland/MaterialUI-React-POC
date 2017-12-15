import * as React from 'react';
import { Card, CardHeader, Icon, CardContent, Button, Chip } from '../../AppMaterialUI';

import './DashboardItem.css';

export type DashboardItemProps = {
  subjectId: number;
  title: string;
  assessmentDate: Date;
  numOfSeats: number;
  numOfTutors: number;
  numOfExams: number;
  image: string;
};

const DashboardItem = ({title, assessmentDate, numOfSeats, numOfTutors, numOfExams, image}: DashboardItemProps) => {

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
      <div>{numOfSeats} Seats</div>
      <Button raised={true} color="default">View Subject</Button>
    </CardContent>
  );

  const cardFooter = (
    <div className="flex-container">
      <Chip
        className="chip-exams"
        label={numOfExams + ' Exams'}
      />
      <Chip
        className="chip-tutors"
        label={numOfTutors + ' Tutors'}
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

export default DashboardItem;
