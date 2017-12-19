import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState } from '../../AppConfigureStore';

import SubjectSearch, { StateToProps } from './SubjectSearch';

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

const SubjectSearchConnected = withRouter(connect<StateToProps, {}>(
  mapStateToProps
)(SubjectSearch));

export default SubjectSearchConnected;
