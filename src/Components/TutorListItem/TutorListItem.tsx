import * as React from 'react';

import { ListItem, Avatar, Typography, Button, Icon } from '../../AppMaterialUI';

import AppProtectedLinkContainer from '../../AppProtectedLinkContainer';

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
  <AppProtectedLinkContainer
    to={`/tutors/${tutorId}`}
    message="navigate to tutor details"
    className="tutor-flex-item"
    protected={true}
  >
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
      <AppProtectedLinkContainer
        message="contact the tutor"
        to={`/tutors/${tutorId}/contact`}
        protected={true}
      >
        <Button raised={true} color={'accent'} >
          Contact
        </Button>
      </AppProtectedLinkContainer>
    </ListItem>
  </AppProtectedLinkContainer>
);

export default TutorListItem;
