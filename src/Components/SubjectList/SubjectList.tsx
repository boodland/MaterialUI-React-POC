import * as React from 'react';

import { List } from '../../AppMaterialUI';

import SubjectListItem, { SubjectListItemProps } from '../SubjectListItem/SubjectListItem';

export type StateToProps = {
  subjects: SubjectListItemProps[];
  subjectSearchTitle: string;
  subjectSearchType: string;
};

const SubjectList = ({ subjects, subjectSearchTitle, subjectSearchType }: StateToProps) => {
  const subjectList = subjects.map((subjectItem: SubjectListItemProps) => (
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
