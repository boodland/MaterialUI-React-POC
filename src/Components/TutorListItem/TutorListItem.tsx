import * as React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, Avatar, Typography, Button, Icon } from '../../AppMaterialUI';

import { TutorItem } from '../Tutors/TutorModel';

import './TutorListItem.css';

function getRatingStars(rating: number) {
  const stars = Array(rating).fill('star');
  const emptyStars = Array(5 - rating).fill('star_border');
  const starRating = stars.concat(emptyStars);
  return starRating.map((star: string, index: number) => (
    <Icon key={index} className="rating-icon">{star}</Icon>
  ));
}

const TutorListItem =
  ({tutorId, fullName, thumbnail, rating}: {tutorId: number} & TutorItem) => (
  <Link to={`/tutors/${tutorId}`} style={{ textDecoration: 'none' }} className="tutor-flex-item">
    <ListItem button={true}>
      <Avatar src={thumbnail}/>
      <div className="tutor-text">
        <Typography type="title" noWrap={true} className="subject-title">
            {fullName}
        </Typography>
        <Typography type="subheading" noWrap={true}>
          {getRatingStars(rating)}
        </Typography>
      </div>
      <Button raised={true} color={'accent'} >
        Contact
      </Button>
    </ListItem>
  </Link>
);

export default TutorListItem;
