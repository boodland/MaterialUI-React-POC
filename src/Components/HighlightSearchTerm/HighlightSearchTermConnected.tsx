import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState } from '../../AppConfigureStore';

import HighlightSearchTerm, { StateToProps } from './HighlightSearchTerm';

const mapStateToProps = ({subjectsReducer}: AppState): StateToProps => ({
  searchTerm: subjectsReducer.subjectTitle
});

const HighlightSearchTermConnected = withRouter(connect<StateToProps, {}>(
  mapStateToProps,
)(HighlightSearchTerm));

export default HighlightSearchTermConnected;
