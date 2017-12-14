import * as React from 'react';

import NavbarHeaderContainer from '../NavbarHeader/NavbarHeaderContainer';
import NavbarActionsContainer from '../NavbarActions/NavbarActionsContainer';

class NavbarContainer extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeaderContainer />
        <NavbarActionsContainer />
      </div>
    );
  }
}

export default NavbarContainer;
