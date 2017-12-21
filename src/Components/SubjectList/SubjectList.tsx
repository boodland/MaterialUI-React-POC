import * as React from 'react';

import { List } from '../../AppMaterialUI';

import SubjectListItem from '../SubjectListItem/SubjectListItem';
import { SubjectItem } from '../Subjects/SubjectModel';

export type StateToProps = {
  subjects: SubjectItem[];
  subjectSearchTitle: string;
  subjectSearchType: string;
};

const SubjectList = ({ subjects, subjectSearchTitle, subjectSearchType }: StateToProps) => {
  const subjectList = subjects.map((subjectItem: SubjectItem) => (
    <SubjectListItem
      key={subjectItem.subjectId}
      {...subjectItem}
    />
  )
  );

  return (
    <List className="flex-container">
      {subjectList}
    </List>
  );
};

export default SubjectList;
