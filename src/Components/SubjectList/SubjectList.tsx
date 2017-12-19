import * as React from 'react';

import { List } from '../../AppMaterialUI';

import SubjectItem, { SubjectItemProps } from '../SubjectItem/SubjectItem';

export type StateToProps = {
  subjects: SubjectItemProps[];
  subjectSearchTitle: string;
  subjectSearchType: string;
};

const SubjectList = ({ subjects, subjectSearchTitle, subjectSearchType }: StateToProps) => {
  const subjectList = subjects.map((subjectItem: SubjectItemProps) => (
    <SubjectItem
      key={subjectItem.subjectId}
      {...subjectItem}
    />
  )
  );

  return (
    <List className="flex-container" style={{ margin: '0 16px' }}>
      {subjectList}
    </List>
  );
};

export default SubjectList;
