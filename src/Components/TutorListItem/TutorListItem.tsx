import * as React from 'react';
import { Link } from 'react-router-dom';

import { ListItem } from '../../AppMaterialUI';

import { TutorItem } from '../Tutors/TutorModel';

const TutorListItem =
  ({tutorId, fullName, thumbnail, rating}: {tutorId: number} & TutorItem) => (
  <Link to={`/tutors/${tutorId}`} style={{ textDecoration: 'none' }} className="tutor-item">
    <ListItem button={true}>
      {fullName}
    </ListItem>
  </Link>
);

export default TutorListItem;
