import * as React from 'react';

import { List } from '../../AppMaterialUI';

import TutorListItem from '../TutorListItem/TutorListItem';
import { TutorItem } from '../Tutors/TutorModel';

import { getTutorsAsync } from '../Tutors/TutorsService';

type TutorListContainerState = {
  tutors: TutorItem[];
};

class TutorListContainer extends React.Component<{}, TutorListContainerState> {

  unmounted: boolean;

  constructor(props: {}, state: TutorListContainerState) {
    super(props);
    this.state = {
      tutors: []
    };
  }

  loadTutors(tutors: TutorItem[]) {
    setTimeout(
      () => {
        if (this.unmounted) { return; }
        this.setState({tutors});
      },
      250);
  }

  componentDidMount() {
    getTutorsAsync()
      .then((tutors) => {
        this.loadTutors(tutors);
      });
  }

  componentWillUnmount() {
    this.unmounted = true;
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
