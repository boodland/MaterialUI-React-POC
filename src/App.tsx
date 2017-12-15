import * as React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from './AppConfigureStore';

import Navbar from './Components/Navbar/Navbar';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navbar />
  </Provider>
);

export default App;
