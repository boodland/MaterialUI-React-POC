import * as React from 'react';

import { ListItem, Avatar, Icon, Typography } from '../../AppMaterialUI';

import './SubjectItem.css';

export type SubjectItemProps = {
  subjectId: number;
  title: string;
  assessmentDate: Date;
  numOfSeats: number;
  type: string;
  color: string;
  image: string;
};

const SubjectItem = ({title, assessmentDate, numOfSeats, image, type, color}: SubjectItemProps) => (
  <ListItem button={true} className="subject-item">
    <Avatar className="subject-avatar" src={process.env.PUBLIC_URL + '/images/' + image + '.jpg'}/>
    <div className="subject-text">
      <Typography type="title" noWrap={true} className="subject-title">
          {title}
      </Typography>
      <Typography type="subheading" noWrap={true}>
        <Icon className="subject-icon">event</Icon>
        <span className="subject-date">{assessmentDate.toDateString()}</span>
      </Typography>
    </div>
    <div className="subject-seats">
      <div className="subject-seats-number">{numOfSeats}</div>
      <span>SEATS</span>
    </div>
    <div className="subject-type" style={{backgroundColor: color}}>
      <div className="subject-type-name">{type}</div>
      <span>TYPE</span>
    </div>
  </ListItem>
);

export default SubjectItem;
