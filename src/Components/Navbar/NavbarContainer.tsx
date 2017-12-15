import * as React from 'react';

import NavbarHeaderConnected from '../NavbarHeader/NavbarHeaderConnected';
import NavbarActionsConnected  from '../NavbarActions/NavbarActionsConnected';

const NavbarContainer = () => (
  <React.Fragment>
    <NavbarHeaderConnected />
    <NavbarActionsConnected />
  </React.Fragment>
);

export default NavbarContainer;
