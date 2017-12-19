import { combineReducers, createStore } from 'redux';

import navbarReducer, { NavbarState } from './Components/Navbar/NavbarReducer';
import subjectsReducer, { SubjectsSearchState } from './Components/Subjects/SubjectsReducer';

export type AppState = {
  navbarReducer: NavbarState;
  subjectsReducer: SubjectsSearchState;
};

const AppReducer = combineReducers({
  navbarReducer,
  subjectsReducer
});

let store = createStore(AppReducer);

const configureStore = () => {
  return store;
};

export default configureStore;
