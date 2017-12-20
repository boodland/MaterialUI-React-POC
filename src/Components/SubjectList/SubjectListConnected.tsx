import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState } from '../../AppConfigureStore';

import { SubjectListItemProps } from '../SubjectListItem/SubjectListItem';
import SubjectList, { StateToProps } from './SubjectList';

import { getSubjects } from '../Subjects/SubjectsService';

const filterSubjectBy = (subject: SubjectListItemProps, title: string, typeValue: string): boolean => {
  let isValid = !title || subject.title.toLowerCase().includes(title.toLowerCase());

  isValid = isValid &&
    (!typeValue || subject.type === typeValue);

  return isValid;
};

const mapStateToProps = ({subjectsReducer}: AppState): StateToProps => ({
  subjects: getSubjects().filter(
    subject => filterSubjectBy(subject, subjectsReducer.subjectTitle, subjectsReducer.subjectType)
  ),
  subjectSearchTitle: subjectsReducer.subjectTitle,
  subjectSearchType: subjectsReducer.subjectType
});

const SubjectListConnected = withRouter(connect<StateToProps, {}>(
  mapStateToProps
)(SubjectList));

export default SubjectListConnected;
