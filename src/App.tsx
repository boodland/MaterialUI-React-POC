import * as React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from './AppConfigureStore';

import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Navbar />
      <main className="app-main-container">
        <Dashboard />
      </main>
    </React.Fragment>
  </Provider>
);

export default App;
