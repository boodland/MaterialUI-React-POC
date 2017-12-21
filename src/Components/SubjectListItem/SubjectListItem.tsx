import * as React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, Avatar, Icon, Typography } from '../../AppMaterialUI';

import HighlightSearchTermConnected from '../HighlightSearchTerm/HighlightSearchTermConnected';

import './SubjectListItem.css';

import { SubjectItem } from '../Subjects/SubjectModel';

const SubjectListItem =
  ({ subjectId, title, assessmentDate, numOfSeats, image, type, color }: SubjectItem) => (
  <Link to={`/subjects/${subjectId}`} style={{ textDecoration: 'none' }} className="subject-item">
    <ListItem button={true}>
      <Avatar className="subject-avatar" src={process.env.PUBLIC_URL + '/images/' + image + '.jpg'}/>
      <div className="subject-text">
        <Typography type="title" noWrap={true} className="subject-title">
            <HighlightSearchTermConnected text={title} />
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
  </Link>
);

export default SubjectListItem;
