import * as React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import './AppTransitions.css';

import configureStore from './AppConfigureStore';

import Navbar from './Components/Navbar/Navbar';
import Routes from './AppRoutes';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Navbar />
      <main className="app-main-container">
        <Routes />
      </main>
    </React.Fragment>
  </Provider>
);

export default App;
