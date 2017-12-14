import * as React from 'react';
import './App.css';

import NavbarHeaderContainer from './Components/NavbarHeader/NavbarHeaderContainer';
import NavbarActionsContainer from './Components/NavbarActions/NavbarActionsContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeaderContainer />
        <NavbarActionsContainer />
      </div>
    );
  }
}

export default App;
