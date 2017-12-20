import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState } from '../../AppConfigureStore';
import {
  SubjectsSearchState, changeSubjectTitleAction, changeSubjectTypeAction
} from '../Subjects/SubjectsReducer';

import SubjectSearch, { StateToProps, DispatchToProps } from './SubjectSearch';

const typeList: StateToProps['typeList'] = [
  { text: 'None', value: '' },
  { text: 'A', value: 'A' },
  { text: 'B', value: 'B' },
  { text: 'C', value: 'C' },
  { text: 'D', value: 'D' },
];

const mapStateToProps = ({subjectsReducer}: AppState): StateToProps => ({
  typeList: typeList,
  subjectSearchTitle: subjectsReducer.subjectTitle,
  subjectSearchType: subjectsReducer.subjectType
});

const mapDispatchToProps = (dispatch: Dispatch<SubjectsSearchState>): DispatchToProps => ({
  onChangeSubjectTitle: (title: string) => dispatch(changeSubjectTitleAction(title)),
  onChangeSubjectType: (type: string) => dispatch(changeSubjectTypeAction(type))
});

const SubjectSearchConnected = withRouter(connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(SubjectSearch));

export default SubjectSearchConnected;
