import * as React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from './AppConfigureStore';

import Navbar from './Components/Navbar/Navbar';
import DashboardContainer from './Components/Dashboard/DashboardContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Navbar />
      <main className="app-main-container">
        <DashboardContainer />
      </main>
    </React.Fragment>
  </Provider>
);

export default App;
