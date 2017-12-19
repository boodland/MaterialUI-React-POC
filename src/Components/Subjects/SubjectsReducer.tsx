const CHANGE_SUBJECT_TITLE = 'CHANGE_SUBJECT_TITLE';
const CHANGE_SUBJECT_TYPE = 'CHANGE_SUBJECT_TYPE';

export const changeSubjectTitleAction = (subjectTitle: string) => (
  {
    type: CHANGE_SUBJECT_TITLE,
    searchTerm: subjectTitle
  }
);

export const changeSubjectTypeAction = (subjectType: string) => (
  {
    type: CHANGE_SUBJECT_TYPE,
    searchTerm: subjectType
  }
);

export type SubjectsSearchState = {
  subjectTitle: string;
  subjectType: string;
};

const initialState = { subjectTitle: '', subjectType: '' };

const subjectsReducer = (state = initialState, action: { type: string, searchTerm: string }) => {
  switch (action.type) {
    case CHANGE_SUBJECT_TITLE:
      return { ...state, subjectTitle: action.searchTerm };
    case CHANGE_SUBJECT_TITLE:
      return { ...state, subjectType: action.searchTerm };
    default:
      return state;
  }
};

export default subjectsReducer;
