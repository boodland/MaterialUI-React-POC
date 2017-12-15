import { createStore } from 'redux';

import navbarReducer from './Components/Navbar/NavbarReducer';

let store = createStore(navbarReducer);

const configureStore = () => {
  return store;
};

export default configureStore;
