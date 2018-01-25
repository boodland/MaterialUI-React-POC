import * as React from 'react';

import { List } from '../../AppMaterialUI';

import TutorListItem from '../TutorListItem/TutorListItem';
import { TutorItem } from '../Tutors/TutorModel';

import { getTutorsAsync } from '../Tutors/TutorsService';

type TutorListContainerState = {
  tutors: TutorItem[];
};

class TutorListContainer extends React.Component<{}, TutorListContainerState> {

  constructor(props: {}, state: TutorListContainerState) {
    super(props);
    this.state = {
      tutors: []
    };
  }

  componentDidMount() {
    getTutorsAsync()
      .then((tutors) => {
        this.setState({tutors});
      });
  }

  render() {
    let tutorList = this.state.tutors.map((tutorItem: TutorItem, index: number) => (
      <TutorListItem
        key={index}
        tutorId={index + 1}
        {...tutorItem}
      />
    ));

    return (
      <List className="flex-container">
        {tutorList}
      </List>

    );
  }
}

export default TutorListContainer;
