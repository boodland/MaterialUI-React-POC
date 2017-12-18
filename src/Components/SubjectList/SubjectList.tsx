import * as React from 'react';

import { List, ListItem, Avatar, Icon, ListItemText } from '../../AppMaterialUI';

import './SubjectList.css';

type SubjectItem = {
  subjectId: number;
  title: string;
  assessmentDate: Date;
  numOfSeats: number;
  type: string;
  color: string;
  image: string;
};

const subjects: SubjectItem[] = [
  {
    subjectId: 1, title: 'History', assessmentDate: new Date(2018, 4),
    numOfSeats: 680, type: 'A', color: 'red', image: 'history'
  },
  {
    subjectId: 2, title: 'Bakery', assessmentDate: new Date(2018, 0),
    numOfSeats: 80, type: 'B', color: 'blue', image: 'bakery'
  },
  {
    subjectId: 3, title: 'Law', assessmentDate: new Date(2017, 9),
    numOfSeats: 320, type: 'C', color: 'gold', image: 'law'
  },
  {
    subjectId: 4, title: 'Science', assessmentDate: new Date(2018, 10),
    numOfSeats: 430, type: 'D', color: 'green', image: 'science'
  },
  {
    subjectId: 5, title: 'Veggie Cuisine', assessmentDate: new Date(2018, 2),
    numOfSeats: 75, type: 'B', color: 'blue', image: 'vegetables'
  },
  {
    subjectId: 6, title: 'Geography', assessmentDate: new Date(2018, 6),
    numOfSeats: 430, type: 'A', color: 'red', image: 'geography'
  },
  {
    subjectId: 7, title: 'Algebra', assessmentDate: new Date(2018, 3),
    numOfSeats: 930, type: 'D', color: 'green', image: 'algebra'
  },
  {
    subjectId: 8, title: 'Music', assessmentDate: new Date(2018, 8),
    numOfSeats: 30, type: 'A', color: 'red', image: 'music'
  }
];

const SubjectList = () => (
  <List>
    {subjects.map(subject => (
      <ListItem key={subject.subjectId} button={true}>
        <Avatar className="subject-avatar" src={process.env.PUBLIC_URL + '/images/' + subject.image + '.jpg'}/>
        <ListItemText
          className="subject-title"
          primary={subject.title}
          secondary={
            <React.Fragment>
              <Icon className="subject-icon">event</Icon>
              <span className="subject-subtitle">{subject.assessmentDate.toDateString()}</span>
            </React.Fragment>
          }
        />
        <div className="subject-seats">
          <div className="subject-seats-number">{subject.numOfSeats}</div>
          <span>SEATS</span>
        </div>
        <div className="subject-type" style={{backgroundColor: subject.color}}>
          <div className="subject-type-name">{subject.type}</div>
          <span>TYPE</span>
        </div>
      </ListItem>
    ))}
  </List>
);

export default SubjectList;
